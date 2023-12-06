/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str='abhishek') {
    // Your code here
    str = str.toLowerCase();
    let ans = 0;
    for(let i=0;i<str.length;i++){
      ans = (str[i] == 'a' || str[i] == 'e' || str[i] == 'o' || str[i] == 'u' || str[i] == 'i') ? ans+=1 : ans+=0;
    }
    return ans;
}
// console.log(countVowels());
module.exports = countVowels;