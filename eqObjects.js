const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  let keysOf1 = Object.keys(object1);
  let keysOf2 = Object.keys(object2);

  if (keysOf1.length === keysOf2.length) {

    for (const key of keysOf1){

      console.log(key); 

      if (object1[key] === object2[key]) {


      } else {

        return false;
      }
    }

  } else {
    return false;
  }

  
};

const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: [2, 3, 4] };

eqObjects(cd, cd2)

// assertEqual(eqObjects(cd, cd2), false)
