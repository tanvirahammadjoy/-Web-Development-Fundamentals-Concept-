// A master class on arrays in JavaScript covers a wide range of topics from basic usage to advanced array manipulation techniques. Here's a structured guide for you:

// 1. Introduction to Arrays in JavaScript
// What is an Array?

// Arrays are ordered lists of values in JavaScript, where each value (element) is stored at a numeric index.
// Arrays are zero-indexed, meaning the first element is at index 0.
let fruits = ["apple", "banana", "mango"];

// access to an array the first element
console.log(fruits[0]); // 'apple'

// Creating an Array
// Using Array Literals:
let numbers = [1, 2, 3, 4, 5];

// Using the Array constructor:
let array = new Array(10); // Creates an array with 10 undefined elements

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbel tea", "white tea", "masala chai"];
let chang = teaTypes.splice("jasmine tea", 1);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
topCities.pop();
// console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");


let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited);

// Key Properties
// .length: Returns the number of elements in the array.
console.log(fruits.length); // 3

// 2. Array Methods
// Basic Methods
// push(): Adds elements to the end of an array.
fruits.push("orange"); // ['apple', 'banana', 'mango', 'orange']

// pop(): Removes and returns the last element.
fruits.pop(); // ['apple', 'banana', 'mango']

// unshift(): Adds elements to the beginning.
fruits.unshift("grape"); // ['grape', 'apple', 'banana', 'mango']

// shift(): Removes the first element.
fruits.shift(); // ['apple', 'banana', 'mango']

// Iterating over Arrays
// for loop:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach(): Iterates through each element.
fruits.forEach((fruit) => console.log(fruit));

// Searching and Sorting
// indexOf(): Finds the index of an element.
console.log(fruits.indexOf("banana")); // 1

// includes(): Checks if an element exists.
console.log(fruits.includes("apple")); // true

// sort(): Sorts the array lexicographically.
fruits.sort(); // ['apple', 'banana', 'mango']

// reverse(): Reverses the array.
fruits.reverse(); // ['mango', 'banana', 'apple']

// Array Transformation
// map(): Transforms each element based on the callback function.
let numbers1 = [1, 2, 3, 4, 5];
let squares = numbers1.map((num) => num * num); // [1, 4, 9, 16, 25]

// filter(): Filters elements based on a condition.
let evenNumbers = numbers.filter((num) => num % 2 === 0); // [2, 4]

// reduce(): Reduces the array to a single value.
let sum = numbers.reduce((acc, num) => acc + num, 0); // 15

// Array Merging and Slicing
// concat(): Merges arrays.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]

// slice(): Returns a new array from the original array’s slice.
let sliced = fruits.slice(1, 3); // ['banana', 'mango']

// splice(): Adds/removes elements at specific indices.
fruits.splice(1, 1, "kiwi"); // ['apple', 'kiwi', 'mango']

// 3. Advanced Array Concepts
// Array Destructuring
// Extract elements from arrays.
let [first, second] = fruits; // 'first' is 'apple', 'second' is 'banana'

// Spread Operator
// Spreads elements of an array.
let newFruits = ["grape", ...fruits]; // ['grape', 'apple', 'banana', 'mango']

// Rest Parameter
// Collects all remaining elements into an array.
let [firstFruit, ...restFruits] = fruits;
console.log(restFruits); // ['banana', 'mango']

// Copying Arrays
// Shallow copy using slice() or spread operator.
let copy = fruits.slice();
let copy2 = [...fruits];

// Array from and Array of
// Array.from(): Creates an array from an iterable or array-like object.
let str = "hello";
let chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

// Array.of(): Creates a new array from the provided elements.
let arr = Array.of(1, 2, 3); // [1, 2, 3]

// Flat and FlatMap
// flat(): Flattens nested arrays.
let nestedArr = [1, [2, [3, [4]]]];
let flatArr = nestedArr.flat(2); // [1, 2, 3, [4]]

