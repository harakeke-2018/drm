
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('log').del()
    .then(function () {
      // Inserts seed entries
      return knex('log').insert([
        {id: 1, location_stock_id: 1, activity: ''},
        {id: 2, location_stock_id: 2, activity: ''},
        {id: 3, location_stock_id: 1, activity: ''}
      ])
    })
}
