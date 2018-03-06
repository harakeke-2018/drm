import request from '../utils/api'

export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const DELIVER_ITEMS = 'DELIVER_ITEMS'
export const STOCK_UP_ITEMS = 'STOCK_UP_ITEMS'
export const LOAD_LOCATIONS = 'LOAD_LOCATIONS'

export const receiveItems = (items) => {
  return {
    type: RECEIVE_ITEMS,
    items: items
  }
}

export const doDeliverItems = (item, qty) => {
  return {
    type: DELIVER_ITEMS,
    latestQty: qty,
    locationStockId: item
  }
}

export const stockUpItems = (item, qty) => {
  return {
    type: STOCK_UP_ITEMS,
    latestQty: qty,
    locationStockId: item
  }
}

export const loadLocations = (locations) => {
  return {
    type: LOAD_LOCATIONS,
    locations: locations
  }
}

export function requestItems (locationId) {
  return (dispatch) => {
    request('get', '/stock/' + locationId)
      .then(res => {
        dispatch(receiveItems(res.body))
      })
  }
}

export function increaseItems (locationStockId, qty) {
  return (dispatch) => {
    request('post', '/increment', {id: locationStockId, quantity: qty})
      .then(res => {
        dispatch(stockUpItems(locationStockId, res.body.quantity))
      })
  }
}

export function deliverItems (locationStockId, qty) {
  return (dispatch) => {
    request('post', '/decrement', {id: locationStockId, quantity: qty})
      .then(res => {
        dispatch(doDeliverItems(locationStockId, res.body.quantity))
      })
  }
}

export function getLocations () {
  return (dispatch) => {
    request('get', '/locations')
      .then(res => {
        dispatch(loadLocations(res.body))
      })
  }
}
