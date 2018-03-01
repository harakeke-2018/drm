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

test.skip('getTeamStockByTeamId returns all potential stock items', () => {
  return stock.getTeamStockByTeamId(testDb)
    .then(stock => {
      expect(stock.length).toBe(3)
    })
})

// test('receiveItems', () => {
//   return stock.receiveItems(1, 1, testDb)
//   .then(stock => {
//     expect(stock)
//   })
// })
