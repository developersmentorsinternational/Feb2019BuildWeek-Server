
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clientsgroup').del()
    .then(function () {
      // Inserts seed entries
      return knex('clientsgroup').insert([
        { groupID:1, clientID:4},
        { groupID: 1,clientID:5},        
        { groupID: 1,clientID:6},
        { groupID: 2,clientID:7},
        { groupID: 2,clientID:8},
        { groupID: 3,clientID:9},
        { groupID: 3,clientID:10},
        { groupID: 4,clientID:11},
        { groupID: 4,clientID:12}
      ])
      ;
    });
};
