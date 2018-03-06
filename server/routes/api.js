const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const crypto = require('../lib/crypto')
const users = require('../lib/users')
const logs = require('../lib/logs')
const auth = require('../lib/auth')
const stock = require('../lib/stock')

const router = express.Router()
router.use(bodyParser.json())
// router.use(bodyParser.urlencoded({
//   extended: false
// }))

router.post('/signin',
  signIn,
  auth.issueJwt
)

router.post('/register',
  register,
  auth.issueJwt
)

function signIn (req, res, next) {
  users.getByName(req.body.username)
    .then(user => {
      return user || invalidCredentials(res)
    })
    .then(user => {
      return user && crypto.verifyUser(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function register (req, res, next) {
  users.exists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      users.create(req.body.username, req.body.password)
        .then(() => next())
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

// express-jwt middleware lets us use a function as the secret,
// so we can grab from wherever...
function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

// This route will set the req.user object if it exists, but is still public
router.get('/logs', (req, res) => {
  logs.getLogs(req.query.locationId)
    .then(log => {

      res.json(log)
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

// Protect all routes beneath this point
router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
)

router.get('/locations', (req, res) => {
  stock.getLocation()
    .then(locations => {
      res.json(locations)
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

// get all stocks of a location
router.get('/stock/:id', (req, res) => {
  const locationId = req.params.id
  stock.getLocationStockByLocationId(locationId)
    .then(stocks => {
      res.json(stocks)
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

// get all logs of stock items of a location
router.get('/logs/:id', (req, res) => {
  stock.getLogsByLocationItemId(req.params.id)
    .then(logs => {
      res.json(logs)
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

// increment quantity of a item
router.post('/increment', (req, res) => {
  const locationStockId = req.body.id
  const amount = req.body.quantity
  stock.receiveItems(locationStockId, amount)
    .then(() => {
      stock.updateLog(locationStockId, 'increment', amount)
        .then(() => {
          stock.getItemQty(locationStockId)
            .then(incremented => {
              res.json(incremented[0])
            })
        })
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

// decrement quantity of a item
router.post('/decrement', (req, res) => {
  const locationStockId = req.body.id
  const amount = req.body.quantity
  stock.deliverItems(locationStockId, amount)
    .then(() => {
      stock.updateLog(locationStockId, 'decrement', -Math.abs(amount))
        .then(() => {
          stock.getItemQty(locationStockId)
            .then(decremented => {
              res.json(decremented[0])
            })
        })
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

module.exports = router
