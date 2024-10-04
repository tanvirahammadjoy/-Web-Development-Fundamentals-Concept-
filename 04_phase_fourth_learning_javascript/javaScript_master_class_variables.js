// Master Class on JavaScript Variables and Constants: var, let, and const
// In JavaScript, variables are fundamental units that store data and can be referenced throughout your program. The way variables behave and how they're declared has evolved over time, particularly with the introduction of ES6 (ECMAScript 2015). This brought let and const to complement the older var keyword. Let’s explore how these three types differ and when to use them.

// 1. var - Function Scoped (Old Way)
// Before ES6, var was the only way to declare variables in JavaScript. It comes with some unique characteristics that you should understand.

// Key Points:
// Function Scope: Variables declared with var are function-scoped, meaning they are only accessible within the function they are declared in.
// Hoisting: Variables declared with var are hoisted, meaning they are moved to the top of their scope (global or function) during the compile phase. This allows you to use the variable even before the line where it is declared.
// Re-declaration: You can re-declare a var variable without errors.
// Example:

function example() {
  console.log(a); // Outputs: undefined (hoisting)
  var a = 10;
  console.log(a); // Outputs: 10
}

example();

// Re-declaration:
var x = 5;
var x = 10; // No error, x is re-declared
console.log(x); // Outputs: 10

// Why avoid var?
// It can lead to confusing bugs due to its hoisting behavior and its lack of block-scoping (e.g., if, for, while).

// 2. let - Block Scoped (Modern)
// Introduced in ES6, let improves variable declaration by introducing block-level scoping and addressing some of the issues var had.

// Key Points:
// Block Scope: Variables declared with let are block-scoped. This means they are only accessible within the block {} in which they are defined, such as in loops, if statements, etc.
// No Hoisting like var: Variables declared with let are not hoisted in the same way as var. You cannot use them before declaration, otherwise, you'll get a ReferenceError.
// Re-assignment: Variables declared with let can be re-assigned, but cannot be re-declared in the same scope.
// Example:

function example() {
  if (true) {
    let b = 20;
    console.log(b); // Outputs: 20
  }
  //   console.log(b); // ReferenceError: b is not defined (block-scoped)
}

example();

// Re-declaration:
// let y = 5;
// let y = 10;  // Error: Identifier 'y' has already been declared

// Why use let?
// It's more predictable and safer than var for most cases due to its block-scoping and lack of hoisting.

// 3. const - Block Scoped and Immutable (Modern)
// Also introduced in ES6, const is for declaring variables that you don't want to reassign. It shares the block-scoping feature with let but has stricter re-assignment rules.

// Key Points:
// Block Scope: Like let, const is block-scoped, meaning it is only accessible within the block in which it is declared.
// No Re-assignment: Variables declared with const cannot be re-assigned after their initial assignment. This does not mean the value is immutable—if the const is an object or an array, the properties or elements can still be modified, but the variable itself cannot be reassigned.
// No Hoisting like var: Like let, const does not hoist in the same way as var, and you cannot access a const variable before declaration.
// Example:
const PI = 3.14;
PI = 3.1415; // TypeError: Assignment to constant variable.

// Objects and Arrays with const:
const person = { name: "John", age: 30 };
person.age = 31; // This is allowed, the object’s properties can change.
console.log(person.age); // Outputs: 31

person = { name: "Jane" }; // Error: Assignment to constant variable.

// Why use const?
// Use const when you want to declare a variable that should not be reassigned, ensuring immutability in terms of re-assignment.

// 4. Comparison of var, let, and const
// Feature	        var	                    let	                    const
// Scope	        Function Scope	        Block Scope	            Block Scope
// Hoisting	        Yes	                    No	                    No
// Re-declaration	Yes	                    No	                    No
// Re-assignment	Yes	                    Yes	                    No
// Best Use Case	Use sparingly (legacy)  Variables that change	Constants (no reassign)

// 5. Practical Examples
// Example 1: Hoisting with var vs let
console.log(a); // undefined (due to hoisting with `var`)
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// Example 2: Block scoping with let and const
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000); // Outputs: 0, 1, 2, 3, 4
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000); // Outputs: 5, 5, 5, 5, 5
}

// Example 3: Re-assigning let vs const
let score = 10;
score = 15; // No issue here, re-assignment is allowed.

const maxScore = 100;
maxScore = 120; // Error: Assignment to constant variable.

// 6. When to Use var, let, and const?
// var: Use it only if you’re maintaining legacy code or working in old environments. Prefer modern declarations in new projects.

// let: Use when you need a variable whose value might change during execution. It’s perfect for variables that will be reassigned or are scoped to loops, conditionals, or blocks.

// const: Use when you don’t want the variable to be reassigned. It helps in ensuring that your data stays consistent. Always prefer const unless reassignment is necessary.

// Conclusion
// To write clean and bug-free JavaScript, let and const are your go-to choices for variable declaration. Use let for variables that you need to reassign and const for values that should not be reassigned after initialization. Avoid var in modern code as it can lead to confusing scoping issues and bugs. With these principles, you can have more predictable and maintainable code.

// Next Steps:

// Practice using let and const in your projects.
// Refactor old code that uses var to use let and const where appropriate.
