// Advanced JavaScript Concepts - Master Class
// This master class covers advanced JavaScript concepts that every developer needs to master. These concepts will deepen your understanding of JavaScript and enhance your ability to write more efficient, maintainable, and scalable applications.

// 1. Closures and Lexical Scope
// Lexical Scope:
// In JavaScript, a function's access to variables is determined by where it is defined, not where it is called.
// Lexical Scope means a function remembers where it was declared and has access to the variables from that scope, even when invoked outside its immediate scope.

function outer() {
  const outerVar = "I am from outer function";

  function inner() {
    console.log(outerVar); // Accessing outerVar due to lexical scope
  }

  return inner;
}

const innerFunc = outer();
innerFunc(); // Outputs: I am from outer function

// Closures:
// A closure is created when an inner function retains access to the outer function's variables, even after the outer function has returned.
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

// 2. Promises and Asynchronous JavaScript
// Promises:
// Promise represents an operation that hasn't completed yet but is expected to in the future.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 1000);
});

promise.then((result) => console.log(result)); // After 1 second, logs: Success

// Async/Await:
// Async/Await is syntactic sugar built on promises. It allows you to write asynchronous code that looks like synchronous code.
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// 3. Event Loop and Concurrency Model
// JavaScript is Single-threaded:
// JavaScript executes code in a single thread, meaning one thing happens at a time. However, it can handle asynchronous operations using the Event Loop.
// Call Stack:
// The Call Stack is where functions are executed. When a function is called, it is added to the top of the stack, and when it finishes, it is removed.
// Web APIs & Callback Queue:
// Web APIs handle asynchronous operations like setTimeout or network requests, and the callback queue holds tasks to be executed once the call stack is clear.
console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

console.log("End");

// Output: Start -> End -> Timer callback

// Although setTimeout is set to 0, it's handled by the Web APIs, and the callback is placed in the queue. It runs after the main code execution is complete.

// 4. Object-Oriented Programming (OOP) in JavaScript
// Constructor Functions:
// JavaScript allows creating objects using constructor functions.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice", 30);
person1.sayHello(); // Output: Hello, my name is Alice
// ES6 Classes:
// ES6 introduced class syntax as a more intuitive way to work with OOP in JavaScript.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak(); // Output: Rex barks

// 5. Functional Programming in JavaScript
// Higher-Order Functions:
// A higher-order function is a function that either takes one or more functions as arguments or returns a function.
function greet(name) {
  return function (greeting) {
    console.log(`${greeting}, ${name}`);
  };
}

const greetJohn = greet("John");
greetJohn("Hello"); // Output: Hello, John

// Map, Filter, and Reduce:
// These are essential methods for transforming arrays in a functional way.

const numbers = [1, 2, 3, 4, 5];

// Map: Create a new array with each element doubled
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter: Create a new array with elements greater than 3
const filtered = numbers.filter((num) => num > 3);
console.log(filtered); // [4, 5]

// Reduce: Accumulate all elements into a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// 6. Module Systems (CommonJS, ES6 Modules)
// CommonJS (Node.js):
// In Node.js, modules are imported using require and exported using module.exports.

// file1.js
module.exports = function () {
  console.log("Hello from file1");
};

// main.js
const sayHello = require("./file1");
sayHello();

// ES6 Modules:
// ES6 modules use import and export syntax for better support in browsers.

// file1.js
export const greet = () => console.log("Hello from file1");

// main.js
import { greet } from "./file1.js";
greet();

// 7. Prototypes and Prototypal Inheritance
// Prototypes:
// Every JavaScript object has a prototype, which is another object that it inherits methods and properties from.

function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.move = function () {
  console.log(`${this.type} is moving`);
};

const car = new Vehicle("Car");
car.move(); // Output: Car is moving

// Prototypal Inheritance:
// Objects can inherit from other objects using prototypes, allowing for shared behavior without duplicating code.
const animal = {
  speak() {
    console.log("Animal speaks");
  },
};

const dog1 = Object.create(animal);
dog1.speak(); // Output: Animal speaks

// 8. Memory Management and Garbage Collection
// Memory Life Cycle:
// Allocation: Memory is allocated when creating variables, objects, or data structures.
// Usage: The allocated memory is used.
// Release: When memory is no longer needed, it is released for garbage collection.
// Garbage Collection:
// JavaScript has automatic garbage collection based on the mark-and-sweep algorithm, which finds objects no longer in use and reclaims memory.

// 9. Performance Optimization Tips
// Debouncing and Throttling: Techniques to control the rate at which a function is executed.

// Throttling example
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

// Lazy Loading: Load assets or data only when needed to improve initial load time.

// 10. JavaScript Design Patterns
// Singleton Pattern:
// Ensures a class has only one instance and provides a global point of access to it.

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

// Observer Pattern:
// Defines a one-to-many relationship between objects, where one object (subject) notifies others (observers) of state changes.

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

// Conclusion
// Mastering these advanced JavaScript concepts will give you the confidence to tackle more complex problems and build robust applications.
