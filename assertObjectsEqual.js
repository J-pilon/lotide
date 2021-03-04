const eqObjects = function(object1, object2) {
  
  let keysOf1 = Object.keys(object1);
  let keysOf2 = Object.keys(object2);

  if (keysOf1.length === keysOf2.length) {

    for (const key of keysOf1) {

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

        if (!eqObjects(object1[key], object2[key])) {

          return false;
        }
      } else if (object1[key] !== object2[key]) {
      
        return false;
      }
    }

  } else {

    return false;
  }

  return true;
  
};

const assertObjectsEqual = function(compare) {
  const inspect = require('util').inspect;

  if (compare) {

    console.log(`Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);

  } else if (!compare) {

    console.log(`Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {1: 'a', 2: 'b'};

assertObjectsEqual(eqObjects(obj1, obj2));