
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('log').del()
    .then(function () {
      // Inserts seed entries
      return knex('log').insert([
        {id: 1, location_stock_id: 1, date: 'Monday 29 February 2016', activity: ''},
        {id: 2, location_stock_id: 2, date: 'Thursday 1 March 2018', activity: ''},
        {id: 3, location_stock_id: 1, date: 'Monday 29 February 2016', activity: ''}
      ])
    })
}
