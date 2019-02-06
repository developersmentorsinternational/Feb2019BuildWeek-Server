
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countryCodes').del()
    .then(function () {
      // Inserts seed entries
      return knex('countryCodes').insert([
        {countryCode: 'US'}
      ]);
    });
};
