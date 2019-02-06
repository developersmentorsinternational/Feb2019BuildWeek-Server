exports.up = function(knex) {
    return knex.schema.createTable('types', tbl => {
        tbl.increments('id');

        tbl
        .string('type',255)
        .notNullable()
        .unique();

    });
    };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('types');
  };




// exports.up = function(knex) {
//     return knex.schema.raw(`CREATE TABLE type (
//         id       integer PRIMARY KEY,
//         status   varchar(255) NOT NULL CHECK (status = "MENTOR" or status = "CLIENT" ),
//     )`);

// CREATE TABLE SomeTable
// (
//    Id int NOT NULL,
//    Frequency varchar(200),
//    CONSTRAINT chk_Frequency CHECK (Frequency IN ('Daily', 'Weekly', 'Monthly', 'Yearly'))
// )



//     CREATE TABLE test (
//         id       integer PRIMARY KEY,
//         status   text NOT NULL CHECK (status = "MENTOR" OR status = "MENTOR" ),
//       );
  
//   exports.down = function(knex, Promise) {
//     return knex.schema.dropTableIfExists('type');
//   };
