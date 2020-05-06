'use strict'

function build () {
  const fastify = require('fastify')({
    logger: true
  })

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

  return fastify
}

module.exports = build
