
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        { name: 'Florida Group',created:"2019-03-01 08:00",creatorID:1},
        { name: 'South Florida Group',created:"2019-05-03 12:00",creatorID:1},
        { name: "NY Group",created:"2019-02-01 21:30",creatorID:2},
        { name: "MA Group",created:"2019-01-01 22:00",creatorID:3}
      ]);
    });
};

