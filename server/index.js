require('dotenv').config()

const app = require('./server')
const port = process.env.PORT || 3000

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})
