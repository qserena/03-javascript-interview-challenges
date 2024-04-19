import shoppingCart from './data.js'

/*  

39 - Shopping Cart

Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

*/

function total(arr) {
    return arr.reduce((total, curr) => total + curr.price, 0).toFixed(2)
}

console.log(total(shoppingCart))
