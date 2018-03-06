import {RECEIVE_ITEMS, DELIVER_ITEMS, STOCK_UP_ITEMS, LOAD_LOCATIONS} from '../actions/stock'

const initialState = {
  items: [],
  latestQty: '',
  locations: []
}

function updateQty (state, action) {
  const targetItem = state.items.find(item => {
    return item.locationStockId === Number(action.locationStockId)
  })
  targetItem.quantity = action.latestQty
  state.latestQty = ''
  return {...state}
}

export default function stock (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {...state, items: action.items}
    case DELIVER_ITEMS:
      return updateQty(state, action)
    case STOCK_UP_ITEMS:
      return updateQty(state, action)
    case LOAD_LOCATIONS:
      return {...state, locations: action.locations}
    default:
      return state
  }
}
