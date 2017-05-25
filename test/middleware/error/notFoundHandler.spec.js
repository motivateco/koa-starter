describe('middleware/notFoundHandler', () => {
  let notFoundHandler
  let next
  let ctx
  beforeEach(() => {
    ctx = {
      throw: sinon.stub()
    }
    next = sinon.stub()
    notFoundHandler = require('src/middleware/error/notFoundHandler')
  })

  it('should throw a 404', () => {
    notFoundHandler(ctx, next)
    expect(ctx.throw).to.have.been.calledWith(404)
  })
})
