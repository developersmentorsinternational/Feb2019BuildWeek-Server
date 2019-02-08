const db = require("./dbConfig");
const moment = require("moment");
const twilio = require('twilio');
var client = new twilio(process.env.ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const dbFuncs = {
    getMentors:  () => {
        return db.select(["people.id","creds.email","firstName","lastName","countryCodes.countryCode","types.type","regions.region"]).from('people')
        .innerJoin('countryCodes', 'people.countryCode', 'countryCodes.id')
        .innerJoin('types', 'people.type', 'types.id')
        .innerJoin('regions', 'people.region', 'regions.id')
        .innerJoin('creds', 'people.id', 'creds.mentor')
    },
    getMentor:  (creds) => {
        return db.select(["people.id","creds.email","creds.password","firstName","lastName","countryCodes.countryCode","types.type","regions.region"]).from('people')
        .innerJoin('countryCodes', 'people.countryCode', 'countryCodes.id')
        .innerJoin('types', 'people.type', 'types.id')
        .innerJoin('regions', 'people.region', 'regions.id')
        .innerJoin('creds', 'people.id', 'creds.mentor')
        .where({"creds.email":creds.email})
        .first()
    },
    addMentor: (userInfo) => {
        const {firstName,lastName,countryCode,region,phoneNumber} = userInfo;
        const {email,password} = userInfo;

        return db.transaction(function(trx) {
            db("people").insert({firstName,lastName,countryCode,region,phoneNumber,type:1})
              .transacting(trx)
              .then(function(res) {
                  return db("creds").insert({mentor:res[0],email,password}).transacting(trx)
              })
              .then(res => {
                  trx.commit(res)
                })
              .catch(trx.rollback);
          })
    },
    // submitMessage: (message) => {

    //     return db('usersmessages')
    //     .insert({...message})
    // },
    getOwnMessages: (creds) => {
        return db.select(["groups.name","groupmessages.groupID","groupmessages.messageID","messages.body","messages.created"]).from('groupmessages')
        .innerJoin('messages','messages.id', 'groupmessages.messageID')
        .innerJoin('groups', 'groups.id', 'groupmessages.groupID')
        .where({creatorID:creds.id});
        
    },
    getOwnGroups: (creds) => {
        return db('groups')
        .where({creatorID: creds.id})
    }
    ,
    getRegions: () => {
        return db("regions");
    },
    getResources: () => {
        return Promise.all([db("regions"),db("countryCodes"),db("types")])
        .then(res => {
        const data = {};
        data.regions = res[0]
        data.countryCodes = res[1]
        data.types = res[2]
        return data
        })
        .catch(err => {
            console.log(err);
        })
    },
    getOwnClients: (creds) => {
        return db.select(['clientsgroup.groupID',"groups.name","people.*"]).from('clientsgroup')
        .innerJoin('groups', 'groups.id', 'clientsgroup.groupID')
        .innerJoin('people', 'people.id', 'clientsgroup.clientID')
        .where({creatorID: creds.id});
    },
    getAllClients: () => {
        return db("people").where({type:2});
    },
    getRegionalClients: (creds) => {
        return db.transaction(function(trx) {
            db.select(["regions.id"]).from('people')
            .innerJoin('regions', 'people.region', 'regions.id')
            .innerJoin('creds', 'people.id', 'creds.mentor')
            .where({"mentor":creds.id})
            .first()
              .transacting(trx)
              .then(function(res) {
                  return db.select().from("people").where({region:res.id}).transacting(trx)
              })
              .then(res => {
                  trx.commit(res)
                })
              .catch(trx.rollback);
          })
    }
    ,addClient: (client) => {
        return db("people").insert({firstName:client.firstName,lastName:client.lastName,countryCode:client.countryCode,region:client.region,phoneNumber:client.phoneNumber,type:2})
    },
    createGroup: (creds,group) => {
        return db("groups");
    },
    getEvents: () => {
        return db("events")
    },
    setGroupEvent: (gEvent) => {
        const {event,group,body} = {...gEvent}

        return db.transaction(function(trx) {
            db.select()
            .count("id as CNT")
            .from("groupevents")
            .where({groupID:group})
            .andWhere({eventID:event})
            .first()
            .transacting(trx)
            .then(res => {
                if(res.CNT){
                    throw "This event attached to the specified group";
                } else{
                    return db("groupevents").insert({groupID:group,eventID:event}).transacting(trx)
                }
            })
            .then(() => {
                const created = moment().format('YYYY-MM-DD HH:MM')
                return db("messages").insert({body:body,created}).transacting(trx)
            })
            .then(res => {
                return db("groupmessages").insert({groupID:group,messageID:res[0]}).transacting(trx)
            })
            .then(res => {
                trx.commit(res)
            })
            .catch(trx.rollback);
        })
    },setGrEvRemind: (gEvent) => {
        const {event,group,body} = {...gEvent}

        return db.transaction(function(trx) {
            db.select()
            .count("id as CNT")
            .from("groupevents")
            .where({groupID:group})
            .andWhere({eventID:event})
            .first()
            .transacting(trx)
            .then(res => {
                if(res.CNT){
                    throw "This event attached to the specified group";
                } else{
                    return db("groupevents").insert({groupID:group,eventID:event}).transacting(trx)
                }
            })
            .then(() => {
                return db.select("people.*")
                .from("clientsgroup")
                .innerJoin("people","people.id","clientsgroup.clientID")
                .where({groupID:group}).transacting(trx)
         
            })
            .then( async(res) => {
                const clientMessage = res.map(ele => {
                    const message = `Hi ${ele.firstName},${body}`
                    const phoneNumber = `+1${ele.phoneNumber}`
                    return {message,phoneNumber}
                    })
                const func = async (eventID) => {
                   try{ 
                     const res = await db.select("reminder")
                    .from("events")
                    .where({id:eventID}).first().transacting(trx)
                    return res
                    }catch(err){
                        console.log(err)
                    }
                }
                const remind = await func(event);
                console.log(remind)
                let time = remind.reminder.split(" ")
                time = time[0];
                
                
                const callback = () => Promise.all(
                    clientMessage.map(clientData =>{
                        return client.messages.create({
                            to: process.env.MY_NUM,
                            messagingServiceSid: process.env.SERVICE_SID,
                            body: clientData.message
                          })
                    })
                )
                .then(message => {
                    console.log(message.sid)
                })
                .catch(err => console.log(err));

                setTimeout(callback, time*1000)

                return callback()

            })
            .then(() => {
                const created = moment().format('YYYY-MM-DD HH:MM')
                return db("messages").insert({body:body,created}).transacting(trx)
            })
            .then(res => {
                return db("groupmessages").insert({groupID:group,messageID:res[0]}).transacting(trx)
            })
            .then(res => {
                trx.commit(res)
            })
            .catch(trx.rollback);
        })
    }
    ,
    testTwilio: () => {
        const numbers = []
        numbers.length = 5
        numbers.fill(process.env.MY_NUM)
        Promise.all(
            numbers.map(number =>{
                return client.messages.create({
                    to: process.env.SERVICE_SID,
                    messagingServiceSid: process.env.SERVICE_SID,
                    body: 'Hello from Twilio!'
                  })
            })
        )
        .then(message => {
            console.log(message.sid)
        })
        .catch(err => console.log(err));

        
        //   .then(message => console.log(message.sid))
        //   .catch(error => console.log(error))
        //   .done();
        
    }
}

module.exports = dbFuncs;