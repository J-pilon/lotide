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

module.exports = takeUntil;