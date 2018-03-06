
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        {id: 1, location_stock_id: 1, past_location_id: 1, quantity_changed: 50, date: 'Wednesday 28 February 2018', activity: ''},
        {id: 2, location_stock_id: 2, past_location_id: 2, quantity_changed: 100, date: 'Thursday 1 March 2018', activity: ''},
        {id: 3, location_stock_id: 3, past_location_id: 3, quantity_changed: 80, date: 'Thursday 1 March 2018', activity: ''},
        {id: 4, location_stock_id: 4, past_location_id: 3, quantity_changed: 60, date: 'Friday 2 March 2018', activity: ''},
        {id: 5, location_stock_id: 5, past_location_id: 1, quantity_changed: 50, date: 'Friday 2 March 2018', activity: ''},
        {id: 6, location_stock_id: 6, past_location_id: 1, quantity_changed: 120, date: 'Saturday 3 March 2018', activity: ''},
        {id: 7, location_stock_id: 7, past_location_id: 2, quantity_changed: -20, date: 'Saturday 3 March 2018', activity: ''},
        {id: 8, location_stock_id: 8, past_location_id: 2, quantity_changed: 50, date: 'Sunday 4 March 2018', activity: ''},
        {id: 9, location_stock_id: 9, past_location_id: 3, quantity_changed: -30, date: 'Sunday 4 March 2018', activity: ''}
      ])
    })
}
