const db = require("./dbConfig");

const dbFuncs = {
    getUsers:  () => {
        return db('users')
    },
    getUser:  (creds) => {
        return db("users")
        .where({email: creds.email})
        .first()
    },
    addUser: (userInfo) => {
        return db('users').insert(userInfo)
    }
}

module.exports = dbFuncs;