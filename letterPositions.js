const eqArrays = function(array1, array2) {

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};



const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]]) {

      results[sentence[i]].push(i);

    } else {

      results[sentence[i]] = [i];
    }
  }
  return results;
}

const mySentence = 'hello';

console.log(letterPositions(mySentence));

assertArraysEqual(letterPositions("hello").l, [2,3]);




