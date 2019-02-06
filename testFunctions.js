const db = require("./dbConfig");

db.select(["people.id","creds.email","creds.password","firstName","lastName","countryCodes.countryCode","types.type","regions.region"]).from('people')
.innerJoin('countryCodes', 'people.countryCode', 'countryCodes.id')
.innerJoin('types', 'people.type', 'types.id')
.innerJoin('regions', 'people.region', 'regions.id')
.innerJoin('creds', 'people.id', 'creds.mentor')
.where({"creds.email":"dan@dan.com"})
.then(res => console.log(res))
.catch(err => console.log(err))

// SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
// FROM Orders
// INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;