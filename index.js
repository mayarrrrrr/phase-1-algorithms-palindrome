function isPalindrome(word) {
  // Write your algorithm here

  if (word.length === 0 || word.toUpperCase() === word){ 
    return 'Cannot return an empty word or word in lowercase'
  }

  if (typeof word !== "string"){
    return "Word should be a string"
  }

  
  // 
  for (let i = 0; i <= Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
  }



let result = isPalindrome("noon")
console.log(result);

/* 
  Add your pseudocode here
  
  create a function - checks whether word is a palindrome or not
  pass a string as an arguement
  loop through every character to see if the forward version matches the backword
  word - should be in a lowercase
         -should not be empty
         - should be a string
  mum => mum

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.export = isPalindrome;
