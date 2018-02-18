const knex = require('knex')

const config = require('../knexfile').test
const users = require('../server/lib/users')

let testDb = null

beforeEach(() => {
  // t.context.db = knex(config)
  // return t.context.db
  //   .migrate.latest()
  //   .then(() => t.context.db.seed.run())
})

// afterEach(() => t.context.db.destroy())

test.skip('exists is true for aardvark', () => {
  return users
    .exists('aardvark', testDb)
    .then(actual => expect(actual).toBeTruthy())
})

test.skip('exists is falsy for gnu', () => {
  return users
    .exists('gnu', testDb)
    .then(actual => expect(actual).toBeFalsy())
})

test.skip('getById obtains correct user', () => {
  return users
    .getById(2, testDb)
    .then(([user]) => expect(user.username).toBe('capybara'))
})

test.skip('getByName obtains correct user', () => {
  return users
    .getByName('aardvark', testDb)
    .then(([ user ]) => expect(user.id).toBe(1))
})
