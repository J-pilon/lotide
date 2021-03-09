// const assertEqual = require('./assertEqual')


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

module.exports = eqArrays;