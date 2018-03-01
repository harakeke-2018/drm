exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('team_stock', table => {
    table.increments('id').primary()
    table.integer('item_id').references('stock.id')
    table.integer('team_id').references('team.id')
    table.integer('quantity')
    table.string('last_update')
  })
}

exports.down = knex => knex.schema.dropTable('team_stock')
