const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getStock,
  getTeamStockByTeamId,
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

function getTeamStockByTeamId (teamId, testDb) {
  const connection = testDb || knex
  return connection('team_stock')
    .join('log', 'team_stock.id', 'log.team_stock_id')
    .where('team_stock.team_id', teamId)
    .orderBy('log.date', 'desc')
    .select()
    .first()
}

function receiveItems (teamStockId, qty, testDb) {
  const connection = testDb || knex
  return connection('team_stock')
    .where('team_stock.id', teamStockId)
    .increment('team_stock.quantity', qty)
}

function deliverItems (teamStockId, qty, testDb) {
  const connection = testDb || knex
  return connection('team_stock')
    .where('team_stock.id', teamStockId)
    .decrement('team_stock.quantity', qty)
}

function getLogsByTeamItemId (teamItemId, testDb) {
  const connection = testDb || knex
  return connection('log')
    .where('log.team_stock_id', teamItemId)
    .orderBy('log.date', 'desc')
    .select()
}
