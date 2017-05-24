const router = require('koa-joi-router')
const Joi = router.Joi

const route1 = router()
const route2 = router()
const route3 = router()

// add some routes ..
route1.get('/path1', async () => {})
route2.get('/path2', async () => {})
route3.route({
  method: 'post',
  path: '/path3',
  validate: {
    name: Joi.string().max(100)
  },
  type: 'json',
  output: {
    200: {
      body: {
        userId: Joi.string()
      }
    }
  },
  handler: async (ctx) => {
    ctx.body = {
      userId: 'userId'
    }
    ctx.status = 200
  }
})

module.exports = {
  route1,
  route2,
  route3
}
