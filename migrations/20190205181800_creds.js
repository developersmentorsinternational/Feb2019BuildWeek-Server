exports.up = function(knex) {
    return knex.schema.createTable('creds', tbl => {
        tbl.increments('id');

        tbl
        .integer('mentor')
        .unsigned()
        .notNullable();

        tbl
        .foreign("mentor")
        .references("people.id");

        tbl
        .string('email',255)
        .notNullable()
        .unique();

        tbl
        .string('password',255)
        .notNullable();

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('creds');
  };