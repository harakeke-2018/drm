exports.up = (knex, Promise) => {
  return knex.schema.hasTable('location').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('location', table => {
        table.increments('id').primary()
        table.integer('leader_id')
        table.string('name')
      })
    }
  })
}
exports.down = knex => knex.schema.dropTable('location')
