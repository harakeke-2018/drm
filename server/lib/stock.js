const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getStock,
  getlocations,
  getlocationStockBylocationId,
  getLastUpdate,
  receiveItems,
  deliverItems,
  getLogsBylocationItemId
  // deleteStock
}

function getStock (testDb) {
  const connection = testDb || knex
  return connection('stock')
    .select()
}

function getlocations (testDb) {
  const connection = testDb || knex
  return connection('location')
    .select()
}

function getlocationStockBylocationId (locationId, testDb) {
  const connection = testDb || knex
  return connection('location_stock')
    .where('location_stock.location_id', locationId)
    .select()
}

function getLastUpdate (locationId, testDb) {
  const connection = testDb || knex
  return connection('location_stock')
    .where('location_stock.location_id', locationId)
    .select('last_update')
}

// increasing the qty of a stock item

function receiveItems (locationStockId, qty, testDb) {
  const connection = testDb || knex
  return connection('location_stock')
    .where('location_stock.id', locationStockId)
    .increment('quantity', qty)
}

// decreasing the qty of a stock item

function deliverItems (locationStockId, qty, testDb) {
  const connection = testDb || knex
  return connection('location_stock')
    .where('location_stock.id', locationStockId)
    .decrement('quantity', qty)
}

function getLogsBylocationItemId (locationItemId, testDb) {
  const connection = testDb || knex
  return connection('log')
    .where('log.location_stock_id', locationItemId)
    .orderBy('log.date', 'desc')
    .select()
}
