const request = require('supertest')

const app = require('../server/server')

test.skip('Authenticate complains about no credentials', () => {
  return request(app)
    .post('/api/v1/authenticate')
    .send({})
    .expect(403)
    .then(res => {
      expect(res.body.info).toBe('Missing credentials')
    })
})

test.skip('/api/v1/quote responds without token', () => {
  return request(app)
    .get('/api/v1/quote')
    .then(res => {
      expect(res.body).toEqual({message: 'This is a PUBLIC quote.'})
    })
})

test.skip("/api/v1/secret 403's without token", () => {
  return request(app)
    .get('/api/v1/secret')
    .expect(403)
    .end(res => {
      expect(res.body.error).toBe('No authorization token was found')
    })
})
