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
        return db('people')
        .insert(userInfo)
        .then(res => db("users").select("id","email","firstName","lastName","countryCode","phoneNumber")
        .where(
            {id:res[0]}).first()
        )
    },
    // submitMessage: (message) => {

    //     return db('usersmessages')
    //     .insert({...message})
    // },
    // getOwnMessages: (userID) => {
    //     return db('usersmessages')
    //     .where({sender: userID})
    // },
    getRegions: () => {
        return db("regions")
    }
}

module.exports = dbFuncs;