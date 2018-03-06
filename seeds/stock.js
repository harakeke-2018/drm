
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('stock').del()
    .then(function () {
      // Inserts seed entries
      return knex('stock').insert([
        {id: 1, item: 'generator'},
        {id: 2, item: 'radio'},
        {id: 3, item: 'satellite'},
        {id: 4, item: 'computer'},
        {id: 5, item: 'printer'},
        {id: 6, item: 'power'},
        {id: 7, item: 'tools'},
        {id: 8, item: 'butane'},
        {id: 9, item: 'torch'}
      ])
    })
}