
exports.up = function(knex) {
    return knex.schema.createTable('events', tbl => {
        tbl.increments('id');

        tbl
        .string('name',255)
        .notNullable()

        tbl
        .string('start',255)
        .notNullable()

        tbl
        .string('end',255)
        .notNullable()

        tbl
        .string('created',255)
        .notNullable()

        tbl
        .string('reminder',255)
        .notNullable()

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('events');
  };
