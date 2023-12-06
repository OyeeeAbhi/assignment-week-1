/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str='Eva, can I see bees in a cave?') {
  let ans = "";
  let ans2 = "";
  str = str.toLowerCase();
  for(let i=str.length-1;i>=0;i--){
    if(str[i] != '?' && str[i]!=' ' && str[i] != ',' && str[i]!='!' && str[i] != '.'){
      ans = ans + str[i];
      ans2 = str[i] + ans2;

    }
  }
  return ans == ans2;
}
console.log(isPalindrome());
module.exports = isPalindrome;
