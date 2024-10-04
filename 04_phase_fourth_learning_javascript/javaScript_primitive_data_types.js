// To create a Primitive Data Type Master Class in JavaScript, you can go over the six fundamental primitive data types and cover essential concepts like immutability, type coercion, and common operations. Let’s break down these types, concepts, and how they are used.

// 1. Primitive Data Types Overview
// JavaScript has 6 primitive data types:

// String
// Number
// Boolean
// Null
// Undefined
// Symbol (added in ES6)
// Key Concept: Immutability
// Primitive values are immutable, meaning their actual values cannot be changed after they are created. For example, if you create a string and then try to modify it, you’ll be creating a new string instead of changing the original.

// 2. Master Class on Primitive Data Types
// String
// A string is a sequence of characters used to represent text.
let name = "John Doe";
console.log(name.length); // Length of the string
console.log(name.toUpperCase()); // Convert to uppercase
console.log(name.charAt(0)); // Access a character
console.log(name.concat(" is learning JavaScript.")); // Concatenation

let oldGreet = myString + " " + "hitesh";
// console.log(oldGreet);

// template string
let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
// console.log(demoOne);

// Properties/Methods: length, charAt(), toUpperCase(), toLowerCase(), slice(), concat().
// Common Operations: String interpolation, string manipulation (slicing, concatenation, etc.).

// Number
// Numbers in JavaScript can be integers or floating-point values.
let age = 25;
let pi = 3.14159;
console.log(age + 5); // Addition
console.log(pi.toFixed(2)); // Format to 2 decimal places
console.log(Number.isInteger(age)); // Check if it's an integer

// Properties/Methods: toFixed(), toPrecision(), Number.isInteger().
// Special Values: NaN (Not a Number), Infinity, -Infinity.

// Boolean
// A boolean represents a logical entity with two values: true or false.
let isActive = true;
console.log(isActive); // true
console.log(Boolean(0)); // false (type coercion: 0 is falsy)
console.log(Boolean("Hello")); // true (non-empty strings are truthy)

// Common Use Cases: Conditional statements, flags, truthy/falsy checks.

// Null
// null represents an intentional absence of any object value.
let emptyValue = null;
console.log(emptyValue); // null
console.log(typeof emptyValue); // "object" (quirk of JavaScript)

// Common Mistake: People often confuse null with undefined, but null is explicitly assigned, whereas undefined means a variable has been declared but not assigned a value.

// Undefined
// undefined means a variable has been declared but not yet assigned a value.
let notAssigned;
console.log(notAssigned); // undefined
console.log(typeof notAssigned); // "undefined"

// Use Case: Detect uninitialized variables, function parameters that are not passed, or missing object properties.

// Symbol (ES6)
// Symbol is a unique and immutable data type used for object property keys.
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false (Symbols are unique)

// Use Case: To create unique keys for objects, especially when working with meta-programming.

// 3. Type Coercion
// JavaScript automatically converts between types when needed. This can cause unexpected results.

// Example: Implicit Type Coercion
console.log(5 + "5"); // "55" (Number + String = String)
console.log("5" - 1); // 4 (String - Number = Number)
console.log(true + 1); // 2 (true is coerced to 1)

// 4. Primitive vs Object Comparison
// Primitive types are compared by value, while objects (including arrays) are compared by reference.

// Example:
let a = 5;
let b = 5;
console.log(a === b); // true (compared by value)

let obj1 = { value: 5 };
let obj2 = { value: 5 };
console.log(obj1 === obj2); // false (compared by reference)

// 5. Wrapper Objects
// Though primitives are not objects, JavaScript automatically converts primitives to their corresponding object type when accessing properties or methods.

// Example:
let str = "Hello";
console.log(str.length); // 5 (String primitive temporarily becomes a String object)

// 6. Common Operations and Pitfalls
// Falsy Values: false, 0, "", null, undefined, and NaN are falsy. All other values are truthy.
if (!0) {
  console.log("0 is falsy");
}

// NaN (Not a Number): Represents an undefined or unrepresentable value in number operations.

console.log("abc" * 2); // NaN

// Conclusion
// Primitive types are foundational in JavaScript, and understanding how they work helps in building robust programs. Their immutability, automatic coercion, and common methods allow developers to manipulate data effectively.

// To master these data types:

// Explore their behaviors with different operators.
// Pay attention to type coercion when working with mixed types.
// Use primitive wrapper methods to work with strings, numbers, and booleans efficiently.

// *************************** Iteration ******************************* //

