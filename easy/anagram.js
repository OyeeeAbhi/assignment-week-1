/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1='hello', str2='world') {
    if(str1.length != str2.length)return false;

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let freq1 = new Object();
    let freq2 = new Object();

    for(let i=0;i<str1.length;i++){
      freq1[`${str1[i]}`] = freq1[`${str1[i]}`] == undefined ? 1 : freq1[`${str1[i]}`]+= 1;  
    }

    for(let i=0;i<str2.length;i++){
      freq2[`${str2[i]}`] = freq2[`${str2[i]}`] == undefined ? 1 : freq2[`${str2[i]}`]+= 1;  
    }
    console.log(freq1 , freq2);
    for(key in freq1){
      if(freq1[key] != freq2[key])return false;
    }
    return true;

}
// console.log(isAnagram());

module.exports = isAnagram;
