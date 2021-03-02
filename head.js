const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let firstElement = array[0];
  return firstElement;
};


assertEqual(head([]), "Hello");

