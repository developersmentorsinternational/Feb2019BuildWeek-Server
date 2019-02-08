const db = require("./dbConfig");

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

// const testReg = {   
//     "email": "hey@hey.com", 
//     "firstName":"andy",
//     "lastName":"smith",
//     "password":"password",
//     "countryCode":"1",
//     "phoneNumber":"555-678-4321",
//     "region":50
// }

// db.select(["groups.name","messages.body","messages.created"]).from('groups')
// .innerJoin('groupmessages', 'groups.creatorID', 'groupmessages.creatorID')


const prom1 = db.select(["groups.name","groupmessages.groupID","groupmessages.messageID","messages.body","messages.created"]).from('groupmessages')
.innerJoin('messages','messages.id', 'groupmessages.messageID')
.innerJoin('groups', 'groups.id', 'groupmessages.groupID')

.where({"email": 1})
// .then(res => console.log(res))
// .catch(err => console.log(err))
.then(res => {
    console.log(res)
    process.exit();
    })
.catch(err => {
    console.log(err)
    process.exit();
})


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