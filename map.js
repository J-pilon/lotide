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

function assertArraysEqual(compare){
  if (compare){
    console.log(`${array1} === ${array2}`);
  } else if (compare) {
    console.log(`${array1} !== ${array2}`);
  }
};



const words = ["ground", "control", "to", "major", "tom"];
// argument an array to map
// argument a callback function
// function will return a new array

const map = function(array, callback) {

  const newMap = [];

  for (let item of array) {

    newMap.push(callback(item));
  }
  return newMap;
};

const results1 = map(words, word => word[0]);

console.log(assertArraysEqual(eqArrays(words, results1)))


