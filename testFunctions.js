const db = require("./dbConfig");
const moment = require("moment");

// db.select(["people.id","creds.email","creds.password","firstName","lastName","countryCodes.countryCode","types.type","regions.region"]).from('people')
// .innerJoin('countryCodes', 'people.countryCode', 'countryCodes.id')
// .innerJoin('types', 'people.type', 'types.id')
// .innerJoin('regions', 'people.region', 'regions.id')
// .innerJoin('creds', 'people.id', 'creds.mentor')
// .where({"creds.email":"dan@dan.com"})
// .then(res => console.log(res))
// .catch(err => console.log(err))

// db.select(["people.id","creds.email","creds.password","firstName","lastName","countryCodes.countryCode","types.type","regions.region"]).from('people')
// .innerJoin('countryCodes', 'people.countryCode', 'countryCodes.id')
// .innerJoin('types', 'people.type', 'types.id')
// .innerJoin('regions', 'people.region', 'regions.id')
// .innerJoin('creds', 'people.id', 'creds.mentor')
// .where({"creds.email":"dan@dan.com"})
// .then(res => console.log(res))
// .catch(err => console.log(err))

const client = {   
    // "email": "hey@hey.com", 
    "firstName":"zachary",
    "lastName":"hayden",
    "countryCode":"1",
    "phoneNumber":"876-678-4321",
    "region":51
}

// const client = {   
//     "firstName":"zachary",
//     "lastName":"hayden",
//     "countryCode":"1",
//     "phoneNumber":"876-678-4321",
//     "region":51
// }

// db.select(["groups.name","messages.body","messages.created"]).from('groups')
// .innerJoin('groupmessages', 'groups.creatorID', 'groupmessages.creatorID')
////////////////////////////////////////////////////////
// const prom1 = db.select(['clientsgroup.groupID',"groups.name","people.*"]).from('clientsgroup')
// // .innerJoin('messages','messages.id', 'groupmessages.messageID')
// .innerJoin('groups', 'groups.id', 'clientsgroup.groupID')
// .innerJoin('people', 'people.id', 'clientsgroup.clientID')
// // .innerJoin('regions', 'people.region', 'regions.id')
// // .innerJoin('types', 'people.type', 'types.id')
// // .innerJoin('countryCodes', 'people.countryCode', 'countryCodes.id')
// .where({creatorID: 1})


//db("people").insert({firstName:client.firstName,lastName:client.lastName,countryCode:client.countryCode,region:client.region,phoneNumber:client.phoneNumber,type:2})
// db.select(['clientsgroup.groupID',"groups.name","people.*"]).from('clientsgroup')
//         .innerJoin('groups', 'groups.id', 'clientsgroup.groupID')
//         .innerJoin('people', 'people.id', 'clientsgroup.clientID')
//         .where({creatorID: creds.id});

////////////////////////////////
// transaction for clients by mentor's region

// db.select(["regions.id"]).from('people')
// .innerJoin('regions', 'people.region', 'regions.id')
// .innerJoin('creds', 'people.id', 'creds.mentor')
// .where({"creds.id":1})
// .first()
// db("clientsgroup").insert({clientID:1,groupID:4})
// db.select().from("people").where({region:10})
// .then(res => {
//     console.log(res)
//     process.exit();
//     })
// .catch(err => {
//     console.log(err)
//     process.exit();
// })


// db.transaction(function(trx) {
//     db.select(["regions.id"]).from('people')
//     .innerJoin('regions', 'people.region', 'regions.id')
//     .innerJoin('creds', 'people.id', 'creds.mentor')
//     .where({"creds.id":1})
//     .first()
//       .transacting(trx)
//       .then(function(res) {
//           return db.select().from("people").where({region:res.id}).transacting(trx)
//       })
//       .then(res => {
//           trx.commit(res)
//         })
//       .catch(trx.rollback);
//   })
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.error(err);
// });


  


////////////////////////////////
//transaction for attaching a group to an event
// const object = {event:3,group:1,body:"This is a test message"}

