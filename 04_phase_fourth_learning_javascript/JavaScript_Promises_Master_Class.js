// Master Class on JavaScript Promises
// Introduction to Promises
// A Promise in JavaScript represents a value that might be available now, later, or never. It's an abstraction over asynchronous code, offering a cleaner and more manageable way to handle asynchronous operations like HTTP requests, file reading, or any long-running tasks.

// Why Use Promises?
// Before promises, developers relied on callbacks to manage asynchronous code. But callbacks can lead to issues like callback hell (deeply nested functions) and lack proper error handling.

// Promises offer:

// A cleaner syntax
// Built-in error handling
// Chainable operations
// Structure of a Promise
// A promise is an object that returns a value that can be in one of three states:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Operation completed successfully.
// Rejected: Operation failed.

const promiseOne = new Promise((resolve, reject) => {
    // asynchronous operation
});

// Basic Example of a Promise
let promiseTwo = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed!");
    }
});

promiseTwo
    .then(result => {
        console.log(result); // "Operation was successful!"
    })
    .catch(error => {
        console.log(error); // "Operation failed!"
    });

// Promise Lifecycle
// Pending: When the promise is created and the asynchronous operation has started.
// Fulfilled: The promise was completed successfully.
// Rejected: The promise failed to complete.

// How Promises Work
// resolve() and reject()
// resolve(): When the asynchronous operation is successful.
// reject(): When the asynchronous operation fails.

// then() and catch()
// then(): Called when the promise is resolved (fulfilled).
// catch(): Called when the promise is rejected (failed).
// Example with setTimeout()

let asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received after 2 seconds");
    }, 2000);
});

asyncOperation
    .then(response => {
        console.log(response); // "Data received after 2 seconds"
    })
    .catch(error => {
        console.error(error);
    });

// Promise Chaining
// You can chain multiple then() calls to run a sequence of asynchronous operations.

let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
});

firstPromise
    .then(value => {
        console.log(value); // 10
        return value * 2;
    })
    .then(value => {
        console.log(value); // 20
        return value * 3;
    })
    .then(value => {
        console.log(value); // 60
    });

// Error Handling in Chaining
// If any then() in the chain throws an error or a promise is rejected, control jumps to the catch() block.

let faultyPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error occurred"), 1000);
});

faultyPromise
    .then(value => {
        console.log(value); // This won't run
        return value * 2;
    })
    .catch(error => {
        console.error(error); // "Error occurred"
    });

// Promise.all()
// When you want to wait for multiple promises to complete before proceeding, use Promise.all(). It takes an array of promises and returns a single promise that resolves when all promises resolve, or rejects if any promise fails.

let p7 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
let p8 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));

Promise.all([p7, p8])
    .then(results => {
        console.log(results); // ['Promise 1 resolved', 'Promise 2 resolved']
    })
    .catch(error => {
        console.error(error);
    });

// Promise.race()
// Promise.race() returns the result of the first promise that settles (whether it’s fulfilled or rejected).

let p5 = new Promise((resolve) => setTimeout(() => resolve('Resolved first'), 1000));
let p6 = new Promise((resolve) => setTimeout(() => resolve('Resolved second'), 2000));

Promise.race([p5, p6])
    .then(result => {
        console.log(result); // "Resolved first"
    });

// Promise.allSettled()
// Promise.allSettled() waits for all promises to settle (either fulfilled or rejected) and returns an array of objects describing the outcome of each promise.

let p1 = new Promise((resolve) => setTimeout(() => resolve('Success 1'), 1000));
let p2 = new Promise((resolve, reject) => setTimeout(() => reject('Error 2'), 2000));

Promise.allSettled([p1, p2])
    .then(results => {
        console.log(results);
        // [
        //  {status: 'fulfilled', value: 'Success 1'},
        //  {status: 'rejected', reason: 'Error 2'}
        // ]
    });

// Promise.any()
// Promise.any() resolves as soon as any of the promises in the array is fulfilled, ignoring rejections. If all promises are rejected, it throws an aggregate error.

let p3 = new Promise((resolve, reject) => setTimeout(() => reject('Error 1'), 1000));
let p4 = new Promise((resolve) => setTimeout(() => resolve('Success 2'), 2000));

Promise.any([p3, p4])
    .then(result => {
        console.log(result); // "Success 2"
    })
    .catch(error => {
        console.error(error);
    });

// Async/Await (Built on Promises)
// async/await is syntactic sugar over Promises, making asynchronous code easier to read and write.

// Example with async/await
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data received'), 1000);
    });
}

async function asyncFunc() {
    try {
        let data = await fetchData();
        console.log(data); // "Data received"
    } catch (error) {
        console.error(error);
    }
}

asyncFunc();

