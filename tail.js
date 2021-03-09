const tail = function(array) {
  const newArray = [];

  if (array.length === 0) {
    return undefined;
  }

  if (array.length === 1) {
    return array;
  }

  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
};

module.exports = tail;