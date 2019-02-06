exports.up = function(knex) {
    return knex.schema.createTable('groups', tbl => {
        tbl.increments('id');

        tbl
        .string('name',255)
        .notNullable()

        tbl
        .string('created',255)
        .notNullable()
        
        //add constraint that it must be a mentor
        tbl
        .integer('creatorID')
        .unsigned()
        .notNullable()

        tbl
        .foreign("creatorID")
        .references("people.id")

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('groups');
  };
