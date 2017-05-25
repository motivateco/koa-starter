const createError = require('http-errors')
const http = require('http')
describe('middleware/errorHandler', () => {
  let errorHandler
  let ctx

  beforeEach(() => {
    ctx = {
      body: {},
      message: 'response message',
      req: {
        status: 'request status'
      }
    }
    errorHandler = require('src/middleware/error/errorHandler')
  })

  it('should handle client errors', () => {
    const err = createError(404)
    const next = sinon.stub().throws(err)
    errorHandler()(ctx, next)
    expect(ctx.body).to.eql(Object.assign(ctx.body, err))
  })

  it('should handle server errors', () => {
    const err = createError(500, 'boom')
    const next = sinon.stub().throws(err)
    errorHandler()(ctx, next)
    expect(ctx.body).to.eql({
      message: http.STATUS_CODES[500]
    })
  })

  it('should handle uncaught errors', () => {
    const err = new Error('boom')
    const next = sinon.stub().throws(err)
    errorHandler()(ctx, next)
    expect(ctx.body).to.eql({
      message: http.STATUS_CODES[500]
    })
  })

  it('should support custom loggers', () => {
    const err = new Error('boom')
    const log = { error: sinon.stub() }
    const next = sinon.stub().throws(err)
    errorHandler(log)(ctx, next)
    expect(log.error).to.have.been.calledWith({ err, req: ctx.req })
  })
  
})
