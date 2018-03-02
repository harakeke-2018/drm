exports.up = (knex, Promise) => {
  return knex.schema.hasTable('stock').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('stock', table => {
        table.increments('id').primary()
        table.string('item')
        table.integer('quantity')
        table.string('last_update')
      })
    }
  })
}
exports.down = knex => knex.schema.dropTable('stock')
