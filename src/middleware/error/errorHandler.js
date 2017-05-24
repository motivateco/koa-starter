const errorHandler = (logger) => {
  if (!logger) {
    logger = {
      error: console.error.bind(console) // eslint-disable-line no-console
    }
  }
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      const status = err.status || err.statusCode || 500
      ctx.status = status
      const body = {}
      if (status >= 500) {
        // internal server errors
        logger.error({ err, req: ctx.req }, err.message)
        body.message = ctx.message
      } else {
        // client errors
        Object.assign(body, err)
      }
      ctx.body = body
    }
  }
}

module.exports = errorHandler
