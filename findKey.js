//parameter one is an object
// parameter two is a callback
// for..in to loop through keys
// if statement return true when you find the value that matches your callback

const findKey = function(obj, callback) {

  for (const property in obj) {
    if (callback(obj[property])) {
      return property;
    }
  }
};

const x = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

console.log(x);