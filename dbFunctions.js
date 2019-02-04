const db = require("./dbConfig");

const dbFuncs = {
    getUsers:  () => {
        return db('users')
        .select("id","email","firstName","lastName","countryCode","phoneNumber")
    },
    getUser:  (creds) => {
        return db("users")
        .select("id","email","firstName","lastName","countryCode","phoneNumber","password")
        .where({email: creds.email})
        .first()
    },
    addUser: (userInfo) => {
        return db('users')
        .insert(userInfo)
        .then(res => db("users").select("id","email","firstName","lastName","countryCode","phoneNumber")
        .where(
            {id:res[0]}).first()
        )
    }
}

module.exports = dbFuncs;