// flatMap(): Maps and flattens the array.
let flatMapped = [1, 2, 3].flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

// 4. Array-Like Objects
// JavaScript treats some objects as "array-like" (e.g., the arguments object or DOM node lists). You can convert array-like objects into arrays with Array.from().

function example() {
  let argsArray = Array.from(arguments);
  console.log(argsArray);
}
example(1, 2, 3); // [1, 2, 3]

// 5. Multidimensional Arrays
// JavaScript arrays can hold other arrays, making them multidimensional.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]); // 6

// 6. Performance Considerations
// Arrays in JavaScript are dynamic, meaning they can grow in size as needed. However, operations like push() and pop() are faster than shift() and unshift().
// Large arrays should be handled carefully when using methods like map(), filter(), or reduce() as they may introduce performance bottlenecks.
// 7. Real-World Examples
// Summing Array Elements:
let total = numbers.reduce((acc, num) => acc + num, 0);

// Removing Duplicates:
let unique = [...new Set([1, 2, 2, 3, 4, 4])]; // [1, 2, 3, 4]

// Filtering Even Numbers:
let evens = numbers.filter((num) => num % 2 === 0);

// This array master class should provide a comprehensive understanding of arrays in JavaScript, ranging from basic operations to advanced techniques. You can now confidently manipulate and work with arrays in a variety of coding situations!

// We have to go in more advance do we can?
// Absolutely! Let's dive deeper into advanced topics and techniques related to arrays in JavaScript. We’ll explore array performance optimizations, complex algorithms, memory management, higher-order functions, and patterns that are essential in real-world applications.

// 1. Array Memory and Performance Considerations
// 1.1. Dynamic Nature of JavaScript Arrays
// JavaScript arrays are not fixed in size, meaning they dynamically allocate memory as elements are added or removed. However, there’s a performance overhead with resizing.
// Operations like .push() are generally O(1) because they only append an element to the array. However, in the worst case, when the array needs to resize, it can take O(n).
// 1.2. Sparse Arrays
// Arrays don’t need to be contiguous in memory, meaning you can have "sparse arrays" where some elements are undefined. This can lead to performance degradation since sparse arrays are less optimized.

let sparseArray = [];
sparseArray[1000] = "large"; // Creates an array with a gap of 1000 empty spots
console.log(sparseArray.length); // 1001

// 1.3. Memory Optimization with Typed Arrays
// JavaScript offers typed arrays for performance-critical applications, such as graphics processing, handling large datasets, or real-time applications. Typed arrays like Int8Array, Float32Array, etc., provide contiguous memory and fixed types for better performance.
let typedArray = new Int8Array([1, 2, 3, 4]);
console.log(typedArray[2]); // 3

// 2. Functional Programming with Arrays
// 2.1. Chaining Higher-Order Functions
// Arrays in JavaScript support functional programming paradigms, where you can chain functions like map(), filter(), and reduce() for cleaner, declarative code.
// Example: Chain map(), filter(), and reduce() to calculate the sum of squares of even numbers:

let numbers2 = [1, 2, 3, 4, 5, 6];
let sumOfSquares = numbers2
  .filter((n) => n % 2 === 0) // [2, 4, 6]
  .map((n) => n * n) // [4, 16, 36]
  .reduce((acc, n) => acc + n, 0); // 56
console.log(sumOfSquares); // 56

// 2.2. Using reduce() for Complex Data Structures
// reduce() is a powerful function that can be used to transform arrays into any other data structure, such as objects, nested arrays, or even maps.
// Example: Transform an array of objects into an object grouped by a specific property:

let people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 25 },
];

let groupedByAge = people.reduce((group, person) => {
  let { age } = person;
  group[age] = group[age] || [];
  group[age].push(person);
  return group;
}, {});

