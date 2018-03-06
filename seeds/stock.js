
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('stock').del()
    .then(function () {
      // Inserts seed entries
      return knex('stock').insert([
        {id: 1, item: 'Generator'},
        {id: 2, item: 'Radio'},
        {id: 3, item: 'Satellite'},
        {id: 4, item: 'Computer'},
        {id: 5, item: 'Printer'},
        {id: 6, item: 'Power'},
        {id: 7, item: 'Tools'},
        {id: 8, item: 'Butane'},
        {id: 9, item: 'Torch'}
      ])
    })
}
