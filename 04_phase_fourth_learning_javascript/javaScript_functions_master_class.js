// Master Class on JavaScript Functions
// JavaScript functions are foundational to any application development, as they help you encapsulate logic, create reusable code, and handle various operations efficiently. Let's explore them in depth:

// 1. What is a Function?
// A function is a reusable block of code designed to perform a specific task. Functions allow developers to organize their code into manageable, modular pieces, leading to more readable, maintainable, and reusable code.

// Syntax:
function functionName(parameters) {
  // Code to be executed
}

// Example:
function greet(name) {
  console.log("Hello, " + name + "!");
}

// greet("Alice"); // Output: Hello, Alice!

// 2. Function Expressions
// A function expression is a way to define a function using a variable. It doesn’t require a function name and can be assigned to a variable.

// Syntax:
const variableName = function (parameters) {
  // Code to be executed
};

// Example:
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5

// 3. Arrow Functions (ES6)
// Arrow functions provide a more concise way to write function expressions and do not bind their own this. They are often used in cases where a shorter syntax is preferred or when working with functional operations like map, filter, or reduce.

// Syntax:
const functionName = (parameters) => {
  // Code to be executed
};

// Example:
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

// If there is only one parameter, you can omit the parentheses:

const square = (num) => num * num;
console.log(square(5)); // Output: 25

// 4. Function Parameters and Arguments
// Parameters:
// The placeholders for values that you can pass to a function when defining it.

// Arguments:
// The actual values that are passed to the function when it is called.

// Example:
function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 5)); // Output: 5

// 5. Default Parameters (ES6)
// With default parameters, you can set default values for function arguments in case no value is passed when the function is invoked.

// Syntax:
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // Code to be executed
}

// Example:
function greetUser(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetUser(); // Output: Hello, Guest!
greetUser("Alice"); // Output: Hello, Alice!

// 6. Rest Parameters (ES6)
// The rest parameter syntax allows you to handle an indefinite number of arguments as an array.

// Syntax:
function functionName(...rest) {
  // Code to handle 'rest' array
}

// Example:
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// 7. Higher-Order Functions
// Functions that take other functions as arguments or return a function are called higher-order functions. They are essential in functional programming.

// Example:
function higherOrder(func) {
  return func(5);
}

function double(x) {
  return x * 2;
}

console.log(higherOrder(double)); // Output: 10

// 8. Anonymous Functions
// Functions without a name are called anonymous functions. They are often used as arguments to higher-order functions.

// Example:
setTimeout(function () {
  console.log("This runs after 2 seconds.");
}, 2000);

// With Arrow Functions:
setTimeout(() => {
  console.log("This runs after 2 seconds.");
}, 2000);

// 9. IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that is executed immediately after its definition. It is often used to avoid polluting the global scope.

// Syntax:
(function () {
  // Code to be executed
})();

// Example:
(function () {
  console.log("This is an IIFE");
})(); // Output: This is an IIFE

// 10. Closures
// A closure occurs when a function "remembers" its lexical scope even after the outer function has finished execution. It allows inner functions to access variables from an outer function even after the outer function is done.

// Example:
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2

// 11. Callbacks
// A callback function is a function passed as an argument to another function. The callback is executed inside the outer function to complete some kind of routine or action.

// Example:
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

function processData() {
  console.log("Data processed");
}

fetchData(processData);
// Output:
// Data fetched
// Data processed

// 12. Function Scope and Hoisting
// Functions in JavaScript have function scope, meaning variables declared inside a function are only accessible within that function. Functions declared using the function keyword are hoisted, meaning they can be called before they are defined.

// Example of Hoisting:
sayHello();

function sayHello() {
  console.log("Hello!");
}

// Even though the function call comes before the function declaration, it still works due to hoisting.

// 13. Recursion
// A recursive function is one that calls itself to solve smaller instances of a problem until a base condition is met.

// Example:
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// 14. Function Currying
// Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.

// Example:
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3)); // Output: 6

// 15. Pure Functions
// A pure function always returns the same output for the same input and does not have side effects (i.e., does not modify external state).

// Example:
function pureAdd(a, b) {
  return a + b;
}

console.log(pureAdd(2, 3)); // Output: 5

// Conclusion
// Understanding functions deeply is essential in JavaScript, as they are the building blocks of any application. Mastering functions — including their modern ES6+ features, such as arrow functions, default parameters, and closures — will help you write cleaner, more modular, and more efficient code.
