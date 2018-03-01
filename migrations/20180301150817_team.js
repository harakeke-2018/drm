exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('team', table => {
    table.increments('id').primary()
    table.string('location')
    table.integer('leader_id')
  })
}
exports.down = knex => knex.schema.dropTable('team')
