// In JavaScript, the value of Math.PI is immutable because it is a non-writable property of the Math object. Here's a behind-the-scenes explanation of why you can't change its value:

// 1. Property Descriptor
// JavaScript uses a concept called property descriptors to define properties of objects. These descriptors can specify whether a property is writable, configurable, or enumerable. For Math.PI, its property descriptor is set with the following attributes:

// writable: false - This means the value cannot be changed.
// configurable: false - This means the property cannot be deleted or redefined.
// enumerable: false - This means it does not show up in loops like for...in.

// 2. Defining Math.PI
// When the JavaScript engine defines Math.PI, it uses Object.defineProperty() method to set the property with specific descriptors. Here’s a simplified version of what happens internally:

Object.defineProperty(Math, "PI", {
  value: 3.141592653589793,
  writable: false, // Cannot be changed
  enumerable: false, // Does not show up in loops
  configurable: false, // Cannot be deleted or redefined
});

// 3. Why Immutable?
// The immutability of Math.PI (and other constants in the Math object) ensures that critical mathematical constants remain consistent throughout the program's execution. This consistency is crucial for calculations and prevents accidental or intentional modifications that could lead to incorrect results.

// 4. JavaScript Strict Mode
// In strict mode, trying to change Math.PI will throw an error:

("use strict");
Math.PI = 3; // Throws TypeError: Cannot assign to read only property 'PI' of object '#<Math>'

// In non-strict mode, the assignment will silently fail without changing the value.

// By making Math.PI non-writable, JavaScript enforces the reliability and accuracy of mathematical constants, keeping your calculations safe from unintended side effects.

// How can we make our own property like pi?
// To create your own property like Math.PI—that is, a property that is immutable (non-writable, non-configurable, and non-enumerable)—you can use the Object.defineProperty() method. This allows you to define a property on an object with specific attributes, including making it read-only.

// Here’s how you can do it:

// Step-by-Step Guide
// Choose an Object: Decide on the object where you want to define your property. You can define it on existing objects like Math, or on a custom object.

// Use Object.defineProperty(): Use this method to define the property with specific descriptors.

// Example: Creating a Read-Only Property
// Let’s create a custom object with a read-only property called MY_CONSTANT:

// Create an empty object or use an existing one
const myObject = {};

// Define the property with Object.defineProperty
Object.defineProperty(myObject, "MY_CONSTANT", {
  value: 42, // Set the constant value
  writable: false, // Prevents the value from being changed
  enumerable: false, // Prevents the property from showing up in loops
  configurable: false, // Prevents the property from being deleted or redefined
});

// Attempt to change the value (will fail silently or throw an error in strict mode)
myObject.MY_CONSTANT = 100;

console.log(myObject.MY_CONSTANT); // Output: 42

// Key Points:
// Writable: Setting writable: false ensures the value of the property cannot be changed.
// Configurable: Setting configurable: false prevents the property from being deleted or having its attributes modified.
// Enumerable: Setting enumerable: false keeps the property from appearing in loops like for...in.
// Verification of Property Attributes
// To verify that your property has been set correctly, you can use Object.getOwnPropertyDescriptor():

console.log(Object.getOwnPropertyDescriptor(myObject, "MY_CONSTANT"));
// Output:
// {
//   value: 42,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// This approach allows you to create properties that behave exactly like Math.PI, ensuring they remain constant and cannot be modified accidentally or intentionally within your code.

// How to verify pi?
// To verify the value and the immutability of Math.PI, you can check its value, attempt to change it, and inspect its property descriptor. Here's how you can do it:

// 1. Check the Value of Math.PI
// You can start by checking the value of Math.PI to confirm it matches the known mathematical constant:

console.log(Math.PI); // Output: 3.141592653589793

// 2. Attempt to Change Math.PI
// Try to modify Math.PI and see what happens:

Math.PI = 3; // Attempt to change the value

console.log(Math.PI); // Output: 3.141592653589793

// Even after trying to assign a new value, Math.PI remains unchanged, demonstrating that it is read-only.

// 3. Inspect the Property Descriptor
// Use Object.getOwnPropertyDescriptor() to inspect the property descriptor of Math.PI:

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// Output:
// {
//   value: 3.141592653589793,
//   writable: false,       // Cannot be changed
//   enumerable: false,     // Does not show up in loops
//   configurable: false    // Cannot be deleted or redefined
// }

// Explanation of the Output:
// value: Shows the actual value of Math.PI, which is approximately 3.141592653589793.
// writable: false confirms that the value cannot be changed.
// enumerable: false means the property won't appear in enumeration (like in for...in loops).
// configurable: false indicates that the property cannot be deleted or redefined.
// Strict Mode Check
// If you want to see an error when trying to modify Math.PI, you can use strict mode:

("use strict");

try {
  Math.PI = 3; // Throws an error in strict mode
} catch (e) {
  console.log(e.message); // Output: Cannot assign to read only property 'PI' of object '#<Math>'
}

// This verification process confirms that Math.PI is a constant value defined by JavaScript that cannot be modified or redefined, ensuring its immutability and reliability across all calculations.
