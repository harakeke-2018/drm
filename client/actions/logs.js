import request from '../utils/api'

export const REQUEST_LOGS = 'REQUEST_LOGS'
export const RECEIVE_LOGS = 'RECEIVE_LOGS'

export const receiveLogs = (logs) => {
  return {
    type: REQUEST_LOGS,
    logs: logs
  }
}

export const doDeliverLogs = (qty) => {
  return {
    type: RECEIVE_LOGS,
    latestQty: qty
  }
}

export function requestLogs (teamId) {
  return (dispatch) => {
    request('get', '/logs', teamId)
      .then(res => {
        dispatch(receiveItems(res.body))
      })
  }
}

export function deliverItems (teamStockId, qty) {
  return (dispatch) => {
    request('post', '/decrement', qty)
      .then(res => {
        dispatch(doDeliverItems(res.body))
      })
  }
}
