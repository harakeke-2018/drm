exports.up = (knex, Promise) => {
  return knex.schema.hasTable('logs').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('logs', table => {
        table.increments('id').primary()
        table.integer('stock_id').references('location_stock.item_id')
        table.integer('location_id').references('location_stock.location_id')
        table.string('activity')
        table.integer('quantity_changed')
        table.string('date')
      })
    }
  })
}

exports.down = knex => knex.schema.dropTable('log')
