// Master Class on Asynchronous JavaScript
// Asynchronous JavaScript allows programs to handle tasks that may take time (like network requests, file reading, or waiting for user input) without freezing the browser or blocking the execution of other code. This master class will cover the fundamentals of asynchronous programming, key concepts like callbacks, promises, and async/await, and practical use cases.

// 1. Introduction to Synchronous vs Asynchronous Code
// Synchronous code is executed line by line. Each line must finish before the next one begins.
// Asynchronous code allows other operations to continue running while waiting for time-consuming tasks to complete.
// Example:

console.log("Start");
setTimeout(() => console.log("Timeout"), 1000);
console.log("End");

// Output:
// sql
// Copy code
// Start
// End
// Timeout

// In the above code, the setTimeout function doesn’t block the code execution, allowing "End" to be logged before "Timeout".

// 2. Callbacks: The Foundation of Asynchronous JavaScript
// What is a Callback?
// A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some action.

// Example:
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((message) => {
  console.log(message); // Output: Data received
});

// Challenges with Callbacks
// Callback Hell: Nesting multiple callbacks leads to difficult-to-read code.
// Example of callback hell:

firstTask(() => {
  secondTask(() => {
    thirdTask(() => {
      console.log("All tasks completed");
    });
  });
});

// 3. Promises: A Modern Approach to Handle Async Code
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. A promise can be in one of three states:

// Pending: The async operation is not yet complete.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
// Creating a Promise:
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulating success or failure
  setTimeout(() => {
    if (success) {
      resolve("Operation Successful");
    } else {
      reject("Operation Failed");
    }
  }, 1000);
});

myPromise
  .then((message) => console.log(message)) // Handle success
  .catch((error) => console.error(error)); // Handle failure

// Chaining Promises
// Promises can be chained to execute sequential async tasks.

firstTask()
  .then((result) => secondTask(result))
  .then((result) => thirdTask(result))
  .catch((error) => console.error(error));

// 4. Async/Await: The Elegant Way to Handle Async Code
// Async/Await is syntactic sugar built on top of Promises. It allows asynchronous code to be written in a synchronous style, improving readability.

// Key Concepts:
// async function: Declares that a function returns a promise.
// await: Pauses the execution of an async function until a promise is resolved or rejected.
// Example:
async function fetchData() {
  try {
    let result = await firstTask();
    console.log(result);

    result = await secondTask();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
fetchData();

// In this example, await waits for each promise to resolve before moving on to the next line, making the code more readable than chaining .then().

// Error Handling with Async/Await
// Errors in async functions can be caught using try...catch.

async function getData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 5. Common Asynchronous Patterns
// a. Parallel Execution:
// Multiple tasks can be executed in parallel using Promise.all(), where all promises must resolve before proceeding.

async function runParallel() {
  const [result1, result2] = await Promise.all([firstTask(), secondTask()]);
  console.log(result1, result2);
}

// b. Race Conditions:
// When you need only the first resolved promise out of several, use Promise.race().

async function runRace() {
  const result = await Promise.race([firstTask(), secondTask()]);
  console.log(result); // Returns the result of whichever task finishes first
}

// 6. Practical Examples of Asynchronous JavaScript
// a. Fetching Data from an API
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchUsers();

// b. File Upload with Progress
function uploadFile(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.example.com/upload");

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve("File uploaded successfully");
      } else {
        reject("Upload failed");
      }
    };

    xhr.onerror = () => reject("Network error");

    xhr.upload.onprogress = (event) => {
      console.log(`Uploaded ${event.loaded} of ${event.total} bytes`);
    };

    xhr.send(file);
  });
}

// 7. Advanced Topics in Asynchronous JavaScript
// a. Event Loop
// The event loop allows JavaScript to handle asynchronous operations. It constantly checks the call stack to see if it’s empty, and if so, it processes the next message in the task queue (e.g., callback functions, promises).

// b. Microtasks vs Macrotasks
// Microtasks: Processed immediately after the currently executing script (e.g., promise callbacks).
// Macrotasks: Executed after the current script and microtasks (e.g., setTimeout, I/O operations).
// Example:
console.log("Start");

setTimeout(() => console.log("Macrotask"), 0);

Promise.resolve().then(() => console.log("Microtask"));

console.log("End");

// Output:
// sql
// Copy code
// Start
// End
// Microtask
// Macrotask

// 8. Conclusion and Best Practices
// Always handle errors when working with asynchronous code. Use .catch() with promises or try...catch with async/await.
// Avoid callback hell by transitioning to promises or async/await.
// Use Promise.all() for parallel operations and Promise.race() to get the fastest result.
// Understand the event loop to better manage how async tasks are executed in JavaScript.
// By mastering these asynchronous patterns, you will be able to write cleaner, more efficient, and more readable JavaScript code, especially when dealing with I/O operations, network requests, and UI updates.

// Let me know if you'd like to dive deeper into any specific part of this asynchronous JavaScript master class!
