exports.up = (knex, Promise) => {
  return knex.schema.createTable('stock', table => {
    table.increments('id').primary()
    table.string('item')
  })
}

exports.down = knex => knex.schema.dropTable('stock')
