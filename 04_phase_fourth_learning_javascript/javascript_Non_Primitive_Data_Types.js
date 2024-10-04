// In JavaScript, we typically handle non-primitive data types (objects, arrays, maps, sets) using simpler,
// more direct syntax without wrapping them in classes. Below is an overview of the normal syntax for common
// operations on these types.

// 1. Object Syntax
// Objects in JavaScript are used to store collections of key-value pairs.

// Creating an Object:
const user = {
  name: "John",
  age: 30,
};

// Accessing Object Properties:
// Dot notation:
console.log(user.name); // "John"

// Bracket notation:
console.log(user["age"]); // 30

// Adding/Modifying Properties:
user.email = "john@example.com"; // Add new property
user.age = 31; // Modify existing property

// Deleting a Property:
delete user.age;

// 2. Array Syntax
// Arrays are used to store lists of items.

// Creating an Array:
const fruits = ["Apple", "Banana", "Orange"];

// Accessing Array Elements:
console.log(fruits[0]); // "Apple"

// Adding Elements:
// Using push to add at the end:
fruits.push("Grapes");

// Using unshift to add at the beginning:
fruits.unshift("Mango");

// Removing Elements:
// Using pop to remove from the end:
fruits.pop();

// Using shift to remove from the beginning:
fruits.shift();

// Using splice to remove by index:
fruits.splice(1, 1); // Removes "Banana"

// 3. Map Syntax
// Maps are used for key-value pairs where keys can be of any data type.
// Creating a Map:
const cityMap = new Map();

// Setting Key-Value Pairs:
cityMap.set("NY", "New York");
cityMap.set(1, "First City");

// Accessing Values:
console.log(cityMap.get("NY")); // "New York"

// Deleting a Key:
cityMap.delete("NY");

// Checking if a Key Exists:
console.log(cityMap.has(1)); // true

// 4. Set Syntax
// Sets store unique values, meaning no duplicates are allowed.

// Creating a Set:
const numberSet = new Set([1, 2, 3]);

// Adding Values:
numberSet.add(4);
numberSet.add(2); // Won't add as 2 is already in the set

// Deleting Values:
numberSet.delete(3);

// Checking for a Value:
console.log(numberSet.has(1)); // true

// Getting the Size of the Set:
console.log(numberSet.size); // 3

// 5. Utility Functions
// In normal syntax, we use standard JavaScript functions to handle operations on these types.

// Iterating Over Arrays:
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Iterating Over Objects:
// Using for...in or Object.keys():
for (const key in user) {
  console.log(key, user[key]);
}

// OR
Object.keys(user).forEach((key) => {
  console.log(key, user[key]);
});

// Iterating Over Maps:
cityMap.forEach((value, key) => {
  console.log(key, value);
});

// Iterating Over Sets:
numberSet.forEach((value) => {
  console.log(value);
});

// Comparison: Class Syntax vs. Regular Syntax
// Class Syntax:
// Wraps operations in a reusable and encapsulated structure (ideal for managing state or creating reusable modules).

// Regular Syntax:
// Provides simpler, more direct access to the data without the overhead of defining classes.

// For example, in the class-based approach for managing an object, you might use:
master.createObject("user", { name: "John", age: 30 });

// In regular syntax, you would simply do:
const user = { name: "John", age: 30 };

// Both approaches work, but the class syntax offers more abstraction and control, while the regular syntax is more straightforward for everyday tasks.

class NonPrimitiveMasterClass {
  constructor() {
    this.data = {};
  }

  // Object related operations
  createObject(key, value) {
    this.data[key] = value;
    return this.data;
  }

  getObjectValue(key) {
    return this.data[key] ? this.data[key] : "Key not found!";
  }

  deleteObjectKey(key) {
    if (this.data[key]) {
      delete this.data[key];
      return `${key} deleted!`;
    }
    return "Key does not exist!";
  }

  // Array related operations
  createArray(key, array = []) {
    this.data[key] = array;
    return this.data[key];
  }

  pushToArray(key, value) {
    if (Array.isArray(this.data[key])) {
      this.data[key].push(value);
      return this.data[key];
    }
    return `${key} is not an array!`;
  }

  removeFromArray(key, index) {
    if (Array.isArray(this.data[key]) && this.data[key][index] !== undefined) {
      this.data[key].splice(index, 1);
      return this.data[key];
    }
    return "Invalid index or key!";
  }

  // Map related operations
  createMap(key) {
    this.data[key] = new Map();
    return this.data[key];
  }

  setMapValue(key, mapKey, value) {
    if (this.data[key] instanceof Map) {
      this.data[key].set(mapKey, value);
      return this.data[key];
    }
    return `${key} is not a Map!`;
  }

  getMapValue(key, mapKey) {
    if (this.data[key] instanceof Map) {
      return this.data[key].get(mapKey)
        ? this.data[key].get(mapKey)
        : "Map key not found!";
    }
    return `${key} is not a Map!`;
  }

  // Set related operations
  createSet(key) {
    this.data[key] = new Set();
    return this.data[key];
  }

  addToSet(key, value) {
    if (this.data[key] instanceof Set) {
      this.data[key].add(value);
      return this.data[key];
    }
    return `${key} is not a Set!`;
  }

  deleteFromSet(key, value) {
    if (this.data[key] instanceof Set) {
      if (this.data[key].has(value)) {
        this.data[key].delete(value);
        return `${value} deleted from ${key}!`;
      }
      return `${value} not found in the Set!`;
    }
    return `${key} is not a Set!`;
  }

