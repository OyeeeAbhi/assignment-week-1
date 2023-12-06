/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(!numbers.length)return undefined;
    let ans = -1e9+7;
    numbers.forEach((element , index , arr)=>{
        ans = Math.max(element , ans);
    });
    return ans;
}

module.exports = findLargestElement;