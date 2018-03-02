import request from '../utils/api'

export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const DELIVER_ITEMS = 'DELIVER_ITEMS'

export function requestItems (teamId) {
  request('get', '/stock/' + teamId)
    .then(items => {
      return {
        type: RECEIVE_ITEMS,
        items
      }
    })
}

export function deliverItems (teamStockId, qty) {
  request('post', '/decrement', qty)
    .then(latestQty => {
      return {
        type: DELIVER_ITEMS,
        latestQty
      }
    })
}
