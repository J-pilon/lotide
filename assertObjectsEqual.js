const assertObjectsEqual = function(compare) {
  const inspect = require('util').inspect;

  if (compare) {

    console.log(`Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);

  } else if (!compare) {

    console.log(`Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;