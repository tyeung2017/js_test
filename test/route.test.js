const { describe, it } = require('mocha');
const request = require('supertest');
const assert = require('assert');

const app = require('../index');

// Should also use sinon to mock ajax in production
describe('GET request with a valid address', () => {
  it('It should return a valid amount of ETH, with status code 200', (done) => {
    request(app)
      .get('/api/738d145faabb1e00cf5a017588a9c0f998318012/balance')
      .expect(200)
      .end((err, result) => {
        assert.strictEqual(result.text, '0.019254563');
        done();
      });
  }).slow(10000);
});

describe('GET request with an invalid address', () => {
  it('It should return an error message, with status code 400', (done) => {
    request(app)
      .get('/api/738d145faabb1e00cf5a017588a9cf998318012/balance')
      .expect(400)
      .end((err, result) => {
        assert.strictEqual(result.text, '"Address 738d145faabb1e00cf5a017588a9cf998318012 should be 40 characters long."');
        done();
      });
  }).slow(10000);
});


describe('GET request with an invalid url', () => {
  it('It should return Not Found message, with status code 404', (done) => {
    request(app)
      .get('/ap/738d145faabb1e00cf5a017588a9c0f998318012/balance')
      .expect(404)
      .end((err, result) => {
        assert.strictEqual(result.text, 'Not Found');
        done();
      });
  });
});

