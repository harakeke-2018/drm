
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'test1', hash: '123', role: ''},
        {id: 2, username: 'test2', hash: '123', role: ''},
        {id: 3, username: 'test3', hash: '123', role: ''}
      ])
    })
}
