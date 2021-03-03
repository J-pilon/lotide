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

function assertArraysEqual(){
  if (eqArrays(array1, array2)){
    console.log(`${array1} === ${array2}`);
  } else if (!eqArrays(array1, array2)) {
    console.log(`${array1} !== ${array2}`);
  }
};

const array1 = [1,2,3];
const array2 = [1,1,3];

assertArraysEqual();
