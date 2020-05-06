'use strict'

function build () {
  require('marko/node-require');

  const path = require('path')
  const fastify = require('fastify')({
    logger: true
  })

  const isProduction = process.env.NODE_ENV === 'production'
  const outputDir = path.join(__dirname, 'static')

  // Register View Engine
  fastify.register(require('point-of-view'), {
    engine: {
      marko: require('marko')
    }
  })

  // Register API Routes
  // fastify.register(require('./services/api/routes'))

  // Register Page Routes
  // fastify.register(require('./views/routes'))
  fastify.get('/', async (req, res) => {
    const { name = 'World1' } = req.query
    req.log.info({ name }, 'hello world!')
    return `Hello ${name}!`
  })

  fastify.get('/hello', async (req, res) => {
    const { name = 'World2' } = req.query
    req.log.info({ name }, 'hello world!')
    return `Hello ${name}!`
  })

  return fastify
}

module.exports = build
