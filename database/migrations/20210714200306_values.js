
exports.up = function(knex) {
  return knex.schema.createTable("metals", function (metals) {
      metals.increments()
      metals.string("AUdate")
      metals.string("AUtime")
      metals.string("AUbid")
      metals.string("AUask")
      metals.string("AGdate")
      metals.string("AGtime")
      metals.string("AGbid")
      metals.string("AGask")
      metals.string("PTdate")
      metals.string("PTtime")
      metals.string("PTbid")
      metals.string("PTask")
      metals.string("PDdate")
      metals.string("PDtime")
      metals.string("PDbid")
      metals.string("PDask")
      metals.string("RHdate")
      metals.string("RHtime")
      metals.string("RHbid")
      metals.string("RHask")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("metals")
};
