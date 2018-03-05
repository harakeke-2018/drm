import {RECEIVE_ITEMS, DELIVER_ITEMS} from '../actions/stock'

const initialState = {
  items: [],
  latestQty: ''
}

function updateQty (state, action) {
  const targetItem = state.items.find(item => {
    return item.id === Number(action.locationStockId)
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
    default:
      return state
  }
}
