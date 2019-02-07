
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        { body: 'This is test message',created:"2019-03-01 08:00"},
        { body: 'Hi! This is a test',created:"2019-02-01 21:30"},
        { body: "Welcome! We",created:"2019-01-01 22:00"}
      ]);
    });
};
