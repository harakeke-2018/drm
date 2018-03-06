
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
        {id: 9, item_id: 3, location_id: 3, quantity: 33}
      ])
    })
}
