
exports.up = (knex, Promise) => {
  return knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('username')
        table.binary('hash')
        table.string('role')
      })
    }
  })
}

exports.down = knex => knex.schema.dropTable('users')
