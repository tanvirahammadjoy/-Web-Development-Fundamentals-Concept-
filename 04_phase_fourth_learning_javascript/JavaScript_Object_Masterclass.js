// Masterclass on JavaScript Objects
// JavaScript objects are a foundational concept in the language. They allow you to group data and functionalities in a structured and reusable way. Here’s a comprehensive guide, starting from the basics to advanced concepts.

// 1. What is an Object?
// An object is a collection of properties. Each property is a key-value pair, where the key is a string (or symbol) and the value can be anything, including other objects, functions, or primitive values like numbers and strings.

// Example:
let person = {
  name: "John",
  age: 30,
  job: "Developer",
};

// person is an object with properties: name, age, and job.
// 2. Accessing Object Properties

// Dot notation:
console.log(person.name); // Output: John

// Bracket notation:
console.log(person["job"]); // Output: Developer

// 3. Modifying and Adding Properties
// Objects are mutable, meaning you can change their properties or add new ones at any time.

// Modifying:
person.age = 31;

// Adding:
person.hobbies = ["coding", "reading"];
console.log(person.hobbies); // Output: ['coding', 'reading']

// 4. Removing Properties
// You can delete properties using the delete keyword.
delete person.job;
console.log(person.job); // Output: undefined

// 5. Object Methods
// Objects can also contain functions. These functions are called methods when they are part of an object.

// Example:
let car = {
  brand: "Toyota",
  model: "Corolla",
  start: function () {
    console.log("Car started");
  },
};

car.start(); // Output: Car started

// You can simplify the method syntax in modern JavaScript:
let car1 = {
  brand: "Toyota",
  model: "Corolla",
  start() {
    console.log("Car started");
  },
};

// 6. this Keyword in Objects
// In a method, this refers to the object that owns the method. It is used to access properties and methods inside the object.

// Example:
let car2 = {
  brand: "Toyota",
  model: "Corolla",
  start() {
    console.log(`Starting ${this.brand} ${this.model}`);
  },
};

car2.start(); // Output: Starting Toyota Corolla

// 7. Creating Objects: Constructor Functions and Classes
// You can create multiple similar objects using constructor functions or ES6 classes.

// Constructor Functions:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 30);
let jane = new Person("Jane", 25);

console.log(john.name); // Output: John
console.log(jane.age); // Output: 25

// ES6 Classes:
// Classes are syntactic sugar over constructor functions, making object creation and inheritance cleaner.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

let alice = new Person("Alice", 28);
alice.greet(); // Output: Hi, my name is Alice

// 8. Object Prototypes and Inheritance
// Every JavaScript object has a prototype, which is another object from which it inherits properties and methods.

// Example:
let animal = {
  eats: true,
};

let dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // Output: true (inherited from animal)
console.log(dog.barks); // Output: true

// Prototype Chain:
// When trying to access a property, JavaScript first looks in the object itself. If the property is not found, it looks up the prototype chain.

// 9. Object Destructuring
// You can extract properties from an object using destructuring.

// Example:
let person = {
  name: "John",
  age: 30,
  job: "Developer",
};

let { name, job } = person;
console.log(name); // Output: John
console.log(job); // Output: Developer

// 10. Object Shorthand Properties
// When you have variables with the same name as your object properties, you can use shorthand notation to create objects.

// Example:
let name1 = "John";
let age = 30;

let person = { name1, age };
console.log(person); // Output: { name: 'John', age: 30 }

// 11. Object Methods: Object.keys(), Object.values(), Object.entries()
// These methods allow you to work with the keys and values of an object.

// Example:
let person = {
  name: "John",
  age: 30,
  job: "Developer",
};

// Get all keys
console.log(Object.keys(person)); // Output: ['name', 'age', 'job']

// Get all values
console.log(Object.values(person)); // Output: ['John', 30, 'Developer']

// Get key-value pairs
console.log(Object.entries(person)); // Output: [['name', 'John'], ['age', 30], ['job', 'Developer']]

// 12. Object Freezing and Sealing
// Object.freeze() prevents modification of existing properties and disallows adding or removing properties.
// Object.seal() allows modification of existing properties but prevents the addition of new properties or deletion of existing ones.
// Example:
let person = { name: "John", age: 30 };
Object.freeze(person);

person.age = 31; // Error: cannot modify a frozen object
delete person.name; // Error: cannot delete properties from a frozen object

// 13. Advanced: Getter and Setter Methods
// You can define getters and setters in objects to control access to certain properties.

// Example:
let user = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(user.fullName); // Output: John Doe
user.fullName = "Jane Smith";
console.log(user.firstName); // Output: Jane
console.log(user.lastName); // Output: Smith

// 14. Conclusion
// JavaScript objects offer powerful ways to structure, manage, and manipulate data and behaviors. Mastering objects and their methods, along with concepts like prototypes, inheritance, and classes, will allow you to create more complex and efficient applications.

// We have to go in more advance do we can?

// Absolutely! Let's dive deeper into advanced JavaScript object concepts. We’ll explore topics like object immutability, prototypal inheritance in detail, mixins, closures with objects, the module pattern, and more advanced object-oriented patterns in JavaScript.

