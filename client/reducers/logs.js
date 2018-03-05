import {RECEIVE_ITEMS, DELIVER_ITEMS} from '../actions/stock'
import { REQUEST_LOGS } from '../actions/logs';

const initialState = {
    logs: []
}

export default function logs (state = initialState, action) {
    switch (action.type) {
        case REQUEST_LOGS:
            return {...state, items: action.logs}
        default: 
            return state
    }
}