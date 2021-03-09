const middle = function(array) {

  let arrayCopy = [];
  let middleArray = [];
  let indexMiddle = 0;

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

module.exports = middle;
