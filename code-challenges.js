// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// Function Signature
// input: strings √
// output: string indicating which of the two strings has more characters √

// input: "apple", "banana"
// output: "Banana has more characters than apple"

// input: "cherry", "kiwi"
// output: "Cherry has more characters than kiwi"

// Process √
// create a function called bigFruit that takes in a set of strings called fruit1, fruit2 and fruit3, fruit4
// if fruit1 has more characters than fruit2 return fruit1 has more characters than fruit2
// any other condition return fruit2 has more characters than fruit1
// if fruit3 has more characters than fruit4 return fruit3 has more characters than fruit4
// any other condition return fruit4 has more characters than fruit3
// string interpolation for the return statement


// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Function
const bigFruit = (value1, value2) => {
  if(value1.length > value2.length){
    return `${value1} has more characters than ${value2}`
  } else if(value1.length === value2.length) {
    return `${value1} has the same amount of characters as ${value2}`
  } else {
    return `${value2} has more characters than ${value1}`
  }
}

console.log(bigFruit(fruit1, fruit2))
// output: banana has more characters than apple

console.log(bigFruit(fruit3, fruit4))
// output:cherry has more characters than kiwi

console.log(bigFruit(fruit2, fruit3))
// output: banana has the same amount of characters as cherry

console.log(bigFruit("watermelon", "grape"))
// output: watermelon has more characters than grape


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.
// From Developer Matt
// Pseudo code:
// Create a function called waterTemp that takes in a set of numbers called temp1, temp2, and temp3.
// Will create a parameter called value and when you enter one of the three temps will produce one of the three outcomes in a string.
// Will use the following conditional statements:
// 1) If the number is 212 the outcome will be "212 is at boiling point"
// 2) If the number is higher than 212 then the outcome will be "'value' above boiling point"
// 3) An else condition to catch all numbers lower than 212 that will produce the outcome "'value' is below boiling point"

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

// Function
const waterTemp = (value) => {
  if( value === 212){
    return `${value} is at boiling point`
  } else if( value > 212){
    return `${value} is above boiling point`
  } else {
    return `${value} is below boiling point`
  }
}

console.log(waterTemp(temp1))
// output: 42 is below boiling point
console.log(waterTemp(temp2))
// output: 350 is above boiling point
console.log(waterTemp(temp3))
// output: 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.
// From Developer Chris
// Pseudo code:
// combine the two given arrays together using .concat
// assign newly combined array to a separate variable
// return length of new array using .length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
// let padresRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(padresRuns.length)
// Output: 9

// REFACTOR
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
// Output: 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.
// From Developer Sammy
// Pseudo code:
// Function Signature
// input: string
// output: string that output is in reverse order
// Process
// create a function called reverseString that takes in a string called currentCohort
// create an empty array and empty string in the function
// for loop that will reverse the index of the string
// in the loop will have a temporary variable to hold the value of each index in the string
// push the temporary value to the empty array
// join the new array as a string and reassign it to a empty string
// return the string

// const currentCohort = "Hotel 2022"
// // Expected output: "2202 letoH"

// FUNCTION
// const reverseString = (string) => {
//   let cohortArray = []
//   let cohortString = ""
//   // since we are reversing using the decrement operator i-- as well as starting the count at the highest index number and stopping at 0
//   for(let i = string.length - 1; i >= 0; i-- ) {
//     let tempStorage = string[i]
//     cohortArray.push(tempStorage)
//     cohortString = cohortArray.join("")
//   }
//   return cohortString
// }

// console.log(reverseString(currentCohort))
// output: 2202 letoH


// REFACTOR
// // removing variables for the storing the string and values inside the for loop
// const reverseString = (string) => {
//   // maintained the empty array to store the values
//   let cohortArray = []
//   for(let i = string.length - 1; i >= 0; i-- ) {
//     // used the mutator to push values into the array
//     cohortArray.push(string[i])
//   }
//   // return the array as a string
//   return cohortArray.join("")
// }

// console.log(reverseString(currentCohort))
// //output: 2202 letoH

// REFACTOR using built-in methods
const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

const reverseString = (string) => {
  // use split to turn the string into an array, reverse the values in the area, join to return the array as a string
  return string.split("").reverse().join("")
}

console.log(reverseString(currentCohort))
//output: 2202 letoH


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.
// From Developer James
// Pseudo code:
// Function Signature
// input: an array and a number
// output: the last index of the given value from the array

// Process
// create a function called lastIndexFinder that takes an array and a number as an argument
// use an accessor to check if the inputted number is part of the array
// if the inputted number is part of the array, display the last index of the inputted number inside the array in the console
// if the inputted number is not in the array, send a message to the console saying the given number is not present in the given array
// display the reversed string in the console

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// FUNCTION
const lastIndexFinder = (array, number) => {
  // was going to use a variable to store the accessor but realize that it will be used as a condition, so used the accessor as the condition
  // let findNumber = array.includes(number)
  if(array.includes(number)) {
    return array.lastIndexOf(number)
  } else {
    return `${number} is not present in the current array.`
  }
}

console.log(lastIndexFinder(myNumbers, givenValue1))
// output: 7
console.log(lastIndexFinder(myNumbers, givenValue2))
// output: 8
console.log(lastIndexFinder(myNumbers, 44))
// output: 44 is not present in the current array.


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.
// From Developer Romeo
// Pseudo code: process : use the mutators .reverse and .sort to sort the variables in the array from largest to smallest

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// CODE
console.log(sanDiegoSummerTemperatures.sort().reverse())
// output: [ 82, 80, 79, 77, 76, 73, 72 ]
console.log(sanDiegoWinterTemperatures.sort().reverse())
// output: [ 68, 67, 66, 66, 62, 59, 59 ]
