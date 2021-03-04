const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {

  let longestArray = [];
  if (array1.length > array2.length) {
    longestArray = array1;
  } else {
    longestArray = array2;
  }
  

  for (let i = 0; i < longestArray.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  for (let i = 0; i < longestArray.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    }
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  let keysOf1 = Object.keys(object1);
  let keysOf2 = Object.keys(object2);

  if (keysOf1.length === keysOf2.length) {

    for (const key of keysOf1){

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

        if (!eqArrays(object1[key], object2[key])) {

          return false;
        };
      } else if (object1[key] !== object2[key]) {
      
        return false;
        } 
    }

  } else {

    return false;
  }

  return true;
  
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3] };

eqObjects(cd, dc)

assertEqual(eqObjects(cd, cd2), true)
