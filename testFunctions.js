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

const testReg = {   
    "email": "hey@hey.com", 
    "firstName":"andy",
    "lastName":"smith",
    "password":"password",
    "countryCode":"1",
    "phoneNumber":"555-678-4321",
    "region":50
}
db("people")
.insert({firstName:testReg.firstName,lastName:testReg.lastName,countryCode:testReg.countryCode,region:testReg.region,phoneNumber:testReg.phoneNumber,type:1})
.then(res => {
    console.log(res)
    return db("creds").insert({mentor:res[0],email:testReg.email,password:testReg.password})
})
.then(res => console.log(res))
.catch(err => console.log(err))



// SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
// FROM Orders
// INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;