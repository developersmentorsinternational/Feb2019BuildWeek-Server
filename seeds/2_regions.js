const {UsaStates} = require("usa-states");
const usStates = new UsaStates();
const states = usStates.states.map((ele) =>  {
  return {region:ele.name}
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('regions').del()
    .then(function () {
      // Inserts seed entries
      return knex('regions').insert(states);
    });
};
