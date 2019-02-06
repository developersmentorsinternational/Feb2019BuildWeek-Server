
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('creds').del()
    .then(function () {
      // Inserts seed entries
      return knex('creds').insert([
        {id: 1, mentor: 1,email:"dan@dan.com",password:"$2a$12$8cviwewCArgfLvwA89aA0uD1Z9yHxQPiCln3/GDftIYHu/XMbLJGS"},
        {id: 2, mentor: 2,email:"jason@jason.com",password:"$2a$12$8cviwewCArgfLvwA89aA0uD1Z9yHxQPiCln3/GDftIYHu/XMbLJGS"},
        {id: 3, mentor: 3,email:"jane@jane.com",password:"$2a$12$8cviwewCArgfLvwA89aA0uD1Z9yHxQPiCln3/GDftIYHu/XMbLJGS"}
      ]);
    });
};
