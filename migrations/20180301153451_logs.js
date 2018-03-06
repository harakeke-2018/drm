exports.up = (knex, Promise) => {
  return knex.schema.hasTable('logs').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('logs', table => {
        table.increments('id').primary()
<<<<<<< HEAD:migrations/20180301153451_logs.js
        table.integer('location_stock_id').references('location_stock.id')
=======
        table.integer('location_stock_id').references('location_stock.item_id')
>>>>>>> 67535762e23cc1867bcc41c8a94a6e4ec39deb3c:migrations/20180301153451_log.js
        table.integer('past_location_id').references('location.id')
        table.string('activity')
        table.integer('quantity_changed')
        table.timestamps(true, true)
      })
    }
  })
}

exports.down = knex => knex.schema.dropTable('log')