// Iteration in JavaScript typically refers to traversing through elements, properties, or characters,
// depending on the data structure in question. When dealing with primitive data types,
// the idea of iteration behaves differently compared to objects and arrays. Let’s explore what works,
// what doesn’t, and why in terms of iteration with primitive data types, as well as broader perspectives on these types.

// 1. Strings: Iterable
// A string is the only primitive type that is iterable in JavaScript. This means you can iterate over the characters of a string using constructs like for...of or by accessing individual characters through indexing.

// Iteration Example:
let str1 = "Hello";

// Using for...of loop
for (let char of str1) {
  console.log(char); // H, e, l, l, o
}

// Using traditional for loop
for (let i = 0; i < str.length; i++) {
  console.log(str1[i]); // H, e, l, l, o
}

// Why It Works: Strings are essentially arrays of characters, and JavaScript defines strings as iterable objects,
// allowing access to individual characters.

// Key Points:

// Strings are indexable, meaning you can access specific characters using str[i].
// You can use methods like .split() to transform strings into arrays and iterate over them in more complex ways.
// Example: Iterating After Transformation
let strArray = "Hello".split("");
strArray.forEach((char) => console.log(char)); // H, e, l, l, o

// 2. Numbers: Not Iterable
// Numbers are not iterable in JavaScript. You cannot directly loop through a number as if it were a sequence of digits or a range.

// What Happens When You Try to Iterate Over a Number:
let num = 1234;

// This will throw an error because numbers are not iterable
for (let digit of num) {
  console.log(digit);
}

// Why It Doesn’t Work: Numbers are primitive scalar values, not collections of items.
// JavaScript does not define numbers as iterable objects, so they don’t have a structure like arrays or
// strings that can be looped over.

// Workaround for Iterating Through Digits:
// To iterate over the digits of a number, you can convert it to a string first, then iterate over the characters.
let num1 = 1234;
let numStr = num1.toString();

for (let digit of numStr) {
  console.log(digit); // 1, 2, 3, 4
}

// 3. Booleans: Not Iterable
// Boolean values (true and false) are not iterable. Just like numbers, they represent atomic values and cannot be iterated over.

// Example:
let flag = true;

// This will throw an error as booleans are not iterable
for (let value of flag) {
  console.log(value);
}
// Why It Doesn’t Work: A boolean represents a single truthy or falsy value, so there’s no sequence or collection to
// iterate through. It’s simply a binary value (true or false).

// 4. Null and Undefined: Not Iterable
// Both null and undefined are not iterable because they represent "empty" or "uninitialized" values.
// Trying to iterate over them will result in an error.

// Example:
let n = null;
let u;

// These will throw errors
for (let value of n) {
  console.log(value);
}

for (let value of u) {
  console.log(value);
}

// Why It Doesn’t Work: null represents the absence of a value, and undefined means a variable hasn’t been assigned a value yet.
// Neither represents a collection or sequence.

// 5. Symbols: Not Iterable
// A Symbol is a unique and immutable primitive value, mainly used as object property keys.
// Symbols are not iterable, and attempting to iterate over a symbol will result in an error.

// Example:
let sym = Symbol("desc");

// This will throw an error as symbols are not iterable
for (let value of sym) {
  console.log(value);
}

// Why It Doesn’t Work: Symbols are meant to be unique and used for things like property keys in objects.
// They are not sequences, so there’s nothing to iterate over.

// 6. Iteration vs. Access
// For most primitive data types, the concept of iteration doesn’t apply because primitives are not collections.
// However, you can still access individual parts of the data using other techniques:

// Numbers: You can convert them to strings to access digits.
// Booleans, Null, Undefined: These don't have any meaningful sub-parts to access or iterate over.
// Strings: They are the only primitive type you can iterate over directly.
// 7. Why Strings Are Special
// Strings are the only iterable primitive type because, under the hood, they are treated like arrays of characters.
// JavaScript defines strings as iterable objects because it’s common to treat strings as sequences of characters.

// 8. Type Coercion in Iteration
// Type coercion allows primitive values to behave more flexibly when used in operations that expect objects or collections.
// For instance, JavaScript coerces numbers and booleans into strings when combined with string operations.

// Example: Implicit Conversion
let num2 = 100;
let str2 = num1 + " is a number";
console.log(str2); // "100 is a number"

let bool = true;
console.log(bool + " is a boolean"); // "true is a boolean"

// In these cases, primitives like numbers and booleans are implicitly converted into strings, and strings are iterable,
// so you can then iterate over the result of such a conversion.

// 9. Primitive Wrapper Objects
// Though most primitives are not iterable, JavaScript provides wrapper objects for these types
// (e.g., Number, String, Boolean), which allow them to act like objects with methods, but these methods do not make them iterable.

