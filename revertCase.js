// 1 - string loop
const revertCase = (string = '') => {
  let revertedString = '';
  for (const char of string) {
    if (char.toUpperCase() === char) {
      (revertedString += char.toLowerCase());
    }
    else {
      (revertedString += char.toUpperCase());
    }    
  }
  console.log(revertedString);
  return revertedString;
};

// 2 - for loop
const revertCase1 = (string = '') => {
      let newStr = '';
    for (let i = 0; i < string.length; i++ ) {
      if (string[i].toLowerCase() === string[i]) {
       newStr += string[i].toUpperCase();}
       else {newStr += string[i].toLowerCase();}
   }
   console.log(newStr); 
   return newStr;
}

