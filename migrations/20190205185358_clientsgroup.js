exports.up = function(knex) {
    return knex.schema.createTable('clientsgroup', tbl => {
        tbl.increments('id');

        // add a constraint that only allows clients in this list
        tbl
        .integer('clientID')
        .unsigned()
        .notNullable()

        tbl
        .foreign('clientID')
        .references("people.id")

        tbl
        .integer('groupID')
        .unsigned()
        .notNullable()

        tbl
        .foreign('groupID')
        .references("groups.id")

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('clientsgroup');
  };

