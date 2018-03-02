const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getStock,
  getTeams,
  getTeamStockByTeamId,
  getLastUpdate,
  receiveItems,
  deliverItems,
  getLogsByTeamItemId
  // deleteStock
}

function getStock (testDb) {
  const connection = testDb || knex
  return connection('stock')
    .select()
}

function getTeams (testDb) {
  const connection = testDb || knex
  return connection('team')
    .select()
}

function getTeamStockByTeamId (teamId, testDb) {
  const connection = testDb || knex
  return connection('team_stock')
    .where('team_stock.team_id', teamId)
    .select()
}

function getLastUpdate (teamId, testDb) {
  const connection = testDb || knex
  return connection('team_stock')
    .where('team_stock.team_id', teamId)
    .select('last_update')
}

// increasing the qty of a stock item

function receiveItems (teamStockId, qty, testDb) {
  const connection = testDb || knex
  return connection('team_stock')
    .where('team_stock.id', teamStockId)
    .increment('quantity', qty)
}

// decreasing the qty of a stock item

function deliverItems (teamStockId, qty, testDb) {
  const connection = testDb || knex
  return connection('team_stock')
    .where('team_stock.id', teamStockId)
    .decrement('quantity', qty)
}

function getLogsByTeamItemId (teamItemId, testDb) {
  const connection = testDb || knex
  return connection('log')
    .where('log.team_stock_id', teamItemId)
    .orderBy('log.date', 'desc')
    .select()
}
