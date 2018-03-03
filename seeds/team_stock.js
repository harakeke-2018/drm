
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('team_stock').del()
    .then(function () {
      // Inserts seed entries
      return knex('team_stock').insert([
        {id: 1, item_id: 1, team_id: 1, quantity: 30, last_update: '29/02/2016'},
        {id: 2, item_id: 2, team_id: 1, quantity: 80, last_update: '04/03/2017'},
        {id: 3, item_id: 3, team_id: 1, quantity: 20, last_update: '04/03/2017'},

        {id: 4, item_id: 1, team_id: 2, quantity: 19, last_update: '01/03/2018'},
        {id: 5, item_id: 2, team_id: 2, quantity: 28, last_update: '08/03/2018'},
        {id: 6, item_id: 3, team_id: 2, quantity: 40, last_update: '04/03/2018'},

        {id: 7, item_id: 1, team_id: 3, quantity: 20, last_update: '22/09/2017'},
        {id: 8, item_id: 2, team_id: 3, quantity: 88, last_update: '08/03/2018'},
        {id: 9, item_id: 3, team_id: 3, quantity: 33, last_update: '04/03/2015'}
      ])
    })
}
