'use strict'

module.exports = function (fastify, opts, next) {
  fastify.get('/', (req, reply) => {
    reply.view('/views/routes/01-home/index.marko', {
      name: 'Fedor',
      count: 30,
      colors: ['red', 'green', 'blue']
    });
  });

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }
