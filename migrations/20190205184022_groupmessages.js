exports.up = function(knex) {
    return knex.schema.createTable('groupMessages', tbl => {
        tbl.increments('id');

        tbl
        .integer('groupID')
        .unsigned()
        .notNullable();

        tbl
        .foreign('groupID')
        .references('groups.id')

        tbl
        .integer('messageID')
        .unsigned()
        .notNullable()

        tbl
        .foreign('messageID')
        .references('messages.id')

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('groupMessages');
  };