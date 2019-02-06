
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        // {firstName: 'Dan',lastName:"Mendez",phoneNumber:"9545551234",countryCode:1,type:1,region:1},
        // {firstName: 'Jason',lastName:"Smith",phoneNumber:"2125559876",countryCode:1,type:1,region:2},
        // {firstName: 'Jane',lastName:"Doe",phoneNumber:"3054567123",countryCode:1,type:1,region:3},
        // {firstName: 'Rick',lastName:"Sanchez",phoneNumber:"6464567123",countryCode:1,type:2,region:1},
        // {firstName: 'Eliza',lastName:"Thornberry",phoneNumber:"7864567098",countryCode:1,type:2,region:1},
        // {firstName: 'Jennifer',lastName:"Holt",phoneNumber:"8284567343",countryCode:1,type:2,region:1},
        // {firstName: 'Andrew',lastName:"Kane",phoneNumber:"3054563056",countryCode:1,type:2,region:2},
        // {firstName: 'John',lastName:"Fernandez",phoneNumber:"3059007123",countryCode:1,type:2,region:2},
        // {firstName: 'Ashley',lastName:"Simmons",phoneNumber:"9984567109",countryCode:1,type:2,region:2},
        // {firstName: 'Adam',lastName:"Savage",phoneNumber:"5643145678",countryCode:1,type:2,region:3},
        // {firstName: 'Erin',lastName:"Bower",phoneNumber:"8671234112",countryCode:1,type:2,region:3},
        // {firstName: 'Sandy',lastName:"Brown",phoneNumber:"9098891612",countryCode:1,type:2,region:3}
        {id:1,firstName: 'Dan',lastName:"Mendez",phoneNumber:"9545551234",countryCode:1,type:1,region:1},
        {id: 2, firstName: 'Jason',lastName:"Smith",phoneNumber:"2125559876",countryCode:1,type:1,region:2},
        {id: 3, firstName: 'Jane',lastName:"Doe",phoneNumber:"3054567123",countryCode:1,type:1,region:3},
        {id: 4, firstName: 'Rick',lastName:"Sanchez",phoneNumber:"6464567123",countryCode:1,type:2,region:1},
        {id: 5, firstName: 'Eliza',lastName:"Thornberry",phoneNumber:"7864567098",countryCode:1,type:2,region:1},
        {id: 6, firstName: 'Jennifer',lastName:"Holt",phoneNumber:"8284567343",countryCode:1,type:2,region:1},
        {id: 7, firstName: 'Andrew',lastName:"Kane",phoneNumber:"3054563056",countryCode:1,type:2,region:2},
        {id: 8, firstName: 'John',lastName:"Fernandez",phoneNumber:"3059007123",countryCode:1,type:2,region:2},
        {id: 9, firstName: 'Ashley',lastName:"Simmons",phoneNumber:"9984567109",countryCode:1,type:2,region:2},
        {id: 10, firstName: 'Adam',lastName:"Savage",phoneNumber:"5643145678",countryCode:1,type:2,region:3},
        {id: 11, firstName: 'Erin',lastName:"Bower",phoneNumber:"8671234112",countryCode:1,type:2,region:3},
        {id: 12, firstName: 'Sandy',lastName:"Brown",phoneNumber:"9098891612",countryCode:1,type:2,region:3}
      ]);
    });
};
