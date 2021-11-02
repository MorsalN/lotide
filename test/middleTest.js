const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should returns [] for an array with a single element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should returns [] for an array with 2 elements", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("should returns an array with 2 elements if array is even", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it("should returns an array with 1 element if array is odd", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
});


