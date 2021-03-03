const assertArraysEqual = function(actual, expected) {
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

const middle = function(array) {

  let arrayCopy = [];
  let middleArray = [];
  let indexMiddle = 0;

  for (let index in array) {
    arrayCopy.push(array[index]);
  }

  if (array.length === 2) {

    return middleArray;

  } else if (array.length % 2 === 0) {

    indexMiddle = (array.length / 2) - 1;

    middleArray.push(arrayCopy.splice(indexMiddle,2));

    return middleArray;

  } else {
    indexMiddle = (array.length - 1) / 2;

    middleArray.push(arrayCopy.splice(indexMiddle, 1));

    return middleArray;
  }
};

console.log(middle([1,2]));