// Master Class on JavaScript Memory Management and Heap: Relation with Data Types
// Overview
// JavaScript manages memory automatically through Garbage Collection, but understanding how it allocates, stores, and manages memory is crucial for writing efficient code, especially in performance-critical applications. In this master class, we will explore JavaScript’s memory model, focusing on heap memory, how JavaScript handles different data types, and memory management mechanisms.

// 1. JavaScript Memory Model
// JavaScript uses two main areas of memory:

// Stack Memory: Used for static data like primitive values and function call execution contexts.
// Heap Memory: Used for dynamic memory allocation, where objects and functions are stored.

// 1.1 Stack Memory
// The stack is a structured, fixed-size memory region.
// Primitive data types (e.g., numbers, strings, booleans) are stored on the stack due to their fixed size.
// Function calls are pushed onto the stack, and as soon as a function finishes executing, it is popped off the stack.

// 1.2 Heap Memory
// The heap is a large, unstructured region used for objects, arrays, and functions.
// Objects and complex data types have variable sizes and can grow, which makes heap memory ideal for them.
// While stack memory is relatively fast, accessing heap memory is slower because it involves more complex memory management.

// 2. Data Types and Memory Management
// JavaScript has two main categories of data types:

// Primitive Types
// Reference Types
// 2.1 Primitive Types
// Primitive types are stored in the stack because they are simple and have a fixed memory size. These types include:

// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt
// Each variable holding a primitive value is assigned space in the stack. Here's how they work:

// Pass by Value: When assigning or passing primitive values, JavaScript copies the value. The original and copied variables are independent of each other.
// Example:
let a = 5;   // Primitive value stored in the stack
let b = a;   // Copy of `a`'s value stored in a separate stack space
b = 10;      // Changing `b` doesn't affect `a`
console.log(a);  // Output: 5

// 2.2 Reference Types
// Reference types, such as objects, arrays, and functions, are stored in heap memory. The variable in the stack holds only a reference or pointer to the actual data in the heap.

// Pass by Reference: When passing or assigning reference types, JavaScript passes the memory address (reference) instead of a copy of the data. This means modifying the object through one reference will affect all other references.
// Example:
let obj1 = {name: "John"}; // Object is stored in the heap, reference is in the stack
let obj2 = obj1;  // `obj2` now holds the same reference as `obj1`
obj2.name = "Doe";
console.log(obj1.name);  // Output: Doe (both `obj1` and `obj2` point to the same object)

// 3. Heap and Garbage Collection
// JavaScript uses Garbage Collection (GC) to manage heap memory. GC automatically frees up memory by removing objects that are no longer reachable in the program. The primary technique used by JavaScript is mark-and-sweep.

// 3.1 Mark-and-Sweep Algorithm
// Mark phase: The GC starts at the root (global objects and execution contexts) and marks all reachable objects.
// Sweep phase: Unmarked objects are considered unreachable and are collected by the garbage collector, freeing up the memory.
// Example of unreachable object:
function createUser() {
  let user = { name: "John", age: 25 };  // Allocated in heap
  return user;
}
let user1 = createUser();  // `user1` points to the object in heap
user1 = null;  // The object is now unreachable, eligible for garbage collection

// 4. Primitive vs Reference Types in Memory
// 4.1 Primitive Type Memory Behavior
// Primitives are immutable, meaning any operation that modifies a primitive results in a new value being created in memory.
// Example:
let str = "Hello";
str = str + " World";  // A new string is created in memory
console.log(str);  // "Hello World"

// Strings, although complex, are considered primitives, and every modification creates a new string in memory.

// 4.2 Reference Type Memory Behavior
// Reference types are mutable, meaning you can change their content without creating new objects in memory.
// Example:
let arr = [1, 2, 3];
arr.push(4);  // Array is modified in place; no new array is created
console.log(arr);  // Output: [1, 2, 3, 4]

// Since the array is stored in the heap, modifying it doesn’t create a new memory space but updates the existing one.

// 5. Common Memory Management Pitfalls
// 5.1 Memory Leaks
// Memory leaks occur when memory that is no longer needed isn't released. Common causes:

// Global Variables: Objects in global scope remain in memory throughout the program’s life.
// Event Listeners: Forgotten event listeners can retain references to DOM nodes and prevent them from being garbage collected.
// Closures: A closure that captures variables can hold onto memory, especially if the closure is long-lived.
// Example of a Closure-based Memory Leak:
function leakyFunction() {
  let largeObject = new Array(1000000);  // Large object stored in heap
  return function() {
    console.log(largeObject);
  };
}
let leak = leakyFunction();  // `largeObject` will not be garbage collected because the closure holds a reference

// 5.2 Optimizing Memory Usage
// Avoid unnecessary global variables.
// Remove unused event listeners.
// Use weak references (WeakMap, WeakSet) for objects that can be garbage collected when no longer used.

// 6. Best Practices for Memory Management
// Avoid global variables to limit objects staying in memory unnecessarily.
// Use local variables as much as possible.
// Minimize object and array mutations: Copy or clone when necessary to avoid unexpected side effects.
// Clear references: For example, nullify variables when you’re done with them to signal they can be garbage collected.
// Monitor memory usage: Tools like Chrome’s DevTools can be used to monitor heap usage and identify memory leaks.

// Conclusion
// JavaScript’s memory management is largely automatic thanks to garbage collection, but understanding the underlying mechanics of stack and heap memory, primitive and reference types, and memory pitfalls like leaks helps developers write more efficient, performant code. By following memory management best practices, you can prevent memory leaks and improve the responsiveness of your applications.
