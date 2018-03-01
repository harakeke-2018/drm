exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('log', table => {
    table.increments('id').primary()
    table.integer('team_stock_id').references('team_stock.id')
    table.string('last_update')
  })
}

exports.down = knex => knex.schema.dropTable('log')
