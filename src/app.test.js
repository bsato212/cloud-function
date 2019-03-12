/* eslint-env jest */

const request = require('supertest');
const { app } = require('./app');

describe('App routes', () => {
  test('check headers', async () => {
    const response = await request(app)
      .get('/')
      .query({
        user: 'foo',
      })
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/u);
    expect(response.headers['access-control-allow-origin']).toBeDefined();
    expect(response.headers['x-xss-protection']).toBeDefined();
    expect(response.headers['x-content-type-options']).toBeDefined();
    expect(response.headers['strict-transport-security']).toBeDefined();
    expect(response.headers['x-frame-options']).toBeDefined();
    expect(response.headers['x-dns-prefetch-control']).toBeDefined();
    expect(response.headers['x-download-options']).toBeDefined();
    expect(response.headers['x-powered-by']).toBeUndefined();
  });
});
