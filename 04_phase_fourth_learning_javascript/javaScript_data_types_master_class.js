// Master Class on JavaScript Data Types
// JavaScript is a dynamically typed language, meaning variables can hold different data types over their lifespan without requiring explicit declaration. Understanding data types is foundational to mastering JavaScript and improving your development skills.

// JavaScript Data Types Overview
// JavaScript has two main categories of data types:

// Primitive Types: Immutable and directly represent a single value.
// Non-Primitive (Reference) Types: Mutable and can store collections of values.
// 1. Primitive Data Types
// 1.1 Number
// Represents both integer and floating-point numbers.
// JavaScript treats all numbers as floating-point numbers by default.
// Examples:
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point
let num3 = 1.5e3; // Scientific notation (1500)
let num4 = Infinity; // Infinity
let num5 = NaN; // Not-a-Number (results from invalid math operations)

// Special cases:

// NaN (Not-a-Number): Occurs when an operation can’t return a valid number (e.g., dividing a string by a number).
// Infinity and -Infinity: Represented when numbers exceed the upper or lower bounds of JavaScript’s Number type.
// Operations:
let a = 10 / "hello"; // NaN
let b = 1 / 0; // Infinity

// 1.2 String
// A sequence of characters enclosed in single ('), double (") or backticks (`).
// Strings are immutable, meaning you can't change them once they're created.
// Examples:
let name = "John"; // Single quotes
let greeting = "Hello"; // Double quotes
let template = `Hello, ${name}`; // Template literal for embedding expressions

// Common Operations:
let str = "Hello";
let newStr = str + " World"; // Concatenation
let length = str.length; // Getting length of string
let char = str[0]; // Accessing a character

// 1.3 Boolean
// Represents logical entities and can hold either true or false.
// Examples:
let isAdult = true;
let hasPermission = false;

// Use cases: Booleans are frequently used in control flow statements (e.g., if, while).
if (isAdult) {
  console.log("Allowed to enter.");
} else {
  console.log("Entry denied.");
}

// 1.4 Undefined
// A variable that has been declared but not assigned a value is of type undefined.
// It's also the return value of functions that do not explicitly return a value.
// Example:
let x;
console.log(x); // undefined

// 1.5 Null
// Represents an intentional absence of any object value.
// It’s used when you want to explicitly indicate that a variable contains no value.
// Example:
let user = null; // Explicitly assigning a "no value" state

// 1.6 Symbol (ES6)
// A unique and immutable value used primarily for object property keys.
// Symbols are always unique, even if they have the same description.
// Example:
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false

// 1.7 BigInt (ES11)
// Used to represent integers with arbitrary precision, beyond the Number type’s safe integer limit.
// Example:
let largeNumber = 9007199254740991n; // Adding 'n' makes it a BigInt
let anotherLargeNumber = BigInt(9007199254740991); // Using constructor

// 2. Non-Primitive (Reference) Types
// Reference types store references to objects. They are mutable, meaning the values can change over time.

// 2.1 Object
// Objects are collections of key-value pairs.
// They can store multiple types of data, including other objects, arrays, and functions.
// Example:
let person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet(); // Accessing the method

// Accessing and Modifying Object Properties:
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation
person.age = 31; // Modifying property

// 2.2 Array
// An ordered collection of elements.
// Arrays can store any combination of data types (e.g., strings, numbers, objects).
// Example:
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Accessing first element
fruits.push("Mango"); // Adding an element

// 2.3 Function
// Functions in JavaScript are also objects. A function can be assigned to variables and passed around like any other data type.
function add(a, b) {
  return a + b;
}
let sum = add(5, 3);

// 2.4 Date
// JavaScript provides the Date object for handling dates and times.
// Example:
let currentDate = new Date();
console.log(currentDate);

// 3. Type Checking
// To check the type of a value in JavaScript, the typeof operator is used:

// Examples:
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (quirk of JavaScript)
console.log(typeof {}); // "object"
console.log(typeof function () {}); // "function"

// Special Note:
// null is technically a primitive, but typeof null returns "object", which is a historical bug in JavaScript.
// 4. Type Conversion (Coercion)
// JavaScript allows implicit and explicit type conversion between different data types.

// 4.1 Implicit Conversion (Coercion)
// JavaScript often coerces types implicitly when combining values of different types.

// Examples:
console.log(10 + "5"); // "105" (Number is coerced to a String)
console.log("10" - 5); // 5 (String is coerced to a Number)

// 4.2 Explicit Conversion
// You can also explicitly convert between types using global functions like String(), Number(), Boolean().

// Examples:
let str1 = String(123); // "123"
let num = Number("456"); // 456
let bool = Boolean(0); // false

// 5. Mutability vs. Immutability
// Primitive types: Immutable, meaning their values can’t be changed once created.
let str2 = "Hello";
let str3 = str1;
str1 = "Hi";
console.log(str3); // "Hello" remains unchanged

// javascript
// Reference types: Mutable, meaning their values can be changed even after assignment.
let obj1 = { a: 1 };
let obj2 = obj1;
obj1.a = 2;
console.log(obj2.a); // 2 (reflects the change)

// Summary
// JavaScript data types can be broadly divided into primitives (like Number, String, Boolean, etc.)
// and reference types (like Object, Array, Function). Understanding the difference between them,
// how they behave in memory, and their mutability is crucial for efficient JavaScript programming.

// Mastering these fundamentals will allow you to write more robust, predictable, and performant JavaScript code.
