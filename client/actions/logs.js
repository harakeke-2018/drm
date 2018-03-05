import request from '../utils/api'

export const REQUEST_LOGS = 'REQUEST_LOGS'
export const RECEIVE_LOGS = 'RECEIVE_LOGS'

export const receiveLogs = (logs) => {
  return {
    type: REQUEST_LOGS,
    logs: logs
  }
}

export function requestLogs (locationId, stockId) {
  return (dispatch) => {
    request('get', '/logs', locationId, stockId)
      .then(res => {
        dispatch(receiveLogs(res.body))
      })
  }
}
