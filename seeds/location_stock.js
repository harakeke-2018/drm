
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('location_stock').del()
    .then(function () {
      // Inserts seed entries
      return knex('location_stock').insert([
        {id: 1, item_id: 1, location_id: 1, quantity: 30},
        {id: 2, item_id: 2, location_id: 1, quantity: 80},
        {id: 3, item_id: 3, location_id: 1, quantity: 20},

        {id: 4, item_id: 1, location_id: 2, quantity: 19},
        {id: 5, item_id: 2, location_id: 2, quantity: 28},
        {id: 6, item_id: 3, location_id: 2, quantity: 40},

        {id: 7, item_id: 1, location_id: 3, quantity: 20},
        {id: 8, item_id: 2, location_id: 3, quantity: 88},
        {id: 9, item_id: 3, location_id: 3, quantity: 33},

        {id: 10, item_id: 4, location_id: 1, quantity: 1},
        {id: 11, item_id: 5, location_id: 1, quantity: 3},
        {id: 12, item_id: 6, location_id: 2, quantity: 8},
        {id: 13, item_id: 7, location_id: 3, quantity: 10},
        {id: 14, item_id: 4, location_id: 2, quantity: 20},
        {id: 15, item_id: 8, location_id: 3, quantity: 50},
        {id: 16, item_id: 9, location_id: 1, quantity: 20}
      ])
    })
}
