const map = function(array, callback) {

  const newMap = [];

  for (let item of array) {

    newMap.push(callback(item));
  }
  return newMap;
};

module.exports = map;

