//Ex1: Sum of Array Elements
// Write a function sumArray that takes an array of numbers as an argument and returns the sum of all the elements in the array.
function sumArray(arr) {
    let sum = 0;

    arr.forEach(element => {
        sum += element;
    });

    return sum;
}

// // Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output should be 15

// ----------------------------------------------------------

// Exercise 2: Reverse String
// Write a function reverseString that takes a string as an argument and returns the reversed version of the string.
function reverseString(str) {
    var splitStr = str.split("");
    var reverseArray = splitStr.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
}

// Example usage:
const inputString = "Hello there! I am practicing JS";
console.log(reverseString(inputString)); // Output should be the string in reverse"

// ----------------------------------------------------------

// Exercise 3: Object Manipulation
// Create an object called person with properties name, age, and city. Write a function printPersonInfo that takes 
// a person object as an argument and prints their information.
const person = {
    name: "Jordan Belfort",
    age: 61,
    city: "New York City"
};

function printPersonInfo(person) {
    console.log(`${person.name} is the Wolf of Wallstreet, he is ${person.age} old. You can find him in ${person.city} selling pens.`);
}

// Example usage:
printPersonInfo(person); // Output should be something like "John is 30 years old and lives in New York."


// ----------------------------------------------------------

// Exercise 4: Filter Even Numbers
// Write a function filterEvenNumbers that takes an array of numbers as an argument and returns a new array containing only the even numbers.
function filterEvenNumbers(arr) {
    const evenArray = arr.filter(number => number % 2 === 0);
    return evenArray;
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbersArray)); // Output should be [2, 4, 6, 8, 10]

// ----------------------------------------------------------

// Exercise 5: Find Object in Array
// Create an array of objects, each representing a person with properties name and age. Write a function findPerson that takes an array and a 
// name as arguments, and returns the person object with that name.
const people = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 22 }
];

function findPerson(arr, name) {
    name = arr.find(person => person.name === name);
    return name;
}

// Example usage:
console.log(findPerson(people, "Bob")); // Output should be { name: "Bob", age: 30 }