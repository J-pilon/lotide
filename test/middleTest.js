const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns undefined when array is empty", () => {
    assert.deepEqual(middle([]), undefined);
  })

  it("returns middle two numbers when array length is even", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]); 
  })

  it("returns middle number when array length is odd", () => {
    assert.deepEqual(middle([1,2,3]), [2]); 
  })
});
