exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl
            .string('email', 255)
            .notNullable()
            .unique();

        tbl
            .string('firstName', 255)
            .notNullable()
        
        tbl
            .string('lastName', 255)
            .notNullable()

        tbl.string('password', 255).notNullable();
    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
  