// Example:
let num3 = 123;
let wrappedNum = new Number(num3);
console.log(wrappedNum.toFixed(2)); // "123.00" (using a method on a wrapper object)

// But even with a wrapper object, wrappedNum itself remains non-iterable.

// Conclusion
// What Works: Strings are iterable by default, and they allow you to loop through characters.
// For other primitive types, you

// What Works (continued): For other primitive types (like numbers or booleans), you can’t iterate directly,
// but you can use workarounds like converting them into strings first or breaking them down into accessible parts
// (e.g., digits in numbers).

// Example:
let num4 = 1234;
for (let digit of num4.toString()) {
  console.log(digit); // Outputs: 1, 2, 3, 4
}

// What Doesn't Work: Direct iteration over numbers, booleans, null, undefined, or symbols will throw errors because they are atomic values—not collections. JavaScript treats them as singular, indivisible entities, which do not have parts that can be traversed.

// Why Certain Primitive Types Are Not Iterable
// Atomic Nature: Primitive types (except strings) are atomic and non-divisible. Numbers, booleans, null, undefined, and symbols represent single, standalone values. They aren't composed of smaller elements, so iteration isn't possible.

// String Exception: Strings, while primitive, behave like an array of characters. Each character is individually accessible by index, which makes strings iterable. JavaScript provides this functionality because working with text often involves accessing individual characters.

// No Internal Structure: For a data structure to be iterable, it needs to have multiple elements or some form of internal structure (like an array or object). Most primitive types don’t meet this requirement—they are single values and lack internal subcomponents to iterate over.

// Different Perspectives on Primitive Data Types and Iteration
// 1. Immutability and Iteration
// Since primitive data types are immutable, iteration (if possible) would never modify the original value. For example, if you were iterating over a string, you couldn't change its characters in place—you would need to create a new string.

let str3 = "hello";
let newStr = "";

for (let char of str3) {
  newStr += char.toUpperCase();
}

console.log(newStr); // "HELLO"

// In the case of other non-iterable types (numbers, booleans), immutability prevents any in-place changes, and thus,
// iteration is not useful.

// 2. Performance Considerations
// When working with large strings, keep in mind that iteration might introduce performance overhead.
// Since strings are immutable, every operation like slicing or concatenating strings creates a new string
// object in memory, which can slow down performance.

// 3. Primitive to Object Coercion
// Though primitives are not objects, JavaScript temporarily wraps primitives (like strings and numbers)
// in their corresponding object form (e.g., new String("hello"), new Number(123))
// when you access their properties or methods. This wrapping, however, does not make them iterable if they are not already.
let str4 = "hello";
console.log(str4.toUpperCase());  // Temporary String object allows access to methods

// 4. Alternative to Iteration: Higher-Order Functions
// If you need to manipulate primitives in a way that mimics iteration (especially for numbers or booleans),
// using higher-order functions and type conversions can be useful.

// Example: Iterating Over Digits of a Number:
let num5 = 5678;
let digits = num5.toString().split("").map(Number);
console.log(digits);  // [5, 6, 7, 8]

// Here, we convert the number to a string, split it into an array of characters, and then map those characters back to numbers. This is a way to simulate iteration for a non-iterable type like a number.

// 5. Symbol as an Object Key, Not Iterable
// Symbols are often used as unique keys for object properties rather than for iteration purposes.
// They are intended for meta-programming, offering a unique identifier that won’t clash with any other keys.
// This unique nature is what makes symbols non-iterable.

// Example: Using Symbols as Object Keys:
let sym3 = Symbol('id');
let user = {
    [sym3]: 101
};

console.log(user[sym3]);  // 101

// Summary of Iteration in Primitive Data Types
// Iterable: Strings are iterable because they behave like arrays of characters, and JavaScript defines them as such.

// Non-Iterable: Numbers, booleans, null, undefined, and symbols are not iterable due to their atomic nature. They are standalone values, not sequences or collections.

// Workarounds: For non-iterable types, such as numbers, converting them to strings allows you to iterate over their "parts" (e.g., digits for numbers).
// Booleans and symbols have no such workaround, as their meaning lies in their singular value.

// Immutability: Iteration (where possible) over primitive data types does not modify the original value, reinforcing their immutable nature.

// In conclusion, iteration over primitive data types is limited primarily to strings because strings can be treated as arrays of characters.
// Other primitive types either do not have a sequence-like structure or are too atomic to support iteration. However,
// using type conversions and creative programming approaches, we can still interact with and manipulate these types effectively, even without direct iteration.
