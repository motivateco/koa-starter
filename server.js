require('dotenv').config()

const http = require('http')
const app = require('./src/app')
const log = require('./src/log')

const port = process.env.PORT || 8080
const hostname = process.env.HOSTNAME || 'localhost'
const server = http.createServer(app.callback()).listen(port, hostname)

server.on('listening', () =>
  log.info(`Application started on ${server.address().address}:${server.address().port}`)
)
