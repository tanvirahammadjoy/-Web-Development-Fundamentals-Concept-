// JavaScript Closures Masterclass
// Closures are an essential and powerful concept in JavaScript that can be tricky to understand for beginners but become a natural part of advanced JavaScript coding once mastered. This masterclass will guide you through the fundamentals and practical applications of closures, helping you understand not just how they work, but why they are useful.

// Table of Contents:
// What is a Closure?
// Understanding Lexical Scope
// Practical Example of Closures
// Use Cases of Closures
// Private Variables and Data Encapsulation
// Functions Returning Functions
// Event Handlers
// Currying
// Common Pitfalls with Closures
// Advanced Closure Patterns

// 1. What is a Closure?
// Definition:
// A closure is a combination of a function and the lexical environment in which that function was declared. In simpler terms, it means that the function "remembers" the variables from its surrounding context (scope) even after that context has gone.

// A basic closure looks like this:

function outer() {
  let outerVariable = "I am from outer";

  function inner() {
    console.log(outerVariable); // Closure allows access to outerVariable
  }

  return inner;
}

const innerFunc = outer();
innerFunc(); // Output: 'I am from outer'

// In this example, inner is a closure. It captures the environment of the outer function and retains access to outerVariable even after outer has finished execution.

// 2. Understanding Lexical Scope
// To understand closures, you first need to understand lexical scope. In JavaScript, how variables are scoped depends on where they are declared in the source code.

function example() {
  let scope = "local scope"; // Lexical environment inside example()
  console.log(scope);
}

console.log(scope); // Error: scope is not defined outside the function

// In a closure, a function can access variables defined in its outer scopes because of how JavaScript handles lexical scoping.

// 3. Practical Example of Closures
// Here's a simple closure in action:

function counter() {
  let count = 0;

  return function increment() {
    count++;
    console.log(count);
  };
}

const myCounter = counter();

myCounter(); // Output: 1
myCounter(); // Output: 2
myCounter(); // Output: 3

// In this example:

// The increment function is returned from the counter function.
// increment forms a closure with the count variable from its outer scope, preserving it across multiple calls.
// 4. Use Cases of Closures
// 4.1 Private Variables and Data Encapsulation
// One of the most common uses of closures is to create private variables. In JavaScript, closures allow you to encapsulate data in such a way that it can't be accessed from the outside.

function createPerson(name) {
  let privateName = name;

  return {
    getName() {
      return privateName;
    },
    setName(newName) {
      privateName = newName;
    },
  };
}

const person = createPerson("Alice");
console.log(person.getName()); // Output: Alice
person.setName("Bob");
console.log(person.getName()); // Output: Bob

// Here, privateName is effectively private because it's only accessible within the getName and setName methods.

// 4.2 Functions Returning Functions
// Closures make it possible to return functions that "remember" the scope in which they were created:

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

// In this case, the multiplier function returns a function that multiplies numbers by the factor provided when multiplier was initially called.

// 4.3 Event Handlers
// Closures are commonly used in event handlers where the function needs to remember some state:

function setupClickHandler(buttonId) {
  let count = 0;

  document.getElementById(buttonId).addEventListener("click", function () {
    count++;
    console.log(`Button clicked ${count} times`);
  });
}

setupClickHandler("myButton");

// In this example, the click handler forms a closure around the count variable, allowing it to keep track of the number of clicks.

// 4.4 Currying
// Currying is a functional programming technique where a function is transformed into a series of functions, each with one argument.

function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(10)); // Output: 15

// In this example, add returns a function that takes another argument and adds it to the value a from the outer scope.

// 5. Common Pitfalls with Closures
// 5.1 Closures and Loops
// When using closures inside loops, you may encounter unexpected behavior due to the way JavaScript handles scope inside loops.

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Outputs: 4, 4, 4 (not 1, 2, 3)
  }, 1000);
}

// In this case, the variable i is shared by all closures, so when the setTimeout functions are called, they all reference the same i, which has been incremented to 4.

// Solution: Use let to create block-scoped variables:

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Outputs: 1, 2, 3
  }, 1000);
}

// 6. Advanced Closure Patterns
// 6.1 Memoization
// Memoization is an optimization technique where you store the results of expensive function calls and reuse them if the same inputs occur again.

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const factorial = memoize(function (n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // Output: 120
console.log(factorial(5)); // Output: 120 (from cache)

// 6.2 Partial Application
// Closures enable partial application, where you fix some arguments of a function and get a new function:

function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

const add = (a, b, c) => a + b + c;
const add5And10 = partial(add, 5, 10);

console.log(add5And10(3)); // Output: 18

// Conclusion
// Closures are a fundamental part of JavaScript, and mastering them will give you a better understanding of how functions work and how you can harness their power for encapsulation, state management, and optimization. Closures play a significant role in more advanced JavaScript concepts like functional programming, event-driven programming, and object-oriented patterns.

// By applying closures, you can write more concise, flexible, and powerful JavaScript code!
