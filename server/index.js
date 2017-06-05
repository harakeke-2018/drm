/* eslint no-console: "off" */
require('dotenv').config()

const app = require('./server')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server listening on port', port)
})
