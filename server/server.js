const path = require('path')
const express = require('express')

const apiRoutes = require('./routes/api')

const server = express()

server.use(express.static('public'))

server.use('/api/v1/', apiRoutes)

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
