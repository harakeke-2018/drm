/* global test expect beforeEach afterEach */

const testEnv = require('./test-environment')

const stock = require('../server/lib/stock')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('test harness is working', () => {
  expect(true).toBeTruthy()
})

test('getStock returns all potential stock items', () => {
  return stock.getStock(testDb)
    .then(stock => {
      expect(stock.length).toBe(3)
    })
})

test('getTeams can return a list of all teams', () => {
  return stock.getTeams(testDb)
    .then(teams => {
      expect(teams[1].location).toBe('Wellington')
    })
})

test('getTeamStockByTeamId returns an item name', () => {
  return stock.getTeamStockByTeamId(1, testDb)
    .then(team => {
      expect(team[0].item).toBe('water')
    })
})

test('getLastUpdate returns the last update from a team', () => {
  return stock.getLastUpdate(1, testDb)
    .then(lastUpdate => {
      expect(lastUpdate[0].last_update).toBe('Monday, 29 February, 2016')
    })
})

test('receiveItems can successfully update an existing row', () => {
  return stock.receiveItems(2, 20, testDb)
    .then(success => {
      expect(success).toBeTruthy()
    })
})

test('deliverItems can successfully update an existing row', () => {
  return stock.deliverItems(1, 20, testDb)
    .then(success => {
      expect(success).toBeTruthy()
    })
})

test('getLogsByTeamItemId can get logs for a team', () => {
  return stock.getLogsByTeamItemId(2, testDb)
    .then(log => {
      expect(log[0].date).toBe('Thursday 1 March 2018')
    })
})
