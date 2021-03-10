const countLetters = function(string) {
  const letterObj = {};

  for (let letter of string) {
    
    if (letter !== ' ') {
      
      if (letterObj[letter]) {

        letterObj[letter] += 1;

      } else {

        letterObj[letter] = 1;
      }
    }
  }
  return letterObj;

};

module.exports = countLetters;


