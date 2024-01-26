///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0
// set loop from fixed 0 to 6, because the prompt was per week which a week is always 7 days so no need to account for dynamic values
for (let i = 0; i < 7; i++) {
    // prompt asked for total acres picked for a whole week, so each loop, added the sum of all acres picked on each day to the total
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log(totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// Made the assumption by number of acres picked per day using the totalAcres variable that I was to just get an average, so I divided the totalAcres by 7, number of days in a week, to get the average daily amount
const averageDailyAcres = totalAcres / 7

console.log(averageDailyAcres)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// used > 0 as the while loop was to only loop if acresLeft is above 0, as if acresLeft was 0, then there'd still be acres left to pick
while (acresLeft > 0) {
    // simple increment of the days variable each loop following the instructions
    days += 1
    // used the -= syntax, as only the daily average was to be subtracted from the number of acres left, so I used the averageDailyAcres variable
    acresLeft -= averageDailyAcres
}
console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// made each variety have an empty array for their Tons
let fujiTons = []
let galaTons = []
let pinkTons = []

for (let i = 0; i < 7; i++) {
    //combined the lines of multiplying the acres by 6.5 to get number of tons picked each day, and pushing that reuslt to the respective day in the respective varity Tons array. So on Monday, the fujiTons array would correctly receive 13 tons, as fujiAcres has 2 acres listed under the Monday index. Also reused 0 to less than 7, as this is per week
    fujiTons.push(fujiAcres[i] * 6.5)
    galaTons.push(galaAcres[i] * 6.5)
    pinkTons.push(pinkAcres[i] * 6.5)
}
console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (let i = 0; i < 7; i++) {
    
    // Each loop, would add each day's of Tons of apples multiplied by 2000 to get the pounds, into the respective number of pounds for the apples
    fujiPounds += fujiTons[i] * 2000
    galaPounds += galaTons[i] * 2000
    pinkPounds += pinkTons[i] * 2000
}




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// This was to just take the value of pounds and multiply it by the price of the apple variety, then stored the profit into the correct variable
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// The totalProfit was just summing up all of the apple variety's profits
const totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)