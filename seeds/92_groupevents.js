
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groupEvents').del()
    .then(function () {
      // Inserts seed entries
      return knex('groupEvents').insert([
        {groupID: 1, eventID: 1},
        {groupID: 1, eventID: 2},
        {groupID: 2, eventID: 4},
        {groupID: 3, eventID: 5}
      ]);
    });
};
