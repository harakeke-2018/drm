
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('stock').del()
    .then(function () {
      // Inserts seed entries
      return knex('stock').insert([
        {id: 1, item: 'water'},
        {id: 2, item: 'blankets'},
        {id: 3, item: 'tents'}
      ])
    })
}
