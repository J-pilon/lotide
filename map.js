const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const newMap = [];

  for (let item of array) {

    newMap.push(callback(item));
  }
  return newMap;
};

const results1 = map(words, word => word[0]);

console.log(results1);

