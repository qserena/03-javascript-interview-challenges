/*

60 - Emoji Slot Machine

Let's create an emoji slot machine! Replace the hardcoded data with random fruit emojis from an emojis API. 
   
- Request emoji food data from the API resource below. Log it and look at it!
    - Write a function that takes in the data and returns a new array of only fruit emoji objects
    - Write a function to get 9 random fruits from your new array of fruit 
        
- Load nine random fruits into the slot machine

   MY COMMENT: 
   const api = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink' DOES NOT WORK 
   SO I REPLACE IT WITH:
   const api = 'https://emojihub.yurace.pro/api/all/category/food-and-drink'

*/

const slotMachine = document.querySelector('.emoji-slots-game')
const food = 'https://emojihub.yurace.pro/api/all/category/food-and-drink'

function makeFruitArray(arr) {
    return arr.filter((item) => item.group === 'food fruit')
}

function getRandomFruits(arr) {}

// write your fetch request here
fetch(food)
    .then((response) => response.json())
    .then((result) => makeFruitArray(result))
    .then((data) => {
        data.forEach((item) => {
            console.log(item)
        })
    })
