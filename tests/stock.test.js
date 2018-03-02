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

test('getTeamStockByTeamId returns a teams items', () => {
  return stock.getTeamStockByTeamId(1, testDb)
    .then(team => {
      expect(team[0].quantity).toBe(30)
    })
})

test('getLastUpdate returns the last update from a team', () => {
  return stock.getLastUpdate(1, testDb)
    .then(lastUpdate => {
      expect(lastUpdate[0].last_update).toBe('Monday, 29 February, 2016')
    })
})

test('receiveItems', () => {
  return stock.receiveItems(2, 20, testDb)
    .then(success => {
      expect(success).toBeTruthy()
    })
})
