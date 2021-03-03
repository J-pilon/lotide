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

// const without = function(array, itemsToRemove)



// const without = function(array, itemsToRemove){

//   let newArray = [];

//   for (let i = 0; i < itemsToRemove.length; i++) {

//     for (let j = 0; j < array.length; j++) {

//       if (itemsToRemove[i] !== array[j]) {
      
//         newArray.push(array[j]);
//       } 
//     }
//   }
//   return newArray;
// }

const without = function (array, itemsToRemove) {

  let newArray = [];

  for (let i = 0; i < array.length; i++) {

    newArray.push(array[i]);

  }

  for (let j = 0; j < array.length; j++) {

    for ( let i = 0; i < itemsToRemove.length; i++){

        if (array[j] === itemsToRemove[i]) {

        let k = newArray.indexOf(itemsToRemove[i]);
        
        if (k > -1) {
        newArray.splice(k, 1);
        }
      }
    }
  }
  
  return newArray;
  
};

let array = [1,2,3,4,5];

console.log(without(array, [2,1]));
console.log(array);
