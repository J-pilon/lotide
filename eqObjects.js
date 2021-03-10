const eqObjects = function(object1, object2) {
  
  let keysOf1 = Object.keys(object1);
  let keysOf2 = Object.keys(object2);

  if (keysOf1.length === keysOf2.length) {

    for (const key of keysOf1) {

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

        if (!eqArrays(object1[key], object2[key])) {

          return false;
        }
      } else if (object1[key] !== object2[key]) {
      
        return false;
      }
    }

  } else {

    return false;
  }

  return true;
  
};

module.exports = eqObjects;
