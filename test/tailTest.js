const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns return the whole array except for the first element", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail([5]), [5]); 
  });

  it("return undefined when array is empty", () => {
    assert.deepEqual(tail([]), undefined); 
  })
});
