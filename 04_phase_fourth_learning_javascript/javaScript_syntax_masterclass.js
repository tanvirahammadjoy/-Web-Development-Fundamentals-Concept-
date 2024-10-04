// Masterclass on JavaScript Syntax & Structure
// 1. Introduction to JavaScript
// JavaScript is a high-level, interpreted programming language that enables interactivity in web applications. Its syntax is heavily influenced by Java and C-like languages but it is more dynamic. JavaScript is versatile, running on both the client-side and server-side of web development.

// 2. Variables and Data Types
// 2.1. Variable Declarations: var, let, and const
// var: Function-scoped, prone to hoisting issues.
// let: Block-scoped, preferred for variables whose values may change.
// const: Block-scoped, for constants that shouldn’t be reassigned.
// Example:

// Assignment
var name = "Alice";
let age = 30;
const country = "Malaysia";

let concat = name + age + country;
console.log(concat); // Alice30Malaysia

// changing value
let num1 = 1234;
console.log(num1); // 1234
num1 = 9845;
console.log(num1); // 9845

const nameAnimal = "dog";
console.log(nameAnimal); // dog

nameAnimal = "cat";
console.log(nameAnimal); // error constant are not allowed to re declare

// 2.2. Data Types
// Primitive Types: string, number, boolean, undefined, null, symbol, bigint.
// Objects: object, array, function.

let str = "Hello"; // string
let num = 42; // number
let isTrue = true; // boolean
let user = { name: "Alice" }; // object
let arr = [1, 2, 3]; // array (special object)
let greet = function () {}; // function (also an object)

// 3. Operators
// 3.1. Arithmetic Operators
// +, -, *, /, %, ** (exponentiation).

let result = 10 + 5; // 15
let power = 2 ** 3; // 8

// 3.2. Assignment Operators
// =, +=, -=, *=, /=, %=.

let score = 102;
let bonus = 25;

let totalScore = score + bonus;

let addition = 4 + 5;
let subtract = 9 - 3;
let mult = 3 * 5;
let divi = 8 / 2;
let reminder = 9 % 2;
let expo = 2 ** 3;

let myscore = 110;
myscore++;

let credits = 56;
credits--;

// 3.3. Comparison Operators
// ==, === (strict equality), !=, !== (strict inequality), >, <, >=, <=.
// Example:
let isEqual = 10 === "10"; // false
let isStrictEqual = 10 === 10; // true

// Comparison operation

let num0 = 3;
let num2 = 3;
let num3 = 6;

console.log(num0 == num2); //true
console.log(num0 != num3); // true
console.log(num0 > num3); // true
console.log(num0 < num3); // true

// 3.4. Logical Operators
// &&, ||, ! (AND, OR, NOT).

let isLoggedin = true;
let ispaid = true;

// console.log(isLoggedin && ispaid);

let isEmailuser = true;
let isGoogleuser = false;

console.log(isEmailuser || isGoogleuser); // isEmailuser here will be passed be cose this is true

// printing
console.log("Hello");
console.log("chai");
process.stdout.write("chai");
process.stdout.write("chai");

console.table({ city: "Jaipur" });
console.warn({ city: "Jaipur" });

// 4. Functions
// Functions encapsulate logic that can be reused.

// 4.1. Function Declaration

function greet() {
  return "Hello World";
}

// 4.2. Function Expression
const greet = function () {
  return "Hello World";
};

// 4.3. Arrow Functions (ES6)
// Shorter syntax for anonymous functions
const greet = () => "Hello World";

// 4.4. Parameters and Arguments
// Functions can take parameters and return values.
function add(a, b) {
  return a + b;
}
add(5, 10); // returns 15

// 5. Control Flow
// 5.1. Conditional Statements
// if...else: Executes code based on conditions.
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// switch: Evaluates an expression and matches cases.
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Midweek");
}

// 5.2. Loops
// for loop:
for (let i = 0; i < 5; i++) {
  console.log(i); // prints 0 to 4
}

// while loop:
let count1 = 0;
while (count1 < 5) {
  console.log(count1);
  count1++;
}

// do...while loop:
let count2 = 0;
do {
  console.log(count2);
  count2++;
} while (count2 < 5);

// 6. Objects and Arrays
// 6.1. Objects
// Objects store data in key-value pairs.

const user1 = {
  name: "Alice",
  age: 30,
  greet() {
    console.log("Hello!");
  },
};
user.greet(); // "Hello!"

// 6.2. Arrays
// Arrays store data in ordered collections.
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // "apple"

// 6.3. Array and Object Destructuring (ES6)
// Easily extract values from arrays and objects.
const [a, b] = [1, 2]; // Array destructuring
const { name, age1 } = user; // Object destructuring

// 7. Advanced Functions
// 7.1. Higher-Order Functions
// Functions that accept other functions as arguments or return functions.

// Example:
function higherOrder(fn) {
  return fn();
}
function sayHello() {
  return "Hello!";
}
higherOrder(sayHello); // "Hello!"

// 7.2. Callback Functions
// Passed to another function to be executed later.
function fetchData(callback) {
  // Simulate data fetching
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}
fetchData((message) => console.log(message)); // Logs "Data received" after 1 second

// 7.3. Closures
// Functions that retain access to their lexical scope even when called outside of it.
function outer() {
  let outerVar = "Outer";

  function inner() {
    console.log(outerVar); // Can access outerVar
  }

  return inner;
}
const innerFunc = outer();
innerFunc(); // Logs "Outer"

// 8. Object-Oriented Programming (OOP)
// 8.1. Classes (ES6)
// JavaScript uses prototype-based inheritance, but ES6 introduced class syntax for better readability.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const person1 = new Person("Alice", 30);
person1.greet(); // "Hello, my name is Alice"

// 8.2. Inheritance
// One class can extend another.
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age); // Calls parent class constructor
    this.job = job;
  }
  work() {
    console.log(`${this.name} is working as a ${this.job}`);
  }
}
const employee1 = new Employee("Bob", 25, "Developer");
employee1.work(); // "Bob is working as a Developer"

// 9. ES6 and Beyond
// 9.1. Template Literals
let name = "Alice";
console.log(`Hello, ${name}`); // "Hello, Alice"

// 9.2. Spread Operator
let arr1 = [1, 2, 3];
let newArr = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

let obj = { name: "Alice", age: 30 };
let newObj = { ...obj, job: "Developer" }; // {name: "Alice", age: 30, job: "Developer"}

// 9.3. Promises & Async/Await
// Promises: Handle asynchronous operations.
let promise = new Promise((resolve, reject) => {
  // Simulate async operation
  setTimeout(() => resolve("Success!"), 1000);
});
promise.then((result) => console.log(result)); // "Success!"

// Async/Await: Cleaner syntax for working with promises.
async function fetchData() {
  let data = await fetch(url);
  return data.json();
}

// 10. Error Handling
// 10.1. Try-Catch
// Handle exceptions gracefully.
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Always runs");
}

// 11. Modules (ES6)
// JavaScript supports modular code via the import and export syntax.
// math.js
export function add(a, b) {
  return a + b;
}
// main.js
import { add } from "./math.js";
console.log(add(5, 10)); // 15

// Conclusion
// Mastering JavaScript syntax and structure provides a strong foundation for building dynamic web applications.
