
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        { name: 'South Florida Meetup',start:"2019-03-01 12:30",end:"2019-03-01 13:30",created:"2019-01-01 14:00",reminder:"* * 3 * *"},
        { name: 'Orlando Meetup',start:"2019-04-01 08:00",end:"2019-03-04 09:00",created:"2019-02-22 07:00",reminder:"* * 4 * *"},
        { name: 'Miami Meetup',start:"2019-05-17 09:00",end:"2019-05-17 010:00",created:"2019-02-28 10:00",reminder:"5 * * * *"},
        { name: 'New York Meetup',start:"2019-02-15 09:30",end:"2019-02-16 10:00",created:"2019-01-01 06:00",reminder:"* * 4 * *"},
        { name: 'Cambrdige Meetup',start:"2019-11-03 18:00",end:"2019-03-01 19:45",created:"2019-01-14 10:00",reminder:"* * 2 * *"}
      ]);
    });
};
