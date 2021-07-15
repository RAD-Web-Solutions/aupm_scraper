
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('metals').del()
    .then(function () {
      // Inserts seed entries
      return knex('metals').insert([
        {id: 1},
      ]);
    });
};
