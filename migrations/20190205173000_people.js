exports.up = function(knex) {
    return knex.schema.createTable('people', tbl => {
        tbl
        .increments('id');

        tbl
        .string('firstName', 255)
        .notNullable();
        
        tbl
        .string('lastName', 255)
        .notNullable();

        tbl
        .string('phoneNumber',255)
        .notNullable()
        .unique();

        tbl
        .integer('countryCode')
        .unsigned()
        .notNullable()

        tbl
        .foreign('countryCode')
        .references('countryCodes.id')

        tbl
        .integer('type')
        .unsigned()
        .notNullable()

        tbl
        .foreign('type')
        .references('types.id')

        tbl
        .integer('region')
        .unsigned()
        .notNullable()

        tbl
        .foreign('region')
        .references('regions.id')

        // tbl
        // .integer('phoneNumberID')
        // .unsigned()
        // .notNullable()

        // tbl
        // .foreign('phoneNumberID')
        // .references('phoneNumbers.id')

    })
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('people');
  };
  