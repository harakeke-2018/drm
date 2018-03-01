
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.binary('hash')
    table.string('role')
  })
}

exports.down = knex => knex.schema.dropTable('users')
