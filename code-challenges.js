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

// console.log(bigFruit(fruit1, fruit2))
// output: banana has more characters than apple

// console.log(bigFruit(fruit3, fruit4))
// output:cherry has more characters than kiwi

// console.log(bigFruit(fruit2, fruit3))
// output: banana has the same amount of characters as cherry

// console.log(bigFruit("watermelon", "grape"))
// output: watermelon has more characters than grape



// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
