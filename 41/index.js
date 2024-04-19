import shoppingCart from './data.js'

/*

41 - Total Savoy Items

Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  

*/

function totalSavory(arr) {
    return arr
        .filter((item) => item.type === 'savory')
        .reduce((total, curr) => total + curr.price, 0)
}

console.log(totalSavory(shoppingCart))
