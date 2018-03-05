exports.up = (knex, Promise) => {
  return knex.schema.hasTable('log').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('log', table => {
        table.increments('id').primary()
        table.integer('location_stock_id').references('location_stock.id')
        table.string('activity')
        table.string('location')
        table.string('date')
      })
    }
  })
}

exports.down = knex => knex.schema.dropTable('log')
