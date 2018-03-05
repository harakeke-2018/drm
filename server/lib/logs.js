const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getLogs
}

function getLogs (locationId, stockId) {
  console.log('reached here as well', locationId, stockId)
    const connection = knex
    return connection('logs')
      .join('location_stock', 'logs.location_stock_id', 'location_stock.id')
      .where('item_id', stockId)
      .andWhere('location_id', locationId)
}
