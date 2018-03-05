
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('location_stock').del()
    .then(function () {
      // Inserts seed entries
      return knex('location_stock').insert([
        {id: 1, item_id: 1, location_id: 1, quantity: 30, last_update: 'Monday, 29 February, 2016'},
        {id: 2, item_id: 2, location_id: 2, quantity: 140, last_update: 'Ethans Birthday'},
        {id: 3, item_id: 3, location_id: 3, quantity: 70, last_update: 'Thursday, 1 March 2018'}
      ])
    })
}
