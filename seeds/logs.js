
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        { id: 1, location_stock_id: 1, past_location_id: 3, quantity_changed: 42, activity: '' },
        { id: 2, location_stock_id: 1, past_location_id: 2, quantity_changed: -22, activity: '' },
        { id: 3, location_stock_id: 1, past_location_id: 1, quantity_changed: -8, activity: '' },
        { id: 4, location_stock_id: 2, past_location_id: 3, quantity_changed: 40, activity: '' },
        { id: 5, location_stock_id: 2, past_location_id: 2, quantity_changed: -31, activity: '' },
        { id: 6, location_stock_id: 2, past_location_id: 1, quantity_changed: -63, activity: '' },
        { id: 7, location_stock_id: 3, past_location_id: 2, quantity_changed: 20, activity: '' },
        { id: 8, location_stock_id: 3, past_location_id: 3, quantity_changed: -42, activity: '' },
        { id: 9, location_stock_id: 3, past_location_id: 3, quantity_changed: -46, activity: '' },
        { id: 10, location_stock_id: 4, past_location_id: 2, quantity_changed: 81, activity: '' },
        { id: 11, location_stock_id: 4, past_location_id: 1, quantity_changed: 120, activity: '' },
        { id: 12, location_stock_id: 4, past_location_id: 1, quantity_changed: -93, activity: '' },
        { id: 13, location_stock_id: 5, past_location_id: 2, quantity_changed: 11, activity: '' },
        { id: 14, location_stock_id: 5, past_location_id: 3, quantity_changed: -11, activity: '' },
        { id: 15, location_stock_id: 5, past_location_id: 2, quantity_changed: -14, activity: '' },
        { id: 16, location_stock_id: 6, past_location_id: 3, quantity_changed: 101, activity: '' },
        { id: 17, location_stock_id: 6, past_location_id: 1, quantity_changed: 80, activity: '' },
        { id: 18, location_stock_id: 6, past_location_id: 3, quantity_changed: -75, activity: '' },
        { id: 19, location_stock_id: 7, past_location_id: 1, quantity_changed: 60, activity: '' },
        { id: 20, location_stock_id: 7, past_location_id: 2, quantity_changed: -50, activity: '' },
        { id: 21, location_stock_id: 7, past_location_id: 1, quantity_changed: 25, activity: '' },
        { id: 22, location_stock_id: 8, past_location_id: 3, quantity_changed: 123, activity: '' },
        { id: 23, location_stock_id: 8, past_location_id: 1, quantity_changed: -27, activity: '' },
        { id: 24, location_stock_id: 8, past_location_id: 1, quantity_changed: 39, activity: '' },
        { id: 25, location_stock_id: 9, past_location_id: 2, quantity_changed: 73, activity: '' },
        { id: 26, location_stock_id: 9, past_location_id: 3, quantity_changed: -30, activity: '' },
        { id: 27, location_stock_id: 9, past_location_id: 2, quantity_changed: 45, activity: '' },
        { id: 28, location_stock_id: 10, past_location_id: 1, quantity_changed: 5, activity: '' },
        { id: 29, location_stock_id: 10, past_location_id: 3, quantity_changed: -19, activity: '' },
        { id: 30, location_stock_id: 10, past_location_id: 3, quantity_changed: 6, activity: '' },
        { id: 31, location_stock_id: 11, past_location_id: 1, quantity_changed: -8, activity: '' },
        { id: 32, location_stock_id: 11, past_location_id: 1, quantity_changed: 2, activity: '' },
        { id: 33, location_stock_id: 11, past_location_id: 2, quantity_changed: -22, activity: '' },
        { id: 34, location_stock_id: 12, past_location_id: 2, quantity_changed: 32, activity: '' },
        { id: 35, location_stock_id: 12, past_location_id: 2, quantity_changed: -43, activity: '' },
        { id: 36, location_stock_id: 12, past_location_id: 1, quantity_changed: 18, activity: '' },
        { id: 37, location_stock_id: 13, past_location_id: 3, quantity_changed: 56, activity: '' },
        { id: 38, location_stock_id: 13, past_location_id: 1, quantity_changed: -31, activity: '' },
        { id: 39, location_stock_id: 13, past_location_id: 3, quantity_changed: 57, activity: '' },
        { id: 40, location_stock_id: 14, past_location_id: 1, quantity_changed: -47, activity: '' },
        { id: 41, location_stock_id: 14, past_location_id: 2, quantity_changed: 63, activity: '' },
        { id: 42, location_stock_id: 14, past_location_id: 1, quantity_changed: 70, activity: '' },
        { id: 43, location_stock_id: 15, past_location_id: 2, quantity_changed: 73, activity: '' },
        { id: 44, location_stock_id: 15, past_location_id: 2, quantity_changed: -48, activity: '' },
        { id: 45, location_stock_id: 15, past_location_id: 1, quantity_changed: 79, activity: '' },
        { id: 46, location_stock_id: 16, past_location_id: 3, quantity_changed: 82, activity: '' },
        { id: 47, location_stock_id: 16, past_location_id: 1, quantity_changed: -51, activity: '' },
        { id: 48, location_stock_id: 16, past_location_id: 3, quantity_changed: 91, activity: '' }
      ])
    })
}
