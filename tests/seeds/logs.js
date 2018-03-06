
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        { id: 1, location_stock_id: 1, past_location_id: 1, quantity_changed: 50, activity: '' },
        { id: 2, location_stock_id: 2, past_location_id: 2, quantity_changed: 100, activity: '' },
        { id: 3, location_stock_id: 3, past_location_id: 3, quantity_changed: 80, activity: '' },
        { id: 4, location_stock_id: 4, past_location_id: 3, quantity_changed: 60, activity: '' },
        { id: 5, location_stock_id: 5, past_location_id: 1, quantity_changed: 50, activity: '' },
        { id: 6, location_stock_id: 6, past_location_id: 1, quantity_changed: 120, activity: '' },
        { id: 7, location_stock_id: 7, past_location_id: 2, quantity_changed: -20, activity: '' },
        { id: 8, location_stock_id: 8, past_location_id: 2, quantity_changed: 50, activity: '' },
        { id: 9, location_stock_id: 9, past_location_id: 3, quantity_changed: -30, activity: '' }
      ])
    })
}