// db.transaction(function(trx) {
//     db.select()
//     .count("id as CNT")
//     .from("groupevents")
//     .where({groupID:object.group})
//     .andWhere({eventID:object.event})
//     .first()
//     .transacting(trx)
//     .then(res => {
//         if(res.CNT){
//             throw "This event attached to the specified group";
//         } else{
//             return db("groupevents").insert({groupID:object.group,eventID:object.event}).transacting(trx)
//         }
//     })
//     .then(res => {
//         const created = moment().format('YYYY-MM-DD HH:MM')
//         return db("messages").insert({body:object.body,created}).transacting(trx)
//     })
//     .then(res => {
//         return db("groupmessages").insert({groupID:object.group,messageID:res[0]}).transacting(trx)
//     })
//     .then(res => {
//         trx.commit(res)
//     })
//     .catch(trx.rollback);
// })
// .then(res => {
//     console.log(res)
//     process.exit();
//     })
// .catch(err => {
//     console.log(err)
//     process.exit();
// })

//////////////////////////
// Get group events
// let creds = {}
// creds.id = 1
// db.transaction(function(trx) {
//         db.select()
//         .count("id as CNT")
//         .from("groupevents")
//         .where({groupID:group})
//         .andWhere({eventID:event})
//         .first()
//         .transacting(trx)
//         .then(res => {
//             if(res.CNT){
//                 throw "This event attached to the specified group";
//             } else{
//                 return db("groupevents").insert({groupID:group,eventID:event}).transacting(trx)
//             }
//         })
//         .then(() => {
//             const created = moment().format('YYYY-MM-DD HH:MM')
//             return db("messages").insert({body:body,created}).transacting(trx)
//         })
//         .then(res => {
//             return db("groupmessages").insert({groupID:group,messageID:res[0]}).transacting(trx)
//         })
//         .then(res => {
//             trx.commit(res)
//         })
//         .catch(trx.rollback);
//     })
// }

// db.transaction(function(trx) {
//     db("people").insert({firstName:client.firstName,lastName:testReg.lastName,countryCode:testReg.countryCode,region:testReg.region,phoneNumber:testReg.phoneNumber,type:2})
//       .transacting(trx)
//       .then(function(res) {
//           return db("creds").insert({mentor:res[0],email:testReg.email,password:testReg.password}).transacting(trx)
//       })
//       .then(res => {
//           console.log(res)
//           trx.commit(res)
//         })
//       .catch(trx.rollback);
//   })
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.error(err);
// });
  






// db.select().from('people').where({type:2})
// db("clientsgroup").insert({clientID:1,groupID:4})
// .then(res => {
//     console.log(res)
//     process.exit();
//     })
// .catch(err => {
//     console.log(err)
//     process.exit();
// })

//"groups.id",



///////////////////////////////////////////////////////

// const prom1 = db.select(["groups.name","groupmessages.groupID","groupmessages.messageID","messages.body","messages.created"]).from('groupmessages')
// .innerJoin('messages','messages.id', 'groupmessages.messageID')
// .innerJoin('groups', 'groups.id', 'groupmessages.groupID')

// .where({"email": 1})
// // .then(res => console.log(res))
// // .catch(err => console.log(err))
// .then(res => {
//     console.log(res)
//     process.exit();
//     })
// .catch(err => {
//     console.log(err)
//     process.exit();
// })


// const prom2 = db.select().from('messages')

// Promise.all([prom1,prom2])
// .then(res => {
//     console.log(res)
//     process.exit();
//     })
// .catch(err => {
//     console.log(err)
//     process.exit();
// })


// db.transaction(function(trx) {
//     db("people").insert({firstName:testReg.firstName,lastName:testReg.lastName,countryCode:testReg.countryCode,region:testReg.region,phoneNumber:testReg.phoneNumber,type:1})
//       .transacting(trx)
//       .then(function(res) {
//           return db("creds").insert({mentor:res[0],email:testReg.email,password:testReg.password}).transacting(trx)
//       })
//       .then(res => {
//           console.log(res)
//           trx.commit(res)
//         })
//       .catch(trx.rollback);
//   })
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.error(err);
// });
  


// db("people")
// .insert({firstName:testReg.firstName,lastName:testReg.lastName,countryCode:testReg.countryCode,region:testReg.region,phoneNumber:testReg.phoneNumber,type:1})
// .then(res => {
//     console.log(res)
//     return db("creds").insert({mentor:res[0],email:testReg.email,password:testReg.password})
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))



// SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
// FROM Orders
// INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

const group = 5

db.select("people.*")
.from("clientsgroup")
.innerJoin("people","people.id","clientsgroup.clientID")
.where({groupID:group})
.then(res => {
    console.log(res)
    process.exit();
    })
.catch(err => {
    console.log(err)
    process.exit();
})