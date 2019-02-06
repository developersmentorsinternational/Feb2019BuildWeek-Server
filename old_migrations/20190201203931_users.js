exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl
        .increments('id');

        tbl
        .string('email', 255)
        .notNullable()
        .unique();

        tbl
        .string('firstName', 255)
        .notNullable();
        
        tbl
        .string('lastName', 255)
        .notNullable();

        tbl
        .string('password', 255)
        .notNullable();

        // tbl
        // .string('countryCode', 255)
        // .notNullable();

        tbl
        .integer('countryCodeID')
        .unsigned()
        .notNullable()

        tbl
        .foreign('countryCode')
        .references('countryCodes.id')

        // tbl
        // .string('phoneNumber', 255)
        // .notNullable();
        tbl
        .integer('phoneNumberID')
        .unsigned()
        .notNullable()

        tbl
        .foreign('phoneNumberID')
        .references('phoneNumbers.id')

    })
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
  