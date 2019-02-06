
exports.up = function(knex) {
    return knex.schema.createTable('regions', tbl => {
        tbl.increments('id');

        tbl
        .string('region',255)
        .notNullable()
        .unique();

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('regions');
  };
