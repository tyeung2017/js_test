const { describe, it } = require('mocha');
const assert = require('assert');

const conversion = require('../service/conversion.service');

describe('Pass normal integer into conversion function', () => {
  it('It should return a valid amount of ETH', () => {
    assert.strictEqual(conversion(19254563000000000), 0.019254563);
  });
});

// it will break the function if not number
describe('Pass normal integer into conversion function', () => {
  it('It would return NaN', () => {
    assert.strictEqual(isNaN(conversion('hiya')), true); // eslint-disable-line // cannot directly compare NaN as NaN !== NaN
  });
});

