// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
      if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
        return false;
      }
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      const textArray = input.split('');
    
      for (let i = 0; i < textArray.length; i++) {
        let char = textArray[i].toLowerCase();
    
        if (alphabet.includes(char)) {
          let currentIndex = alphabet.indexOf(char);
          let newIndex = (encode ? currentIndex + shift : currentIndex - shift) % 26;
    
          if (newIndex < 0) {
            newIndex += 26;
          }
    
          textArray[i] = alphabet[newIndex];
        }
      }
    
      return textArray.join('');
    }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
