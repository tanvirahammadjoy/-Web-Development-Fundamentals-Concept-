// Master Class on JavaScript Error Handling & Debugging
// Overview
// Error handling and debugging are essential skills for any JavaScript developer. It’s not just about fixing bugs, but also about writing code that anticipates and handles unexpected behavior gracefully. In this master class, we will cover the fundamentals of error handling in JavaScript, techniques for debugging, and best practices to improve code quality and maintainability.

// 1. JavaScript Errors Overview
// Errors in JavaScript are classified into different types. Understanding these types helps you know how and where errors may occur in your code.

// Error Types:

// SyntaxError: Occurs when there is a mistake in the syntax, such as missing brackets or keywords.
// ReferenceError: Occurs when you reference a variable that does not exist.
// TypeError: Happens when you try to perform an operation on a variable of an incorrect type, such as calling a non-function as a function.
// RangeError: Thrown when a numeric variable or parameter is outside its valid range, such as invalid array length.
// EvalError: Related to the use of the eval() function.
// URIError: Occurs when encodeURI() or decodeURI() is used incorrectly.
// Example:

// SyntaxError
console.log("Hello World"); // Missing closing parenthesis

// ReferenceError
console.log(nonExistentVar); // Variable does not exist

// TypeError
let num = 42;
num(); // You can't call a number like a function

// 2. Error Handling using try, catch, finally, and throw
// JavaScript provides a powerful mechanism for handling runtime errors using the try...catch block.

// Syntax:
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
} finally {
  // This block will run regardless of an error being thrown
}

// try: The code that might produce an error.
// catch: The block that runs if an error is thrown. The error object is passed in.
// finally: This block runs whether an error occurred or not, often used for cleanup tasks.
// Example:
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    console.log(a / b);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Division attempt finished.");
  }
}

divide(10, 0);

// throw: You can throw your own errors using throw. This is useful when you want to handle specific situations.

// Example:

function getUserData(user) {
  if (!user) {
    throw new Error("User data not provided!");
  }
  console.log(user.name);
}

try {
  getUserData(null); // Triggers the error
} catch (error) {
  console.error("Error:", error.message);
}

// 3. Error Object Properties
// When an error occurs, an Error object is created, which contains useful properties:

// name: The type of error (e.g., TypeError, ReferenceError).
// message: A human-readable description of the error.
// stack: A stack trace showing where the error occurred.
// Example:

try {
  undefinedFunction(); // Throws an error
} catch (error) {
  console.log("Error Name:", error.name); // ReferenceError
  console.log("Error Message:", error.message);
  console.log("Error Stack:", error.stack);
}

// 4. Custom Error Classes
// You can create custom error classes by extending the built-in Error class. This is useful when dealing with domain-specific errors or providing more context for an error.

// Example:

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("User name is required.");
  }
}

try {
  validateUser({}); // Missing name
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error:", error.message);
  } else {
    console.error("Other Error:", error);
  }
}

// 5. Debugging in JavaScript
// 5.1. Using the Browser Developer Tools
// All modern browsers come with developer tools that are indispensable for debugging JavaScript.

// Key Features:

// Console: You can log variables, messages, or errors using console.log(), console.error(), console.warn(), and other console methods.
// Breakpoints: You can set breakpoints to pause execution at a specific line of code.
// Call Stack: Helps you trace the flow of function calls leading to the current point of execution.
// Watch Variables: Allows you to track changes to specific variables during execution.
// Network Tab: Useful for inspecting API calls and responses.

// Example Usage:
let x = 10;
console.log("Initial value:", x);
x += 5;
debugger; // Pauses the code here if dev tools are open
console.log("Updated value:", x);

// 5.2. console Methods
// console is an essential debugging tool that provides various methods to log information during code execution:

// console.log(): Log regular output.
// console.error(): Log error messages.
// console.warn(): Log warning messages.
// console.table(): Display an array or object in a tabular format.
// console.time() / console.timeEnd(): Measure the time taken by a block of code.

// Example:
console.log("Normal log");
console.error("This is an error!");
console.warn("Warning message");
console.table([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
]);
console.time("Loop time");
for (let i = 0; i < 1000; i++) {}
console.timeEnd("Loop time");

// 5.3. Using Source Maps
// Source maps map your minified or transpiled code (e.g., from TypeScript or Babel) back to the original source code. When an error occurs, the browser can show the correct line in the original source file, making debugging easier.

// To enable source maps, ensure your build tool (e.g., Webpack, Babel) is configured to generate them.

// json
// {
//   "devtool": "source-map"
// }

// 5.4. Step Through Code
// You can use the debugging tools to step through code line-by-line:

// Step Into: Dive into a function being called.
// Step Over: Move to the next line without entering the current function.
// Step Out: Exit the current function and return to the calling context.

// 6. Best Practices for Error Handling
// Fail Fast: Validate inputs early and throw meaningful errors when conditions aren't met.
// Graceful Degradation: Catch errors in areas where failure is expected and ensure the rest of the application can continue working.
// Use finally for Cleanup: If you need to clean up resources like timers, connections, or file handles, use the finally block.
// Custom Error Messages: Provide meaningful error messages that help in diagnosing the problem quickly.
// Log Errors: Ensure errors are logged (locally in development, and to a logging service in production).
// Catch All Errors Globally: Use window.onerror or global handlers for uncaught exceptions in web apps.

// 7. Global Error Handling
// In the browser, you can catch any unhandled errors using the window.onerror event:

window.onerror = function (message, source, lineno, colno, error) {
  console.error(`Error: ${message} at ${source}:${lineno}:${colno}`);
  // Optionally log the error to a server or service
};

// 8. Conclusion
// By mastering JavaScript’s error handling mechanisms and becoming proficient in debugging techniques, you can significantly improve the reliability, maintainability, and user experience of your applications. Being proactive about catching errors early, logging them, and using debugging tools effectively is key to becoming a confident JavaScript developer.

// Would you like additional exercises or examples to practice error handling and debugging?
