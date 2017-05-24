const Koa = require('koa')
const bunyanLogger = require('koa-bunyan-logger')
const compress = require('koa-compress')
const cors = require('kcors')
const notFoundHandler = require('./middleware/error/notFoundHandler')
const errorHandler = require('./middleware/error/errorHandler')
const log = require('./log')
const routes = require('./routes')

const app = new Koa()

app.use(errorHandler(log))
app.use(compress())
app.use(bunyanLogger())
app.use(cors())
app.use(routes.route1.middleware())
app.use(routes.route2.middleware())
app.use(routes.route3.middleware())
app.use(notFoundHandler)

module.exports = app
