const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const myArray = [1,2,3,4,5];

const tail = function(array) {
  let tail = [];
  
  for (let i = 1; i < array.length; i++) {
    tail[i - 1] = array[i];
  }
  
  return tail;
};


console.log(tail(myArray));
assertEqual(myArray.length, 5);