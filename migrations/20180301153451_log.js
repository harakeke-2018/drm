exports.up = (knex, Promise) => {
  return knex.schema.hasTable('log').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('log', table => {
        table.increments('id').primary()
        table.integer('team_stock_id').references('team_stock.id')
        table.string('activity')
        table.integer('operator_id').references('users.id')
        table.string('date')
      })
    }
  })
}

exports.down = knex => knex.schema.dropTable('log')
