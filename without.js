const without = function (array, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  for (let j = 0; j < array.length; j++) {
    for ( let i = 0; i < itemsToRemove.length; i++){
        if (array[j] === itemsToRemove[i]) {
        let k = newArray.indexOf(itemsToRemove[i]);
        if (k > -1) {
        newArray.splice(k, 1);
        }
      }
    }
  }
  
  return newArray;
  
};

module.exports = without;
