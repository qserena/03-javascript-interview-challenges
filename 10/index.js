/* 

10 - Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

 */

function getBonus(id) {
    let bonus = ':('
    if (id % 3 === 0 && id % 5 === 0) {
        bonus = 'JACKPOT! 1 Million and a Yacht!'
    } else if (id % 3 === 0) {
        bonus = 'Vacation!'
    } else if (id % 5 === 0) {
        bonus = '$100,000 bonus!'
    }
    return bonus
}

function awardBonuses() {
    for (let i = 1; i < 101; i++) {
        console.log(i + ' - ' + getBonus(i))
    }
}

awardBonuses()
