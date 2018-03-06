exports.up = (knex, Promise) => {
  return knex.schema.hasTable('logs').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('logs', table => {
        table.increments('id').primary()
        table.integer('location_stock_id').references('location_stock.id')
        table.integer('past_location_id').references('location.id')
        table.string('activity')
        table.integer('quantity_changed')
        table.timestamps(true, true)
      })
    }
  })
}

exports.down = knex => knex.schema.dropTable('log')