// 1. Object Immutability
// In JavaScript, objects are mutable by default. Sometimes, for security or predictability, we may want to ensure that objects can't be changed. This is where methods like Object.freeze(), Object.seal(), and deep freezing come in.

// Deep Freezing Objects
// Object.freeze() only freezes the top-level properties. If you have nested objects, you'll need to deep freeze them manually.

// Example:
function deepFreeze(obj) {
  Object.freeze(obj);

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
}

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

deepFreeze(person);

person.name = "Jane"; // Won't change
person.address.city = "Los Angeles"; // Also won't change
console.log(person.address.city); // Output: 'New York'

// 2. Prototypal Inheritance and __proto__
// JavaScript is a prototype-based language, which means that inheritance is implemented via prototypes rather than classes.

// Every JavaScript object has a hidden [[Prototype]] property that points to another object, known as its prototype. The prototype object has its own prototype, forming a chain known as the prototype chain.

// Setting Prototypes
// You can set prototypes in several ways, including using Object.create() or directly manipulating __proto__.

let animal1 = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal1, // Rabbit inherits from animal
};

console.log(rabbit.eats); // Output: true (inherited)
rabbit.walk(); // Output: Animal walks

// Prototype Methods
// Object.getPrototypeOf(obj): Retrieves the prototype of an object.
// Object.setPrototypeOf(obj, proto): Sets the prototype of an object.
// 3. Object Composition with Mixins
// Mixins are a way to achieve object composition (combining behaviors from different objects). This can be useful for sharing functionality between objects without the complexities of inheritance.

// Example:
let canFly = {
  fly() {
    console.log(`${this.name} is flying`);
  },
};

let canSwim = {
  swim() {
    console.log(`${this.name} is swimming`);
  },
};

let bird = { name: "Eagle" };
let fish = { name: "Shark" };

// Mix behaviors into bird and fish objects
Object.assign(bird, canFly);
Object.assign(fish, canSwim);

bird.fly(); // Output: Eagle is flying
fish.swim(); // Output: Shark is swimming

// 4. Closures with Objects
// Closures are a core concept in JavaScript, and combining them with objects allows you to create private state. You can hide data and expose only certain methods to interact with it.

// Example:
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
console.log(counter.getCount()); // Output: 2
counter.decrement(); // Output: 1

// Here, the variable count is private and cannot be accessed directly, but can be modified via the methods in the returned object.

// 5. The Module Pattern
// The Module Pattern is a design pattern that allows you to create a private scope for your code, making it ideal for managing the privacy of variables and functions. It's often used to encapsulate functionality and avoid global scope pollution.

// Example:
const CounterModule = (function () {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCount() {
      return count;
    },
  };
})();

CounterModule.increment(); // Output: 1
CounterModule.increment(); // Output: 2
console.log(CounterModule.getCount()); // Output: 2

// The variables inside the module (like count) are not accessible from the outside, providing encapsulation.

// 6. Factory Functions
// A factory function is a function that returns an object, allowing you to create multiple instances of similar objects without using classes or constructors.

// Example:
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, my name is ${this.name}`);
    },
  };
}

let john1 = createPerson("John", 30);
let jane1 = createPerson("Jane", 25);

john1.greet(); // Output: Hi, my name is John
jane1.greet(); // Output: Hi, my name is Jane

// Factory functions can return objects with private variables, similar to closures.

// 7. Object-Oriented Design Patterns
// JavaScript objects can implement various design patterns such as Singletons, Observers, and Strategy patterns.

// Singleton Pattern
// The Singleton pattern restricts the instantiation of a class to one object.

const Singleton = (function () {
  let instance;

  function createInstance() {
    return { message: "I am the instance" };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // Output: true (Both are the same instance)

// Observer Pattern
// The Observer pattern allows an object (called a subject) to notify a list of objects (observers) when its state changes.

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(`Observer received data: ${data}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Event 1"); // Both observers will react
subject.unsubscribe(observer1);
subject.notify("Event 2"); // Only observer2 will react

// 8. Object.defineProperty() and Property Descriptors
// JavaScript allows fine-grained control over object properties using property descriptors. These descriptors define the behavior of the properties (writable, enumerable, configurable).

// Example:
let person = {};
Object.defineProperty(person, "name", {
  value: "John",
  writable: false, // Can't be modified
  enumerable: true, // Will show up in for...in loops
  configurable: false, // Can't be deleted or reconfigured
});

console.log(person.name); // Output: John
person.name = "Jane"; // Won't change
console.log(person.name); // Output: John

// 9. Symbols as Object Keys
// Symbols provide a way to create unique keys for object properties, avoiding name collisions.

// Example:
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123, // Symbol as a key
};

console.log(user[id]); // Output: 123

// Conclusion
// By mastering these advanced concepts—immutability, closures, design patterns, and prototypes—you'll be well-equipped to build robust, maintainable applications in JavaScript. These techniques allow for better object composition, more efficient inheritance, and encapsulation of code, all crucial in complex projects.
