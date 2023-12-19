// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length > 26) return false;

    const charMap = {};

    for (let i = 0; i < alphabet.length; i++) {
      if (charMap[alphabet[i]]) {
        return false; // If the character is already present, return false
      }
      charMap[alphabet[i]] = true; // Add the character to the map
    }

      // Define the default alphabet (if not provided or empty)
  const defaultAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  // Prepare the encoding and decoding alphabets
  const normalizedAlphabet = alphabet ? alphabet.toLowerCase() : defaultAlphabet;

  if (normalizedAlphabet.length !== 26) {
    return false; // Return false if the alphabet does not have 26 characters
  }

  const encodingMap = {};
  const decodingMap = {};
  
  // Create the encoding and decoding maps
  for (let i = 0; i < defaultAlphabet.length; i++) {
    encodingMap[defaultAlphabet[i]] = normalizedAlphabet[i];
    decodingMap[normalizedAlphabet[i]] = defaultAlphabet[i];
  }

  let result = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();

    if (encode) {
      // Encode the characters
      if (encodingMap[char]) {
        result += input[i] === input[i].toUpperCase() ? encodingMap[char].toUpperCase() : encodingMap[char];
      } else {
        result += input[i];
      }
    } else {
      // Decode the characters
      if (decodingMap[char]) {
        result += input[i] === input[i].toLowerCase() ? decodingMap[char].toLowerCase() : decodingMap[char];
      } else {
        result += input[i];
      }
    }
  }

  return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
