
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('stock').del()
    .then(function () {
      // Inserts seed entries
      return knex('stock').insert([
        {id: 1, quantity: 20, item: 'water'},
        {id: 2, quantity: 80, item: 'blankets'},
        {id: 3, quantity: 15, item: 'tents'}
      ])
    })
}
