/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if(!transactions.length)return [];
  let totalMoneyspend = new Object();
  transactions.forEach((element , index , arr)=>{
    totalMoneyspend[`${element.category}`] = totalMoneyspend[`${element.category}`] == undefined ? element.price : totalMoneyspend[`${element.category}`]+=element.price;
  });
  let solution = [];
  for(let key in totalMoneyspend){
    let temp = new Object();
    temp[`category`] = key;
    temp[`totalSpent`] = totalMoneyspend[`${key}`];
    solution.push(temp);
  }
  // console.log(solution);
  return solution;
}


module.exports = calculateTotalSpentByCategory;