// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"



function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if( totalSpent >= 50000)
GOLD_DISCOUNT = 0.1;
else if( totalSpent >= 20000 && totalSpent < 50000) 
SILVER_DISCOUNT = 0.05;
else if( totalSpent >= 5000 && totalSpent < 20000)
BRONZE_DISCOUNT = 0.02;
else {

}
  // Change code above this line
  return discount;