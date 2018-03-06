const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getLogs
}

function getLogs (locationId) {
    const connection = knex
    return connection('logs')
      .join('location_stock', 'logs.location_stock_id', 'location_stock.id')
      .join('location', 'location_stock.location_id', 'location.id')
      .where('location_id', locationId)
}
