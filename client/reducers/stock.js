import {RECEIVE_ITEMS, DELIVER_ITEMS} from '../actions/stock'

const initialState = {
  items: [],
  latestQty: ''
}

export default function stock (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {...state, items: action.items}
    case DELIVER_ITEMS:
      return {...state, latestQty: action.latestQty.quantity}
    default:
      return state
  }
}
