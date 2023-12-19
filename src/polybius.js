// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function createPolybiusSquare() {
    const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // No 'J', 'I' and 'J' are merged
    const grid = [];
    
    let index = 0;
    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 5; j++) {
        row.push(alphabet[index]);
        index++;
      }
      grid.push(row);
    }
    
    return grid;
  }
  
    
    function polybius(input, encode = true) {
    // Check for odd number of characters in the input
    if (!encode && input.replace(/\s/g, '').length % 2 !== 0) {
      return false;
    }

    const grid = createPolybiusSquare();
    const alphabet = 'abcdefghiklmnopqrstuvwxyz'; // No 'j', 'i' and 'j' are merged

    if (encode) {
      // Encoding
      let encoded = '';
      input = input.toLowerCase().split('');
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char === 'i' || char === 'j') {
          encoded += '42'; // Map both 'i' and 'j' to '42'
          continue;
        }
        if (char === ' ') {
          encoded += ' ';
          continue; // Preserve spaces
        }
        const index = alphabet.indexOf(char);
        if (index !== -1) {
          const row = Math.floor(index / 5) + 1;
          const col = (index % 5) + 1;
          encoded += `${col}${row}`;
        }
      }
      return encoded;
    } else {
      // Decoding
      let decoded = '';
      let tempInput = input.split(' ');
      for (let k = 0; k < tempInput.length; k++) {
        let word = tempInput[k];
        for (let index = 0; index < word.length; index += 2) {
          if (word[index] === ' ') {
            decoded += ' ';
            index++;
          }
          const pair = word.slice(index, index + 2);
          if (pair === '42') {
            decoded += '(i/j)';
            continue;
          }
          const col = parseInt(pair[0]) - 1;
          const row = parseInt(pair[1]) - 1;

          if (col >= 0 && col < 5 && row >= 0 && row < 5) {
            let char = grid[row][col];
            decoded += char;
          }
        }
        decoded += ' ';
      }
      return decoded.trim().toLowerCase(); // Trim to remove trailing space
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
