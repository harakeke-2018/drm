const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getLogs
}

function getLogs (teamId, stockId) {
    const connection = testDb || knex
    return connection('logs')
}


function exists (username, testDb) {
  const connection = testDb || knex
  return connection('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getById (id, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select('id', 'username')
    .where('id', id)
    .first()
}

function getByName (username, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select()
    .where('username', username)
    .first()
}
