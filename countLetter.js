const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letterObj = {};

  for (let letter of string) {
    
    if (letter !== ' ') {
      
      if (letterObj[letter]) {

        letterObj[letter] += 1;

      } else {

        letterObj[letter] = 1;
      }
    }
  }
  return letterObj;

};

const myString = 'lighthouse in the house';

const result = countLetters(myString);

console.log(result);



