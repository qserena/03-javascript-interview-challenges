/*

24 - Chef Mario's Recipe Book 

Chef Mario was in the middle of writing his cookbook masterpiece when he spilled coffee on his keyboard! Now all his recipes have repeat ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array and returns a new array with all the duplicates removed.

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"]; 

*/

const example = [
    '🌈 rainbow',
    '🦄 unicorn',
    '🍭 lollipops',
    '🦄 unicorn',
    '🍭 lollipops',
]

const eggScrambleRecipe = [
    '🥓 bacon',
    '🥓 bacon',
    '🍳 eggs',
    '🫑 green peppers',
    '🧀 cheese',
    '🌶️ hot sauce',
    '🥓 bacon',
    '🥦 broccoli',
    '🧀 cheese',
    '🥦 broccoli',
    '🌶️ hot sauce',
]

function removeDupesFromArray(arr) {
    let nonDupes = []
    arr.forEach((item) => {
        if (!nonDupes.includes(item)) {
            nonDupes.push(item)
        }
    })
    return nonDupes
}

console.log(removeDupesFromArray(example))
console.log(removeDupesFromArray(eggScrambleRecipe))
