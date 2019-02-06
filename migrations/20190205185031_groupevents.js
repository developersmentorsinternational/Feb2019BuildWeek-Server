exports.up = function(knex) {
    return knex.schema.createTable('groupEvents', tbl => {
        tbl.increments('id');

        tbl
        .integer('groupID')
        .unsigned()
        .notNullable();

        tbl
        .foreign('groupID')
        .references('groups.id')

        tbl
        .integer('eventID')
        .unsigned()
        .notNullable()

        tbl
        .foreign('eventID')
        .references('events.id')

        // tbl
        // .integer('mentorID')
        // .unsigned()
        // .notNullable()

        // tbl
        // .foreign('mentorID')
        // .references('people.id')

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('groupevents');
  };