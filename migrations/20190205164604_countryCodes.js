exports.up = function(knex) {
    return knex.schema.createTable('countryCodes', tbl => {
        tbl.increments('id');

        tbl
        .string('codes',255)
        .notNullable()
        .unique();

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('countryCodes');
  };