// Common Mistakes with Promises
// Not returning promises properly in then() leads to unexpected behavior in chaining.

// Incorrect
firstPromise.then(value => {
    someAsyncFunction(value); // Doesn't return the promise
});

// Correct
firstPromise.then(value => {
    return someAsyncFunction(value); // Returns the promise
});

// Forgetting error handling: Always have a catch() to handle rejections.
someAsyncFunction()
    .then(result => console.log(result))
    .catch(error => console.error(error)); // Always catch errors

// Conclusion
// JavaScript promises provide a powerful way to handle asynchronous operations. Once you understand how to use them, you’ll be able to manage complex asynchronous tasks like data fetching, file processing, and more, with ease.

// Tell me about more about the return key word what is meaning of that if we have one .than do we don’t need return?
// The return keyword in JavaScript is used inside functions to send a value back to the place where the function was called. It also terminates the function execution once encountered, meaning any code after the return statement will not be executed.

// Meaning of return
// Purpose: The return keyword gives a value back to the caller of the function.
// Default Behavior: If a function does not have a return statement, it implicitly returns undefined.
// Example:
function add(a, b) {
    return a + b; // Returns the sum of a and b
}

let result = add(3, 4);
console.log(result); // Outputs: 7

// Here, the return a + b; sends the result of the addition back to the calling code. Without the return, the function would execute, but the result would not be sent back, so you'd get undefined.

// What if you have .then() without return?
// When using .then() in promise chains, whether or not you need to return depends on what you're trying to achieve. Let’s break down two scenarios.

// Scenario 1: Not returning a promise in .then()
// If you don’t return anything from a .then() handler, the next .then() in the chain receives undefined.

// Example:
let promise3 = new Promise((resolve) => resolve(10));

promise
    .then(value => {
        console.log(value); // 10
        // No return here
    })
    .then(value => {
        console.log(value); // undefined because nothing was returned
    });

// Scenario 2: Returning a promise in .then()
// If you return a value or another promise inside .then(), it allows for chaining of values or operations.

// Example:
let promise4 = new Promise((resolve) => resolve(10));

promise4
    .then(value => {
        console.log(value); // 10
        return value * 2; // Returning value
    })
    .then(value => {
        console.log(value); // 20 because the previous .then returned a value
    });

// Here, returning value * 2 ensures that the next .then() gets the modified value.

// Why return is Important in Promise Chaining
// Without return in a .then(), you lose the ability to:

// Pass the result to the next .then().
// Maintain the chain of promises when dealing with asynchronous functions.
// Example without return:

let promise5 = new Promise((resolve) => resolve(10));

promise5
    .then(value => {
        console.log(value); // 10
        someAsyncOperation(); // Missing return
    })
    .then(() => {
        console.log("This runs immediately, not waiting for someAsyncOperation");
    });

// Example with return:

let promise6 = new Promise((resolve) => resolve(10));

promise6
    .then(value => {
        console.log(value); // 10
        return someAsyncOperation(); // Return the promise from async operation
    })
    .then(() => {
        console.log("This waits for someAsyncOperation to finish.");
    });

// Conclusion
// return inside a function sends back a value and stops further execution of the function.
// In promise chains, always return when you need the next .then() to receive the result of an operation, especially with asynchronous operations.
// Without return, the value passed to the next .then() will be undefined, which may lead to unintended behavior.

// can you tell me the promise behind the scenes in depth?

// Behind the Scenes of JavaScript Promises
// At their core, JavaScript Promises provide a way to handle asynchronous operations in a cleaner, more structured way than traditional callbacks. To understand what’s happening behind the scenes, we need to dig into how the JavaScript runtime manages asynchronous code, the event loop, and the mechanics of how Promises transition between states.

// 1. What is a Promise?
// A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.

// Pending: The initial state, the operation has not yet completed.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed, returning an error.
// The key thing to understand is that Promises themselves are synchronous when created but encapsulate asynchronous tasks. The asynchronous code inside the promise only runs after the synchronous code finishes executing.

// 2. Creating a Promise
// When you create a new Promise, it takes an executor function that runs immediately. This executor function takes two arguments: resolve and reject.

// Example:

const promise7 = new Promise((resolve, reject) => {
  // This code runs immediately
  if (condition) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});

// resolve: Marks the promise as fulfilled and provides the resolved value.
// reject: Marks the promise as rejected and provides the error.

// 3. States of a Promise
// A promise can be in one of three states:

// Pending: The promise has been created, and the asynchronous operation has started.
// Fulfilled: The promise was successfully resolved with a value.
// Rejected: The promise was rejected, usually with an error.
// Once a promise is fulfilled or rejected, it cannot change its state again. This behavior makes Promises immutable in terms of state.

