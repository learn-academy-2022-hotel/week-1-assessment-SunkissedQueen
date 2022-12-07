// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// ["tangerine", "magenta", "lilac", "daffodil", "indigo"] 
// b) Verify and explain: Because the push() method is a mutator, the console.log shows that it has increased the values in the array to 5.
// console.log(colors) will output the array with its values as stated in my answer.

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: Developer Raquel, 10
// b) Verify and explain: length starts counting the values with 1

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: Developer Dominque, l
// b) Verify and explain: incorrect because the index start with 0, answer is o

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Developer Octavio, "Ruby"
// b) Verify and explain: Since arrays are 0th index, languages[1] will be Ruby

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Developer Christian, error
// b) Verify and explain: .toUpperCase() is not a function for arrays

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: Developer Molly, 4
// b) Verify and explain: incorrect because .length returns the amount of values in the array (or the index + 1). type of will return the datatype of 4, which is number
