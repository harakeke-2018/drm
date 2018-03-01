
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('team').del()
    .then(function () {
      // Inserts seed entries
      return knex('team').insert([
        {id: 1, location: 'Auckland'},
        {id: 2, location: 'Wellington'},
        {id: 3, location: 'Christchurch'}
      ])
    })
}
