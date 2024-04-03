/* 
08 - toTitleCase

Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"

First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()

Alt 1
=====

function capitalizeWord(word) {
	const first = word.slice(0, 1)
	const rest = word.slice(1, word.length)
	return first.toUpperCase() + rest
}

function toTitleCase(str) {
	const arr = str.split(' ')
	let finalStr = ''
	for (let word of arr) {
		finalStr += capitalizeWord(word) + ' '
	}
	return finalStr.trimEnd()
}

Alt 2
=====

*/

function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1)
}

function toTitleCase(str) {
	// split sentence into an array of words
	const sentenceArr = str.split(' ')
	// loop through the arrays of words and capitalizeWord func on each word
	const capArr = sentenceArr.map((word) => capitalizeWord(word))
	// join sentence arr back into a string
	return capArr.join(' ')
}

// Test your functions
console.log(capitalizeWord('pumpkin'))
console.log(toTitleCase('pumpkin pranced purposefully across the pond'))
