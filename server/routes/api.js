const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const crypto = require('../lib/crypto')
const users = require('../lib/users')
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
router.get('/quote',
  verifyJwt({
    credentialsRequired: false,
    secret: getSecret
  }),
  (req, res) => {
    const response = {message: 'This is a PUBLIC quote.'}
    if (req.user) {
      response.user = `Your user ID is: ${req.user.id}`
    }
    res.json(response)
  }
)

// Protect all routes beneath this point
router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
)

// get all stocks of a team
router.get('/stock/:id', (req, res) => {
  const teamId = req.params.id
  stock.getTeamStockByTeamId(teamId)
    .then(stocks => {
      console.log(stocks)
      res.json(stocks)
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

// get all logs of stock items of a team
router.get('/logs/:id', (req, res) => {
  stock.getLogsByTeamItemId(req.params.id)
    .then(logs => {
      res.json(logs)
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

// increment quantity of a item
router.post('/increment', (req, res) => {
  const teamStockId = req.body.id
  stock.receiveItems(teamStockId, req.body.quantity)
    .then(() => {
      stock.getItemQtyByTeamStockId(teamStockId)
        .then(newQty => {
          res.json({quantity: newQty[0]})
        })
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

// decrement quantity of a item
router.post('/decrement', (req, res) => {
  const teamStockId = req.body.id
  stock.deliverItems(teamStockId, req.body.quantity)
    .then(() => {
      stock.getItemQtyByTeamStockId(teamStockId)
        .then(newQty => {
          res.json({quantity: newQty[0]})
        })
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
})

// These routes are protected
router.get('/secret', (req, res) => {
  res.json({
    message: 'This is a SECRET quote.',
    user: `Your user ID is: ${req.user.id}`
  })
})

// getAllStockByOrgId
// router.get()

module.exports = router
