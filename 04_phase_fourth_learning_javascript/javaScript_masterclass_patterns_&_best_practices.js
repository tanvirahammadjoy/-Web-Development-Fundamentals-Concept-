// Master Class on JavaScript Patterns & Best Practices
// Introduction
// JavaScript patterns and best practices are essential for writing maintainable, scalable, and efficient code. This master class will cover a range of patterns that can help improve your JavaScript code structure, as well as some industry-standard best practices.

// *************************************** 1. JavaScript Design Patterns ****************************************** //
// Design patterns are typical solutions to common problems in software design. They are like templates that can be applied to various real-world programming situations.
// 1.1. Module Pattern
// The module pattern is one of the most widely used design patterns in JavaScript. It helps in encapsulating private and public parts of an object and protects the code from unwanted external access.

// Example:
const Module = (function () {
  let privateVar = "I am private";

  function privateMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

Module.publicMethod(); // I am private

// Why use it?

// Keeps your code modular and avoids polluting the global namespace.
// Useful for organizing code in Single Page Applications (SPAs).

// 1.2. Revealing Module Pattern
// This is an extension of the module pattern, where all private functions and variables are kept inside the closure, but they are revealed in an object literal returned at the end.

// Example:
const RevealingModule = (function () {
  let privateVar = "I am private";

  function privateMethod() {
    console.log(privateVar);
  }

  function publicMethod() {
    privateMethod();
  }

  return {
    showPublicMethod: publicMethod,
  };
})();

RevealingModule.showPublicMethod(); // I am private

// Why use it?

// Clean and simple syntax.
// Clear mapping between public and private methods.

// 1.3. Singleton Pattern
// This pattern restricts the instantiation of a class to a single instance. It's useful when you need to ensure a class has only one instance and provide a global access point to that instance.

// Example:
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true

// Why use it?

// Centralized state management (like in Redux stores).
// Managing a single database connection instance.

// 1.4. Factory Pattern
// The factory pattern is a creational pattern used to create objects without exposing the instantiation logic to the client. It allows creating objects based on certain conditions or input.

// Example:
function Car(type) {
  this.type = type;
}

function Bike(type) {
  this.type = type;
}

function VehicleFactory() {
  this.createVehicle = function (type) {
    if (type === "car") {
      return new Car("Car");
    } else if (type === "bike") {
      return new Bike("Bike");
    }
  };
}

const factory = new VehicleFactory();
const myCar = factory.createVehicle("car");
console.log(myCar.type); // Car

// Why use it?

// Simplifies object creation logic.
// Useful in cases like React where you want to create different components based on user input.

// 1.5. Observer Pattern
// The observer pattern is useful for notifying one or more objects when the state of another object changes. In JavaScript, it is commonly used in events (i.e., pub/sub).

// Example:
function EventObserver() {
  this.observers = [];

  this.subscribe = function (fn) {
    this.observers.push(fn);
  };

  this.unsubscribe = function (fnToRemove) {
    this.observers = this.observers.filter((fn) => fn !== fnToRemove);
  };

  this.broadcast = function (data) {
    this.observers.forEach((fn) => fn(data));
  };
}

const observer = new EventObserver();
observer.subscribe((msg) => console.log("Observer 1: " + msg));
observer.subscribe((msg) => console.log("Observer 2: " + msg));

observer.broadcast("Hello, Observers!");
// Observer 1: Hello, Observers!
// Observer 2: Hello, Observers!

// Why use it?

// Ideal for event-driven programming.
// Useful for handling asynchronous operations and event subscriptions.

// ********************************** 2. JavaScript Best Practices ***************************************** //
// 2.1. Code Organization
// Separation of concerns: Use separate files for different functionalities (e.g., one for DOM manipulation, one for business logic).
// Modular code: Write small, reusable modules and follow the Single Responsibility Principle.
// Naming conventions: Use meaningful and consistent names (e.g., camelCase for variables and functions, PascalCase for classes).

// 2.2. Use Strict Mode
// Strict mode makes debugging easier by throwing errors for bad practices that would otherwise fail silently.

// Example:
("use strict");
function doSomething() {
  // Uncaught ReferenceError: x is not defined
  x = 10;
}
doSomething();

// 2.3. Avoid Global Variables
// Global variables can be accessed from anywhere, which can cause issues when different parts of your code manipulate the same data unintentionally.

// Best Practice: Encapsulate your code in functions, modules, or immediately invoked function expressions (IIFE).

// Example:
(function () {
  const myVar = "I am scoped to this function";
})();
console.log(myVar); // ReferenceError: myVar is not defined

// 2.4. Avoid Using var
// Use let and const instead of var to avoid scope-related issues and to write cleaner code. const should be your default choice unless you need to reassign the variable.

// Example:
const MAX_USERS = 100;
let currentUsers = 10;
currentUsers++;

// 2.5. Use Arrow Functions
// Arrow functions have a more concise syntax and also capture the this value from their surrounding context.

// Example:
const numbers = [1, 2, 3];
const squares = numbers.map(n => n * n);
console.log(squares); // [1, 4, 9]

// 2.6. Destructuring
// Destructuring helps in extracting values from arrays and objects in a clean and readable way.

// Example:
const user = { name: 'John', age: 30 };
const { name, age } = user;
console.log(name); // John

// 2.7. Use Template Literals
// Template literals are useful for creating strings that require interpolation or multiline formatting.

// Example:
const name1 = 'John';
const greeting = `Hello, ${name1}!`;
console.log(greeting); // Hello, John!

// 2.8. Error Handling
// Use try...catch to handle errors gracefully.
// Always return meaningful error messages in functions.

// Example:
try {
    // some code
} catch (error) {
    console.error('Something went wrong:', error.message);
}

// 2.9. Optimize Loops and DOM Access
// Minimize DOM manipulations by caching references.
// Avoid expensive operations like reflows and repaints in the middle of loops.

// Example:
// Bad
for (let i = 0; i < items.length; i++) {
    document.getElementById('container').appendChild(items[i]);
}

// Good
const container = document.getElementById('container');
for (let i = 0; i < items.length; i++) {
    container.appendChild(items[i]);
}

// 2.10. Avoid Memory Leaks
// Use WeakMap and WeakSet for storing objects to avoid memory leaks caused by unintentional object retention.

// Conclusion
// By following design patterns and best practices, you can write JavaScript that is both efficient and easy to maintain.
// This master class introduced you to some fundamental patterns and essential best practices that will make your code 
// more organized and scalable. Practice these patterns regularly in real-world projects to get the most benefit!
