// Master Class on JavaScript Functions and Scope
// 1. Overview of JavaScript Functions
// A function in JavaScript is a block of reusable code that can be executed whenever needed. It takes inputs, processes them, and returns a result or performs an action. Functions help you organize your code and prevent repetition.

// 1.1 Syntax of Functions
// You can define a function in multiple ways in JavaScript:

// Function Declaration:

function functionName(parameters) {
  // Function body
  return result; // Optional
}

// Function Expression:

const functionName = function (parameters) {
  // Function body
  return result; // Optional
};

// Arrow Function (ES6):

const functionName = (parameters) => {
  // Function body
  return result; // Optional
};

// Anonymous Function (used in expressions or callbacks):

const anonymousFunc = function () {
  console.log("Anonymous Function");
};

// Immediately Invoked Function Expression (IIFE):

(function () {
  console.log("IIFE executed!");
})();

// 1.2 Parameters and Arguments
// Parameters are placeholders for values the function will use:

function greet(name) {
  return `Hello, ${name}!`;
}

// You can pass arguments when invoking the function:

console.log(greet("Alice")); // Output: Hello, Alice!

// 1.3 Default Parameters (ES6)
// You can assign default values to parameters in case they are not provided during function invocation:

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!

// 2. Function Return Values
// Functions can return a value using the return statement:

function add(a, b) {
  return a + b;
}

let sum = add(3, 4); // sum will be 7

// If no return statement is used, the function returns undefined.

// 3. Types of Functions
// Pure Functions: These always produce the same output for the same input and have no side effects.

// Example:

function multiply(x, y) {
  return x * y;
}

// Impure Functions: These can cause side effects or depend on external factors, making them less predictable.

// Example:

let count = 0;
function increment() {
  count++;
}

// 4. Closures
// A closure is created when a function retains access to its lexical environment even after the outer function has returned.

// Example:

function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// The inner function retains access to count even after outer has finished executing.

// 5. Callback Functions
// A callback function is a function passed as an argument to another function and is executed after some operation.

// Example:

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData); // Output: "Data fetched" followed by "Processing data"

// 6. Higher-Order Functions
// A higher-order function is a function that accepts another function as an argument or returns a function.

// Example:

function calculate(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(calculate(add, 5, 3)); // Output: 8
console.log(calculate(multiply, 5, 3)); // Output: 15

// 7. Scope in JavaScript
// Scope refers to the accessibility of variables in different parts of your code. JavaScript has two main types of scope:

// 7.1 Global Scope
// Variables declared outside of any function or block are in the global scope and are accessible from anywhere in your code.

let globalVar = 'I am global';

function showGlobal() {
  console.log(globalVar); // Accessible
}

// 7.2 Local Scope
// Variables declared inside a function are in the local scope and can only be accessed within that function.

function localScope() {
  let localVar = 'I am local';
  console.log(localVar); // Accessible inside the function
}

localScope();
// console.log(localVar); // Error: localVar is not defined

// 7.3 Block Scope (ES6 with let and const)
// Variables declared with let and const inside a block {} are block-scoped and only accessible within that block.

if (true) {
  let blockVar = 'I am block-scoped';
  console.log(blockVar); // Accessible
}
// console.log(blockVar); // Error: blockVar is not defined

// 8. Hoisting
// In JavaScript, variable and function declarations are hoisted to the top of their scope. However, variables declared with var are initialized with undefined, while variables declared with let and const are not initialized.

console.log(hoistedVar); // Output: undefined
var hoistedVar = 'I am hoisted';

console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = 'I am not hoisted';

// Functions defined using function declarations are hoisted and can be used before their definition:

greet(); // Output: Hello!

function greet() {
  console.log('Hello!');
}

// However, function expressions and arrow functions are not hoisted:

greet(); // Error: greet is not a function

const greet = function() {
  console.log('Hello!');
};

// 9. Scope Chain
// When a variable is referenced, JavaScript starts looking in the current scope. If it's not found, it moves to the next outer scope, continuing up the scope chain until the variable is found or the global scope is reached.

let outerVar = 'I am outer';

function outerFunction() {
  let innerVar = 'I am inner';

  function innerFunction() {
    console.log(outerVar); // Accessible (scope chain)
    console.log(innerVar); // Accessible
  }

  innerFunction();
}

outerFunction();

// 10. The this Keyword
// The value of this depends on how a function is called. In the global context, this refers to the global object (window in browsers).

console.log(this); // Refers to the global object

// In object methods, this refers to the object the method belongs to:

const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, I am ${this.name}`);
  }
};

person.greet(); // Output: Hello, I am Alice

// In arrow functions, this is lexically bound and inherits this from the surrounding context.

const person1 = {
  name: 'Bob',
  greet: () => {
    console.log(`Hello, I am ${this.name}`);
  }
};

person1.greet(); // Output: Hello, I am undefined (or global object in browsers)

// 11. Conclusion
// Mastering functions and scope in JavaScript is crucial for writing efficient, reusable, and maintainable code. 
// Functions form the building blocks of your application logic, and understanding scope ensures that your variables and operations behave as expected.

// Key takeaways:

// Functions can be declared in multiple ways.
// Closures and higher-order functions allow for more advanced patterns.
// Scope determines the accessibility of variables.
// Hoisting affects how variables and functions behave.
// The this keyword is context-sensitive and behaves differently in regular and arrow functions.
// Understanding these concepts will make you a more effective JavaScript developer.
