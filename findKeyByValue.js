const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(value, obj){

  for (const index in obj) {

    if (obj[index] === value) {

      return index;

    }
  }
  
};

assertEqual(findKeyByValue(1, {a: 1, b: 2, c: 3}), 'a');
