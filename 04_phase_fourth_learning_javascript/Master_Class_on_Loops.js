// Master Class on Loops
// Loops are a foundational concept in programming, allowing you to automate repetitive tasks efficiently. In this master class, we'll explore different types of loops, their use cases, and advanced techniques for using loops effectively.

// 1. Introduction to Loops
// Loops allow you to repeat a block of code multiple times, either for a set number of iterations or until a condition is met. This enables efficient management of repetitive tasks like iterating over arrays or collections, and performing operations on each element.

// 2. Types of Loops
// There are several types of loops available in most programming languages, including:

// a. For Loop
// The for loop is most commonly used when the number of iterations is known beforehand. It consists of three parts:

// Initialization: Set the initial value of the counter.
// Condition: Define when the loop should terminate.
// Increment/Decrement: Update the counter after each iteration.
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// b. While Loop
// The while loop is used when you want to repeat an action as long as a certain condition remains true. The condition is checked before the block of code is executed.

let i2 = 0;
while (i2 < 5) {
    console.log(i2); // Output: 0, 1, 2, 3, 4
    i2++;
}

// c. Do-While Loop
// The do-while loop is similar to the while loop, but the code block is executed at least once before the condition is checked.

let i1 = 0;
do {
    console.log(i1); // Output: 0, 1, 2, 3, 4
    i1++;
} while (i1 < 5);

// d. For...of Loop (ES6)
// The for...of loop is specifically designed for iterating over iterable objects such as arrays, strings, or maps. It iterates over the values of the iterable.

const arr4 = [10, 20, 30, 40];
for (let value of arr4) {
    console.log(value); // Output: 10, 20, 30, 40
}

// e. For...in Loop
// The for...in loop is used to iterate over the properties of an object, including those inherited from its prototype chain.

const obj1 = { a: 1, b: 2, c: 3 };
for (let key in obj1) {
    console.log(key, obj1[key]); // Output: a 1, b 2, c 3
}

// 3. Advanced Loop Concepts
// a. Nested Loops
// Loops can be nested inside other loops. Be mindful of performance, as deeply nested loops can quickly become inefficient.

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// b. Breaking and Continuing
// You can use the break and continue statements to control loop execution:

// break: Immediately exits the loop.
// continue: Skips the current iteration and continues with the next.
for (let i = 0; i < 5; i++) {
    if (i === 3) break; // Exits the loop when i equals 3
    console.log(i);     // Output: 0, 1, 2
}

for (let i = 0; i < 5; i++) {
    if (i === 3) continue; // Skips the iteration where i equals 3
    console.log(i);        // Output: 0, 1, 2, 4
}

// c. Labelled Loops
// You can use labels to break or continue outer loops in a nested loop structure.

outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outerLoop;
        console.log(i, j);
    }
}

// d. Iterating Objects and Arrays
// Iterating over arrays and objects requires understanding the data structure you're working with:

// Arrays: Use for, for...of, or array methods like forEach.
// Objects: Use for...in, Object.keys(), Object.values(), or Object.entries().

const obj = { a: 1, b: 2, c: 3 };

// Using Object.entries()
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value); // Output: a 1, b 2, c 3
});

// 4. Common Loop Pitfalls
// a. Infinite Loops
// An infinite loop occurs when the loop condition never evaluates to false. This can cause your program to crash or freeze. Always ensure that the loop condition is updated correctly in each iteration.

// Infinite loop example (avoid this!)
let i = 0;
while (i < 5) {
    console.log(i);
    // i++ is missing, leading to an infinite loop
}

// b. Performance Considerations
// For large datasets, loops can become inefficient, especially if they involve nested loops. Consider alternatives like array methods (map, filter, reduce) or recursion for optimization.

const largeArray = Array(1e6).fill(1);

// Slower with loops
for (let i = 0; i < largeArray.length; i++) {
    largeArray[i] = largeArray[i] * 2;
}

// Faster with map
const newArray = largeArray.map((item) => item * 2);

// 5. Modern Loop Alternatives: Functional Programming
// Modern JavaScript and other languages offer functional methods as an alternative to loops. These methods can be more readable and are often optimized internally.

// a. forEach
// Executes a function for each array element.

const arr3 = [10, 20, 30];
arr3.forEach((value, index) => {
    console.log(value, index);
});

// b. map
// Creates a new array by applying a function to each element of the original array.

const arr = [1, 2, 3];
const doubled = arr.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]

// c. filter
// Creates a new array with elements that pass a test function.

const arr1 = [1, 2, 3, 4, 5];
const even = arr1.filter((num) => num % 2 === 0);
console.log(even); // Output: [2, 4]

// d. reduce
// Reduces an array to a single value by applying a function.

const arr2 = [1, 2, 3, 4];
const sum = arr2.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

// 6. Best Practices for Using Loops
// Keep it simple: Avoid unnecessarily complex or deeply nested loops.
// Use meaningful names: Use descriptive loop counters (i, j, etc.) or context-appropriate names.
// Prefer functional methods when possible: map, filter, and reduce can often be clearer and faster than loops.
// Avoid mutating arrays: Use immutable methods to avoid unexpected side effects in loops.

// 7. Exercise Challenges
// Write a for loop that prints the numbers from 1 to 100, but for multiples of 3, print "Fizz," for multiples of 5, print "Buzz," and for multiples of both, print "FizzBuzz."
// Create a function that uses a loop to reverse a string.
// Implement a loop that sums all even numbers between 1 and 100.
// Write a nested loop that prints a multiplication table (from 1x1 to 10x10).

// Conclusion
// Loops are essential for controlling the flow of your program and managing repetitive tasks. By understanding different types of loops and when to use them, you can write cleaner, more efficient code. Additionally, modern techniques like functional programming offer powerful alternatives to traditional looping mechanisms. Keep practicing to deepen your loop mastery!
