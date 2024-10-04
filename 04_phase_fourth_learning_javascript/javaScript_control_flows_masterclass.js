// Master Class on JavaScript Control Flows
// JavaScript control flows allow you to dictate how the program executes. Understanding control flows is essential for building logic, managing conditions, handling repetitions, and responding to various situations within your applications. Here's a structured breakdown of control flows in JavaScript:

// 1. Conditional Statements
// Conditional statements help you decide which block of code should run based on certain conditions.

// 1.1 if, else if, else
// The basic way to introduce conditions.

console.log("I am regular bottom code"); // it's run without any condition

// Syntax:

if (condition) {
    // code runs if the condition is true
} else if (anotherCondition) {
    // code runs if the first condition is false and this one is true
} else {
    // code runs if all the above conditions are false
}


// Example:
let age = 18;

if (age > 18) {
    console.log("You are an adult.");
} else if (age === 18) {
    console.log("Just became an adult!");
} else {
    console.log("You are still young.");
}

let username = "chai";
let anotherUsername = "chai";

if (username == anotherUsername) {
  //   console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

//Checking if a variable is a number or not:

let score = "44";

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No that is not a number");
}

//Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  //   console.log("Tea is NOT ready");
}

// Checking if an array is empty or not:

let items = ["item1"];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT empty");
}


// 1.2 Ternary Operator
// A shorthand for if-else statements, useful for simple conditions.

// Syntax:
// condition ? valueIfTrue : valueIfFalse;

// Example:
let age1 = 18;
let message = age1 >= 18 ? "Adult" : "Minor";
console.log(message);  // Output: "Adult"

// 1.3 Switch Statement
// When dealing with multiple discrete conditions, switch is cleaner than several if-else statements.

// Syntax:
switch(expression) {
    case value1:
        // code for value1
        break;
    case value2:
        // code for value2
        break;
    default:
        // default code
}

// Example:

let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Another day");
}

// 2. Loops
// Loops allow you to execute a block of code multiple times.

// 2.1 for Loop
// This is the most common loop, ideal for when the number of iterations is known.

// Syntax:

for (initialization; condition; increment) {
    // code to execute
}

// Example:

for (let i = 0; i < 5; i++) {
    console.log(i);  // Outputs 0, 1, 2, 3, 4
}

// 2.2 while Loop
// Used when the condition is evaluated before each iteration.

// Syntax:

while (condition) {
    // code to execute
}

// Example:

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// 2.3 do...while Loop
// Executes the code block at least once, and then checks the condition.

// Syntax:

do {
    // code to execute
} while (condition);

// Example:

let count1 = 0;
do {
    console.log(count1);
    count1++;
} while (count1 < 5);

// 2.4 for...of Loop
// Used for iterating over iterable objects (arrays, strings, etc.).

// Syntax:

for (let element of iterable) {
    // code to execute
}

// Example:

let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);  // Outputs 10, 20, 30
}

// 2.5 for...in Loop
// Used for iterating over the properties of an object.

// Syntax:

for (let property in object) {
    // code to execute
}

// Example:

let person = {name: "John", age: 25, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
    // Outputs: name: John, age: 25, city: New York
}

// 3. Control Flow Keywords
// These special keywords help control the flow of loops or conditions.

// 3.1 break
// Terminates the loop or switch statement.

// Example:

for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);  // Outputs 0 to 4
}

// 3.2 continue
// Skips the current iteration of the loop.

// Example:

for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);  // Outputs 0, 1, 3, 4 (skips 2)
}

// 3.3 return
// Used in functions to exit and optionally return a value.

// Example:

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));  // Outputs 5

// 3.4 throw and try...catch
// Used to handle exceptions.

// Example:

try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log(error.message);  // Outputs: Something went wrong!
}

// 4. Asynchronous Control Flows
// With asynchronous operations, control flow becomes more complex.

// 4.1 Callbacks
// Functions passed as arguments to handle asynchronous operations.

// Example:

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

// 4.2 Promises
// Handle asynchronous actions and avoid callback hell.

// Syntax:

let promise = new Promise(function(resolve, reject) {
    // async code
});

promise.then(function(result) {
    // handle result
}).catch(function(error) {
    // handle error
});

// Example:

let dataLoaded = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 2000);
});

dataLoaded.then(data => {
    console.log(data);  // Outputs: Data loaded
}).catch(error => {
    console.error(error);
});

// 4.3 Async/Await
// Simplifies working with Promises.

// Syntax:

async function functionName() {
    try {
        let result = await someAsyncOperation();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Example:

async function fetchData() {
    try {
        let data = await new Promise((resolve) => setTimeout(() => resolve("Data fetched"), 2000));
        console.log(data);  // Outputs: Data fetched
    } catch (error) {
        console.error(error);
    }
}

fetchData();

// Conclusion
// Mastering control flows in JavaScript is key to writing efficient, clear, and powerful code. Whether you're dealing with conditional logic, loops, or asynchronous programming, understanding these control flow mechanisms allows you to handle any scenario your program faces.

// With practice, you'll be able to choose the right type of control flow for the task at hand and write more robust and optimized code!
