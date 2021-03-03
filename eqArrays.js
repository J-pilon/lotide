const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2) {

  let longestArray = [];
  if(array1.length > array2.length){
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


