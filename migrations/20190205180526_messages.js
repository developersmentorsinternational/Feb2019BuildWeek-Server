exports.up = function(knex) {
    return knex.schema.createTable('messages', tbl => {
        tbl.increments('id');

        tbl
        .string('body',160)
        .notNullable()

        tbl
        .string('created',160)
        .notNullable()

        // tbl
        // .integer('groupID')
        // .unsigned()
        // .notNullable()

        // tbl
        // .foreign('groupID')
        // .references("groups.id")
    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('messages');
  };
