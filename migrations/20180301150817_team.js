exports.up = (knex, Promise) => {
  return knex.schema.hasTable('team').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('team', table => {
        table.increments('id').primary()
        table.string('location')
        table.integer('leader_id')
      })
    }
  })
}
exports.down = knex => knex.schema.dropTable('team')
