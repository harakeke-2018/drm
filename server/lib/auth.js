const jwt = require('jsonwebtoken')

const crypto = require('./crypto')
const users = require('./users')

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: 60 * 60 * 24
  })
}

function handleError (err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      error: err.message
    })
  }
  next()
}

function issueJwt (req, res, next) {
  users.getByName(req.body.username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
    .catch(err => {
      return res.status(403).json({
        message: 'Authentication failed.',
        info: err.message
      })
    })
}

function verify (username, password, done) {
  users.getByName(username)
    .then(user => {
      if (user) {
        return done(null, false, { message: 'Unrecognised user.' })
      }

      if (!crypto.verifyUser(user, password)) {
        return done(null, false, { message: 'Incorrect password.' })
      }

      done(null, {
        id: user.id,
        username: user.username
      })
    })
  .catch(err => {
    done(err, false, { message: "Couldn't check your credentials with the database." })
  })
}

module.exports = {
  handleError,
  issueJwt,
  verify
}
