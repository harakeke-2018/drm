const jwtDecode = require('jwt-decode')

module.exports = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return jwtDecode(req.headers.authorization.split(' ')[1])
  } else if (req.query && req.query.token) {
    return jwtDecode(req.query.token)
  }
  return null
}
