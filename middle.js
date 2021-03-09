const middle = function(array) {
  let arrayCopy = [];
  let middleArray = [];
  let indexMiddle = 0;

  if (array.length === 0) {
    return undefined;
  }

  for (let i = 0; i < array.length; i++) {
    arrayCopy.push(array[i]);
  }

  if (arrayCopy.length === 2) {
    return arrayCopy;

  } else if (arrayCopy.length % 2 === 0) {
    indexMiddle = (arrayCopy.length / 2) - 1;
    middleArray = arrayCopy.splice(indexMiddle, 2);
    return middleArray;

  } else if (arrayCopy.length % 3 === 0) {
    indexMiddle = (arrayCopy.length - 1) / 2;
    middleArray = arrayCopy.splice(indexMiddle, 1);
    return middleArray;
  }
};
// console.log(middle([1,2,3,4,5,6,7,8,9,10]));
// console.log(middle([1,2,3,4]));

module.exports = middle;
