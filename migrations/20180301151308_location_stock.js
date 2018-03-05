exports.up = (knex, Promise) => {
  return knex.schema.hasTable('location_stock').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('location_stock', table => {
        table.increments('id').primary()
        table.integer('item_id').references('stock.id')
        table.integer('location_id').references('location.id')
        table.integer('log_id').references('log.id')
        table.integer('quantity')
        table.string('last_update')
      })
    }
  })
}
exports.down = knex => knex.schema.dropTable('location_stock')
