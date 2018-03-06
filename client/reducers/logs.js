import { RECEIVE_LOGS } from '../actions/logs';

const initialState = [{id: 0, item: 'loading'}]

export default function logs (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_LOGS:
            return action.logs
        default: 
            return state
    }
}