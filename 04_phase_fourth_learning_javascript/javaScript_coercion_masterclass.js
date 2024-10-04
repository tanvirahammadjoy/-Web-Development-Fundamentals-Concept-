// Master Class on JavaScript Coercions
// JavaScript type coercion is a fundamental concept that occurs when JavaScript converts one data type to another, either explicitly (by the programmer) or implicitly (by the engine). Understanding coercion is key to avoiding bugs and writing clean, predictable code. This masterclass will cover the following topics:

// Table of Contents
// Types in JavaScript
// What is Coercion?
// Implicit vs. Explicit Coercion
// Coercion Rules
// String Coercion
// Number Coercion
// Boolean Coercion
// The == vs === Debate
// Edge Cases & Common Pitfalls
// Best Practices
// 1. Types in JavaScript
// JavaScript has the following data types:

// Primitive Types: String, Number, Boolean, undefined, null, Symbol, BigInt
// Non-primitive Types: Object (includes Array, Function, Date, etc.)
// JavaScript is a loosely typed language, which means that variables are not bound to any specific type, allowing for type coercion.

// 2. What is Coercion?
// Coercion is the process of converting a value from one type to another, such as from a string to a number or from a boolean to a string. There are two kinds of coercion:

// Explicit Coercion: When you, the programmer, manually convert types (e.g., using Number(), String(), etc.).
// Implicit Coercion: When JavaScript automatically converts types behind the scenes based on the operation.
// 3. Implicit vs. Explicit Coercion
// Explicit Coercion:

// let str = "123";
// let num = Number(str); // Explicitly convert "123" to 123

// Implicit Coercion:

// let sum = "5" + 10; // JavaScript implicitly converts 10 to "10", then concatenates to "510"

// 4. Coercion Rules
// JavaScript follows specific rules for coercion based on the operator and the context. Let’s break them down.

// Type Conversions:

// String to Number: Converts a string to a number if the string contains valid digits.
// Number to String: Converts a number to a string if concatenation occurs.
// Boolean to Number: Converts true to 1 and false to 0.
// Operators:

// +: If one operand is a string, it will concatenate. Otherwise, it performs numeric addition.
// -, *, /, %: Always convert both operands to numbers.

// "5" + 5   // "55" (Concatenation)
// "5" - 2   // 3 (String "5" is coerced into number 5)
// "5" * 2   // 10 (String "5" is coerced into number 5)

// 5. String Coercion
// Explicit Coercion: Use the String() function.

// let num = 123;
// String(num); // "123"

// Implicit Coercion: Happens during concatenation.

// let num = 123;
// num + ""; // "123" (Implicit coercion to string)

// 6. Number Coercion
// Explicit Coercion: Use the Number() function.

let str = "123";
Number(str); // 123

// Implicit Coercion: Happens during arithmetic operations.

// let str = "123";
// str - 0; // 123 (Implicit coercion to number)

// Special Cases:

Number("abc"); // NaN (Not a number)
Number(""); // 0 (Empty string coerced to 0)

// 7. Boolean Coercion
// Values are coerced to true or false in certain contexts, like conditions (if, while, etc.).

// Truthy Values: Values that are coerced to true

// Non-zero numbers (1, -1)
// Non-empty strings ("hello")
// Objects ({}, [])
// Falsy Values: Values that are coerced to false

// false
// 0, -0
// "" (empty string)
// null
// undefined
// NaN
// Example:

if ("") {
  console.log("truthy");
} else {
  console.log("falsy");
} // Outputs "falsy"

// 8. The == vs === Debate
// == (Loose Equality): Allows coercion, so different types can be considered equal.

0 == false; // true (Number 0 coerced to false)
"" == false; // true (Empty string coerced to false)

// === (Strict Equality): No coercion. Both type and value must be the same.

0 === false; // false (No coercion)

// Rule of thumb: Always use === unless you intentionally want type coercion.

// 9. Edge Cases & Common Pitfalls
// null and undefined:

null == undefined; // true (Coerced as equal)
null === undefined; // false (Different types)

// Array coercion: Arrays can behave strangely.

// [] + []    // "" (Arrays coerced to empty strings)
// [] + {}    // "[object Object]"
// {} + []    // 0 (Due to JavaScript parsing ambiguity)

// NaN (Not a Number):

NaN === NaN; // false (NaN is never equal to itself)
Number.isNaN(NaN); // true (Use this to check NaN)

// 10. Best Practices
// Use === for equality checks: Avoids unexpected type coercions.

// Explicit Coercion: Prefer explicit type conversions to make code clearer.

String(num); // Rather than `num + ""`
Number(str); // Rather than `str - 0`

// Avoid Falsy/Truthy Comparisons: Be cautious when using truthy/falsy checks. Explicit comparisons help avoid subtle bugs.

if (value !== "") {
  // Rather than `if (value)`
}

// Be aware of edge cases: JavaScript has some quirky behaviors, especially with objects and arrays, so testing is key.

// Conclusion
// Understanding JavaScript coercions is vital for mastering the language. While implicit coercion can sometimes be useful, it often leads to unexpected results, making explicit coercion a better practice for writing robust, bug-free code.
