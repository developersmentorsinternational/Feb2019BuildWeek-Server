const db = require("./dbConfig");

// db.select(["people.id",{email: 'people.id'},"firstName","lastName","people.countryCode","people.type","people.region"]).from('people')
// .innerJoin('countryCodes', 'people.countryCode', 'countryCodes.id')
// .innerJoin('types', 'people.type', 'types.id')
// .innerJoin('regions', 'people.region', 'regions.id')
// .innerJoin('creds', 'email', 'creds.mentor')
// .then(res => console.log(res))
// .catch(err => console.log(err))

db.select(["people.id","firstName","lastName","type"]).from('people')
// .innerJoin('countryCodes', 'people.countryCode', 'countryCodes.id')
.innerJoin('types', 'people.id', 'types.id')
// .innerJoin('regions', 'people.region', 'regions.id')
// .innerJoin('creds', 'people.id', 'creds.mentor')
// .where({type:"MENTOR"})
.then(res => console.log(res))
.catch(err => console.log(err))

// SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
// FROM Orders
// INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;