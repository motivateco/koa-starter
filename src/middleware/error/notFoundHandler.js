
const notFoundHandler = (ctx, next) => {
  ctx.throw(404)
}

module.exports = notFoundHandler
