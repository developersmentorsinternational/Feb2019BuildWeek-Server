exports.up = function(knex) {
    return knex.schema.createTable('usersMessages', tbl => {
        tbl.increments('id');

        tbl
        .integer('sender')
        .unsigned()
        .notNullable();

        tbl
        .foreign('sender')
        .references('users.id')

        tbl
        .integer('recipient')
        .unsigned()
        .notNullable()

        tbl
        .foreign('recipient')
        .references('users.id')

        
        tbl
        .string('messageBody', 160)
        .notNullable();
        
        // The following may need to be set as a date. 
        tbl
        .string('timeReceived', 255)
        .notNullable();

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('usersMessages');
  };

  //////////////////////////////////////
        // tbl
        // .integer('sender')
        // .inTable('users')
        // .unsigned()
        // .notNullable()
        // .references('id');
        
  
      // tbl
      //   .integer('recipient')
      //   .unsigned()
      //   .notNullable()
      //   .references('users.id');
        // .inTable('users');

 