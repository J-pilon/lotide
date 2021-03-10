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

const takeUntil = function(array, callback) {
  const newArray = [];

  for (const element of array) {

    if (!callback(element)) {
      
      newArray.push(element);
    } else {

      break;
    }
  }
  return newArray;
};

const data1 = [5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log(eqArrays(results1, [5, 7, 2]));