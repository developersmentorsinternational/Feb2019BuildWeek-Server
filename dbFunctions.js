const db = require("./dbConfig");

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
        const type = 1;
        return db("people")
        .insert({firstName,lastName,countryCode,region,phoneNumber,type})
        .then(res => {
            return db("creds").insert({mentor:res[0],email,password})
        })
        .catch(err => err)
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
        return db("regions")
    }
}

module.exports = dbFuncs;