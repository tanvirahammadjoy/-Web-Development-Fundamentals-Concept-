// Master Class on Object-Oriented Programming (OOP) in JavaScript
// 1. Introduction to Object-Oriented Programming (OOP)
// OOP is a programming paradigm based on the concept of objects. Objects contain data in the form of properties (also called attributes) and methods (functions). OOP allows for better organization, code reuse, and more modular code structure. JavaScript supports OOP principles, making it easier to build complex and scalable applications.

// The four main pillars of OOP are:

// Encapsulation
// Inheritance
// Polymorphism
// Abstraction
// 2. Objects in JavaScript
// In JavaScript, objects can be created in various ways:

// 2.1. Object Literal Syntax
// The simplest way to create an object:

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    console.log("Car is starting...");
  },
};

console.log(car.make); // Accessing property
car.start(); // Calling method

// 2.2. Factory Functions
// A function that returns an object:

function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    start() {
      console.log(`${make} is starting...`);
    },
  };
}

const car1 = createCar("Honda", "Civic", 2022);
car1.start();

// 2.3. Constructor Functions
// Constructor functions provide a way to create objects using the new keyword:

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.start = function () {
    console.log(`${this.make} is starting...`);
  };
}

const car2 = new Car("Ford", "Mustang", 2021);
car2.start();

// 3. Encapsulation
// Encapsulation involves bundling the data (properties) and methods that operate on the data into a single unit, or object. In JavaScript, encapsulation can be implemented using functions and closures to hide internal data.

// 3.1. Private and Public Members
// In JavaScript, we can simulate private properties using closures:

function Car(make, model) {
  let speed = 0; // Private property

  this.make = make;
  this.model = model;

  this.accelerate = function () {
    speed += 10;
    console.log(`Speed is now ${speed}`);
  };

  this.getSpeed = function () {
    return speed;
  };
}

const car3 = new Car("Tesla", "Model S");
car.accelerate();
console.log(car3.getSpeed()); // Accessing private property through a public method

// In modern JavaScript, private fields are indicated with the # prefix:

class Car {
  #speed = 0; // Private field

  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  accelerate() {
    this.#speed += 10;
    console.log(`Speed is now ${this.#speed}`);
  }

  getSpeed() {
    return this.#speed;
  }
}

const car4 = new Car("Audi", "A4");
car3.accelerate();
console.log(car4.getSpeed());

// 4. Inheritance
// Inheritance allows one class to inherit properties and methods from another class, reducing redundancy and promoting code reuse.

// 4.1. Class Inheritance
// Classes can inherit from other classes using the extends keyword:

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`${this.make} is starting...`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model); // Call the parent class constructor
    this.year = year;
  }

  displayInfo() {
    console.log(`${this.year} ${this.make} ${this.model}`);
  }
}

const myCar = new Car("BMW", "X5", 2023);
myCar.start();
myCar.displayInfo();

// 4.2. Prototype-based Inheritance
// JavaScript is prototype-based, and we can add methods to an object's prototype to achieve inheritance.

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties
  this.breed = breed;
}

// Inherit methods
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();

// 5. Polymorphism
// Polymorphism allows objects of different classes to be treated as objects of a common superclass. In JavaScript, polymorphism can be achieved by method overriding and dynamic method dispatch.

// 5.1. Method Overriding
// Subclasses can override methods of their superclass:

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach((animal) => animal.speak()); // Polymorphism in action

// 6. Abstraction
// Abstraction hides complexity by exposing only the necessary parts of the object. JavaScript achieves abstraction using abstract-like methods (methods that are declared but not defined in a base class).

// JavaScript doesn’t have built-in support for abstract classes, but we can simulate it by throwing an error if an abstract method isn’t implemented:

class Vehicle {
  constructor() {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  start() {
    throw new Error("Abstract method must be implemented by subclass");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car is starting...");
  }
}

const myCar1 = new Car();
myCar1.start();

// 7. Classes in JavaScript (ES6)
// ES6 introduced a new syntax for creating objects using the class keyword. This is just syntactical sugar over JavaScript's existing prototype-based inheritance.

// 7.1. Class Declaration

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Alice", 30);
person.greet();

// 7.2. Static Methods
// Static methods are called on the class itself, not on instances:

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 3)); // Static method

// 8. Best Practices in OOP
// Single Responsibility Principle (SRP): A class should have one and only one reason to change.
// Open/Closed Principle (OCP): Classes should be open for extension but closed for modification.
// Liskov Substitution Principle (LSP): Objects of a superclass should be replaceable with objects of a subclass.
// Interface Segregation Principle (ISP): Clients should not be forced to depend on methods they do not use.
// Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules.

// 9. Conclusion
// OOP in JavaScript enables better code organization, reusability, and scalability. By mastering concepts like encapsulation, inheritance, polymorphism, and abstraction, you can create clean, modular, and maintainable code in your JavaScript applications.
