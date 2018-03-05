
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('log').del()
    .then(function () {
      // Inserts seed entries
      return knex('log').insert([
        {id: 1, stock_id: 1, location_id: 1, quantity_changed: 50, date: 'Monday 29 February 2018', activity: ''},
        {id: 2, stock_id: 2, location_id: 2, quantity_changed: 100, date: 'Thursday 1 March 2018', activity: ''},
        {id: 3, stock_id: 1, location_id: 3, quantity_changed: 80, date: 'Monday 29 February 2016', activity: ''},
        {id: 4, stock_id: 2, location_id: 3, quantity_changed: 60, date: 'Monday 29 February 2016', activity: ''},
        {id: 5, stock_id: 1, location_id: 1, quantity_changed: 50, date: 'Monday 29 February 2016', activity: ''},
        {id: 6, stock_id: 3, location_id: 1, quantity_changed: 120, date: 'Monday 29 February 2016', activity: ''},
        {id: 7, stock_id: 1, location_id: 2, quantity_changed: 40, date: 'Monday 29 February 2016', activity: ''},
        {id: 8, stock_id: 2, location_id: 2, quantity_changed: 50, date: 'Monday 29 February 2016', activity: ''},
        {id: 9, stock_id: 1, location_id: 3, quantity_changed: 70, date: 'Monday 29 February 2016', activity: ''},
        {id: 10, stock_id: 1, location_id: 1, quantity_changed: 100, date: 'Monday 29 February 2016', activity: ''}
      ])
    })
}
