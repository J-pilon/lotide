const head = function(array) {

  if (array === []) {
    return undefined;
  }

  let firstElement = array[0];
  return firstElement;
};

module.exports = head;

