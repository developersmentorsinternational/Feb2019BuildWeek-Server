
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groupMessages').del()
    .then(function () {
      // Inserts seed entries
      return knex('groupMessages').insert([
        { groupID: 1, messageID:1},
        { groupID: 1, messageID:2},
        { groupID: 2, messageID:3},
        { groupID: 2, messageID:4},
        { groupID: 3, messageID:5},
        { groupID: 4, messageID:6}
      ]);
    });
};
