

const words = ["ground", "control", "to", "major", "tom"];
// argument an array to map
// argument a callback function
// function will return a new array

const map = function(array, callback) {

  const newMap = [];

  for (let item of array) {

    newMap.push(callback(item));
  }
  return newMap;
};

const results1 = map(words, word => word[0]);

console.log(results1);

