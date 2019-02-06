
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('regions').del()
    .then(function () {
      // Inserts seed entries
      return knex('regions').insert([
        {id: 1, region: 'FL'},
        {id: 2, region: 'NY'},
        {id: 3, region: 'MA'}
      ]);
    });
};