console.log(groupedByAge);
/*
{
  25: [{ name: 'John', age: 25 }, { name: 'Jim', age: 25 }],
  30: [{ name: 'Jane', age: 30 }]
}
*/

// 2.3. Memoization and Lazy Evaluation with Arrays
// Memoization allows you to cache the results of function calls to improve performance, especially for repeated operations. You can apply this technique with arrays when processing expensive computations.
// Example: Memoize a function that filters and maps large arrays:

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}

const heavyComputation = memoize((arr) =>
  arr.filter((n) => n % 2 === 0).map((n) => n * n)
);
console.log(heavyComputation([1, 2, 3, 4])); // [4, 16]

// 3. Advanced Array Algorithms
// 3.1. Efficient Searching Techniques
// Binary Search: If an array is sorted, you can use binary search (O(log n)) to quickly find elements.
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
let sortedArray = [1, 2, 3, 4, 5];
console.log(binarySearch(sortedArray, 3)); // 2

// 3.2. Flattening Deeply Nested Arrays
// Using recursive algorithms or reduce() to flatten deeply nested arrays.
let nestedArr1 = [1, [2, [3, [4, [5]]]]];

function flatten(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    []
  );
}

console.log(flatten(nestedArr1)); // [1, 2, 3, 4, 5]

// 3.3. Intersection and Union of Arrays
// Finding common elements (intersection) or merging arrays without duplicates (union) efficiently.
// Intersection:

let arr11 = [1, 2, 3];
let arr21 = [2, 3, 4];
let intersection = arr11.filter((value) => arr21.includes(value));
console.log(intersection); // [2, 3]

// Union:
let union = [...new Set([...arr1, ...arr2])];
console.log(union); // [1, 2, 3, 4]

// 3.4. Efficient Array Shuffling (Fisher-Yates Algorithm)
// Shuffling arrays randomly in O(n) time using the Fisher-Yates shuffle algorithm.
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

let arr3 = [1, 2, 3, 4, 5];
console.log(shuffle(arr3)); // Randomly shuffled array

// 4. Asynchronous Operations with Arrays
// 4.1. Processing Arrays Asynchronously
// Using async and await to process arrays with asynchronous operations (e.g., API calls) sequentially or concurrently.
// Sequential Processing:
async function asyncProcess(arr) {
  for (let item of arr) {
    await someAsyncFunction(item);
  }
}

// Parallel Processing with Promise.all():
async function parallelProcess(arr) {
  await Promise.all(arr.map(async (item) => someAsyncFunction(item)));
}

// 4.2. for await...of for Async Iteration
// You can use for await...of to iterate over an array of promises.
async function asyncIterator(promises) {
  for await (let result of promises) {
    console.log(result);
  }
}

let promiseArray = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
asyncIterator(promiseArray); // Outputs: 1, 2, 3

// 5. Reactive Programming with Arrays
// 5.1. Observing Arrays with Proxy
// JavaScript’s Proxy object allows you to observe changes in arrays dynamically.
let array1 = [];
let proxyArray = new Proxy(array1, {
  set(target, property, value) {
    console.log(`Setting index ${property} to ${value}`);
    target[property] = value;
    return true;
  },
});

proxyArray.push(1); // "Setting index 0 to 1"
proxyArray[0] = 5; // "Setting index 0 to 5"

// 6. Immutable Array Operations
// Embracing immutability can improve the predictability and maintainability of your code. Instead of mutating arrays directly, you create new copies.
const original = [1, 2, 3];
const newArr = [...original, 4]; // Creates a new array [1, 2, 3, 4]

// Using libraries like Immutable.js can help maintain immutability by default.

// Conclusion
// This advanced class on JavaScript arrays covers performance optimizations, functional programming, complex algorithms, and more. Arrays are incredibly versatile and essential for writing efficient, clean, and scalable JavaScript code. As you advance further, mastering these techniques will allow you to tackle complex problems more effectively.

// Would you like to explore any of these topics in greater depth?