  // Utility methods
  getAllData() {
    return this.data;
  }

  clearData() {
    this.data = {};
    return "All data cleared!";
  }
}

// Example usage:
const master = new NonPrimitiveMasterClass();

// Object operations
console.log(master.createObject("user", { name: "John", age: 30 }));
console.log(master.getObjectValue("user"));

// Array operations
console.log(master.createArray("fruits", ["Apple", "Banana"]));
console.log(master.pushToArray("fruits", "Orange"));
console.log(master.removeFromArray("fruits", 1));

// Map operations
console.log(master.createMap("cityMap"));
console.log(master.setMapValue("cityMap", "NY", "New York"));
console.log(master.getMapValue("cityMap", "NY"));

// Set operations
console.log(master.createSet("numberSet"));
console.log(master.addToSet("numberSet", 10));
console.log(master.deleteFromSet("numberSet", 10));

// Utility operations
console.log(master.getAllData());
console.log(master.clearData());

// Explanation:
// Object Operations:

// createObject: Creates an object stored with a key.
// getObjectValue: Retrieves the value of a specific key in the object.
// deleteObjectKey: Deletes a key-value pair from the object.
// Array Operations:

// createArray: Initializes an array associated with a key.
// pushToArray: Adds a value to an existing array.
// removeFromArray: Removes an element from an array by its index.
// Map Operations:

// createMap: Creates a new Map object.
// setMapValue: Adds a key-value pair to a map.
// getMapValue: Retrieves a value from a map.
// Set Operations:

// createSet: Initializes a Set.
// addToSet: Adds an element to a set.
// deleteFromSet: Removes an element from a set.
// Utility Methods:

// getAllData: Returns all the stored data (objects, arrays, maps, sets).
// clearData: Clears all the data stored in the instance.
// This class offers a flexible way to manage non-primitive data types (Objects, Arrays, Maps, and Sets) with various utility functions to handle different types of operations.

// In JavaScript, the for...in loop is specifically designed for iterating over the enumerable properties of objects.
// Let's break down the behavior of for...in, for...of, and other loops when used with objects, arrays, maps, and sets.

// 1. Using for...in Loop
// Purpose: Iterates over the keys (property names) of an object.
// Works with: Objects, arrays, maps, and sets (but not recommended for arrays).

// Examples:
// Objects:
const user = { name: "Alice", age: 25 };
for (const key in user) {
  console.log(key, user[key]); // name Alice, age 25
}

// Arrays:
const fruits1 = ["Apple", "Banana", "Cherry"];
for (const index in fruits1) {
  console.log(index, fruits1[index]); // 0 Apple, 1 Banana, 2 Cherry
}

// Maps:
const cityMap1 = new Map([
  ["NY", "New York"],
  ["LA", "Los Angeles"],
]);
for (const key in cityMap1) {
  console.log(key); // Will not work; returns nothing.
}

// Sets:
const numberSet1 = new Set([1, 2, 3]);
for (const value in numberSet1) {
  console.log(value); // Will not work; returns nothing.
}

// 2. Why for...in is Not Recommended for Arrays
// Using for...in for arrays is not recommended because it iterates over all enumerable properties,including inherited properties.
// This can lead to unexpected results if any non-standard properties have been added to the array.

// 3. Using for...of Loop
// Purpose: Iterates over the values of iterable objects (like arrays, strings, maps, and sets).
// Works with: Arrays, strings, maps, sets, and other iterable objects, but not objects directly.

// Examples:
// Arrays:
const fruits2 = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits2) {
  console.log(fruit); // Apple, Banana, Cherry
}

// Maps:
const cityMap2 = new Map([
  ["NY", "New York"],
  ["LA", "Los Angeles"],
]);
for (const [key, value] of cityMap2) {
  console.log(key, value); // NY New York, LA Los Angeles
}

// Sets:
const numberSet2 = new Set([1, 2, 3]);
for (const number of numberSet2) {
  console.log(number); // 1, 2, 3
}

// 4. Using Other Loops: forEach, map, etc.
// Arrays:
// forEach:
const fruits3 = ["Apple", "Banana", "Cherry"];
fruits3.forEach((fruit, index) => {
  console.log(index, fruit); // 0 Apple, 1 Banana, 2 Cherry
});

// Maps:
// forEach:
const cityMap3 = new Map([
  ["NY", "New York"],
  ["LA", "Los Angeles"],
]);
cityMap3.forEach((value, key) => {
  console.log(key, value); // NY New York, LA Los Angeles
});

// Sets:
// forEach:
const numberSet3 = new Set([1, 2, 3]);
numberSet3.forEach((value) => {
  console.log(value); // 1, 2, 3
});

// Summary of Loops and Their Usability
// for...in: Best for objects. Not suitable for arrays, maps, and sets as it won't return expected results.
// for...of: Suitable for iterable objects like arrays, maps, and sets. Does not work with plain objects.
// forEach and other array methods: Specifically for arrays and can also be used for maps and sets.

// What Happens If You Use for...in on Maps and Sets?
// Maps: for...in on a map returns nothing because maps are not ordinary objects and do not have their keys as enumerable properties.
// Sets: Similar to maps, for...in returns nothing because sets do not have their values as enumerable properties.
// In summary, the for...in loop is designed for objects and is not reliable for other types. Use for...of or specific methods like forEach for iterables like arrays, maps, and sets.
