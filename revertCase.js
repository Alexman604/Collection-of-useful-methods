const revertCase = (string = '') => {
  let revertedString = '';
  for (const char of string) {
    console.log(char);
    if (char.toUpperCase() === char) {
      (revertedString += char.toLowerCase());
    }
    else {
      (revertedString += char.toUpperCase());
    }
    
    //console.log(revertedString);
  }

  return revertedString;
};
