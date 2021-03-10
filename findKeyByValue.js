const findKeyByValue = function(value, obj){

  for (const index in obj) {

    if (obj[index] === value) {

      return index;

    }
  }
  
};

module.exports = findKeyByValue;