// 4. Behind the Scenes of the Promise Lifecycle
// Step 1: Creation of the Promise
// When a Promise is created, the executor function is invoked immediately, but it does not resolve or reject until the asynchronous operation inside completes.

// Step 2: Transitioning States
// Once the asynchronous operation completes:

// If successful, resolve() is called, transitioning the promise from pending to fulfilled.
// If an error occurs, reject() is called, transitioning the promise from pending to rejected.
// These transitions trigger the execution of .then() or .catch() callbacks registered on the promise.

// 5. Microtasks and the Event Loop
// The Event Loop
// JavaScript uses an event-driven, non-blocking concurrency model with a single-threaded event loop. This loop continuously checks the call stack and executes tasks from the task queue when the call stack is empty.

// Call Stack: Executes synchronous code. Tasks like variable declarations, function calls, and loops are processed here.
// Task Queue: Holds callbacks for asynchronous operations like timers, DOM events, and I/O.
// Promise Microtasks
// Promises operate differently from normal asynchronous tasks. When a Promise resolves or rejects, it doesn't go to the task queue (where normal callbacks go). Instead, it goes to the microtask queue, which has higher priority.

// Here’s how it works:

// Synchronous code executes first (call stack).
// Once the call stack is clear, the event loop checks the microtask queue for any pending tasks, like .then() or .catch() callbacks from resolved promises.
// If the microtask queue is clear, the event loop proceeds to the task queue, which contains callbacks for things like setTimeout, setInterval, and other non-promise asynchronous tasks.

// Example with Event Loop:
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve("Promise resolved").then(console.log);

console.log("End");

// Execution Order:

// 'Start' and 'End' are printed first because they are synchronous.
// The Promise resolution happens next ('Promise resolved') because Promises go into the microtask queue, which is processed after the synchronous code.
// The setTimeout callback runs last ('Timeout callback') because it goes into the task queue, which is processed after the microtasks.

// Output:
// Start // call stack first
// End // call stack first
// Promise resolved // promises second
// Timeout callback // then others last

// Visual Representation of Event Loop:
// +--------------+
// | Call Stack   |        Synchronous code
// +--------------+
//       |
//       V
// +--------------+
// | Microtask Q  |        Promises an fetch go here (higher priority)
// +--------------+
//       |
//       V
// +--------------+
// | Task Queue   |        Other async tasks (setTimeout, setInterval, clearTimeOut, clearInterval etc.)
// +--------------+

// 6. Promise Callbacks (.then() and .catch())
// When you attach a .then() or .catch() to a promise, you're registering a callback that gets added to the microtask queue once the promise settles.

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

promise.then((value) => {
  console.log(value); // This will be called after 1 second
});

// In this case:

// The Promise executor runs immediately, setting up the setTimeout.
// After 1 second, resolve("Data received") is called, transitioning the promise to fulfilled.
// The .then() callback is then placed in the microtask queue and executed as soon as the call stack is empty.

// 7. Promise Chaining
// When .then() returns a value, it creates a new promise that is resolved with that value. This allows chaining.

new Promise((resolve) => resolve(10))
  .then((result) => {
    console.log(result); // 10
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 20
    return result * 3;
  })
  .then((result) => {
    console.log(result); // 60
  });

// How Chaining Works:

// Each .then() returns a new promise.
// If a value is returned from .then(), the promise resolves with that value.
// If a promise is returned from .then(), the next .then() waits for that promise to resolve.

// 8. Error Handling in Promises
// If an error is thrown anywhere in a promise chain, it propagates through the chain until it is caught by a .catch() block.

// new Promise((resolve, reject) => {
//   reject("Error occurred!");
// })
//   .then((result) => {
//     console.log(result); // This won't execute
//   })
//   .catch((error) => {
//     console.error(error); // "Error occurred!"
//   });

// The .catch() block handles any rejection from the promise or errors thrown within the .then() chain.

// 9. Key Points Behind the Scenes
// Synchronous Execution: The executor function runs immediately. However, the asynchronous part (such as setTimeout) won't execute until the JavaScript engine finishes the current execution context.

// Microtask Queue: Promise resolution or rejection doesn’t go to the task queue; it goes to the microtask queue, which has priority over the task queue.

// Immutability: Once a Promise settles (fulfilled or rejected), it cannot change state.
// Chaining: Each .then() in the chain returns a new promise, enabling sequential asynchronous logic.
// Error Propagation: Errors in promises propagate through the chain until handled by .catch().

// Conclusion
// Promises are a powerful way to handle asynchronous operations, and their behavior is closely tied to how JavaScript handles concurrency and the event loop. The event loop, microtask queue, and task queue are crucial to understanding why Promises behave the way they do. Understanding this behind-the-scenes process will help you write cleaner, more efficient asynchronous code.
