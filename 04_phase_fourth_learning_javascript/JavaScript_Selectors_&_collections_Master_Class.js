// Master Class on JavaScript Selectors
// JavaScript selectors are essential for interacting with the Document Object Model (DOM). They allow developers to select and manipulate elements in an HTML document. This master class will cover everything from basic to advanced usage, helping you gain a deep understanding of JavaScript selectors.

// 1. Basic DOM Selection Methods
// The most commonly used DOM selection methods are:

// 1.1. getElementById()
// Usage: Selects a single element based on its id.
// Syntax: document.getElementById("elementID")
// Example:
let header = document.getElementById("main-header");
console.log(header); // returns the element with the id 'main-header'

// 1.2. getElementsByClassName()
// Usage: Selects elements with a specific class name and returns an HTMLCollection (array-like object).
// Syntax: document.getElementsByClassName("className")
// Example:
let buttons = document.getElementsByClassName("btn");
console.log(buttons); // returns all elements with class 'btn'

// 1.3. getElementsByTagName()
// Usage: Selects elements by their tag name (e.g., div, h1, p).
// Syntax: document.getElementsByTagName("tagName")
// Example:
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // returns all <p> tags

// 2. Modern DOM Selection Methods
// These methods offer more flexibility and are widely used in modern JavaScript projects.

// 2.1. querySelector()
// Usage: Selects the first element that matches a CSS selector.
// Syntax: document.querySelector("CSSSelector")
// Example:
let firstButton = document.querySelector(".btn");
console.log(firstButton); // returns the first element with class 'btn'

// 2.2. querySelectorAll()
// Usage: Selects all elements that match a CSS selector and returns a NodeList (array-like).
// Syntax: document.querySelectorAll("CSSSelector")
// Example:
let allButtons = document.querySelectorAll(".btn");
console.log(allButtons); // returns all elements with class 'btn'

// Difference between getElementsByClassName() and querySelectorAll()
// getElementsByClassName() returns a live HTMLCollection, meaning changes to the DOM automatically update the collection.
// querySelectorAll() returns a static NodeList, which doesn’t change even if the DOM is updated.

// 3. Advanced Selection Techniques
// 3.1. Selecting by Attribute
// You can select elements by attributes using CSS-like syntax:

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes); // selects all checkbox inputs

// 3.2. Selecting Pseudo-classes
// Pseudo-classes like :nth-child, :first-child, and :last-child can also be used:

let secondListItem = document.querySelector("li:nth-child(2)");
console.log(secondListItem); // selects the second <li> in a list

// 3.3. Selecting Child Elements
// You can combine selectors to select child elements:

let navLinks = document.querySelectorAll("nav ul li a");
console.log(navLinks); // selects all <a> tags inside <li> elements inside <ul> within <nav>

// 4. Traversing the DOM
// Once you've selected an element, you can traverse through the DOM using several methods.

// 4.1. parentElement
// Usage: Access the parent of the selected element.
// Example:

let button = document.querySelector(".btn");
let parent = button.parentElement;
console.log(parent); // returns the parent of the button

// 4.2. children
// Usage: Access the child elements of a selected element.
// Example:

let nav = document.querySelector("nav");
let navItems = nav.children;
console.log(navItems); // returns all direct children of the <nav> element

// 4.3. nextElementSibling & previousElementSibling
// Usage: Access the next or previous sibling of an element.
// Example:

let firstItem = document.querySelector("li");
let nextItem = firstItem.nextElementSibling;
console.log(nextItem); // returns the next sibling of the first <li>

// 5. Performance Considerations
// 5.1. Specificity Matters
// Avoid using overly general selectors like document.querySelectorAll('div'). The more specific the selector, the better the performance.
// 5.2. Caching Selections
// Repeatedly querying the DOM can be expensive. If you're working with a particular element multiple times, it's a good idea to store it in a variable.

let nav1 = document.querySelector("nav");
// Manipulate the `nav` variable instead of repeatedly selecting `document.querySelector("nav")`

// 5.3. Minimizing Live DOM Selections
// If you don’t need live updates, prefer querySelectorAll() or NodeList over methods that return live HTMLCollections like getElementsByClassName().
// 6. Practical Examples
// 6.1. Toggling Classes on Click

let toggleBtn = document.querySelector(".toggle-btn");
let content = document.querySelector(".content");

toggleBtn.addEventListener("click", () => {
  content.classList.toggle("hidden");
});

// 6.2. Changing Text Dynamically
let heading = document.querySelector(".main-heading");
heading.textContent = "New Heading Text";

// 6.3. Updating Styles
let box = document.querySelector(".box");
box.style.backgroundColor = "blue";

// 7. Best Practices
// Be specific: Use unique IDs or specific class names to avoid selecting unintended elements.
// Use CSS for style changes: Whenever possible, use CSS classes to handle style changes, instead of manipulating styles directly in JavaScript.
// Know your browser support: Older browsers may not support newer methods like querySelector (though support is generally very good now).

// 8. Browser Compatibility
// Modern JavaScript selectors (querySelector and querySelectorAll) are supported in all modern browsers, but it's still good practice to check compatibility if you're supporting very old browsers (e.g., IE9).

// For modern projects, it's safe to rely on querySelector and querySelectorAll due to their flexibility and CSS selector support.

// 9. Conclusion
// Mastering JavaScript selectors is essential for effective DOM manipulation. Using the appropriate selector methods and understanding their performance implications will make your code more efficient and maintainable. The combination of older methods like getElementById with modern methods like querySelector provides a robust toolkit for selecting elements in any situation.

// By following best practices and understanding the nuances of each method, you'll be able to build more responsive and dynamic web applications.

// explain me about return collection by the selector and how to handle them?

// Handling Collections Returned by Selectors in JavaScript
// In JavaScript, certain DOM selection methods return collections of elements rather than a single element. Understanding how to handle these collections effectively is crucial when working with multiple DOM elements.

// 1. Types of Collections Returned by Selectors
// 1.1. HTMLCollection
// Methods that return it:

// getElementsByClassName()
// getElementsByTagName()
// Properties:

// Live collection: It automatically updates if the DOM changes.
// Array-like: Has a length property and can be accessed via index ([0], [1], [2], etc.).
// Not a true array: It doesn't have array methods like .forEach(), .map(), or .filter().
// Example:

let divs = document.getElementsByTagName("div");
console.log(divs); // HTMLCollection of all <div> elements in the document

// 1.2. NodeList
// Methods that return it:

// querySelectorAll()
// Properties:

// Static collection: It doesn't update when the DOM changes, unlike HTMLCollection.
// Array-like: Has a length property and elements can be accessed via index.
// Some array methods: NodeList can be iterated using .forEach(), but doesn't have all array methods like .map() or .filter() (though you can convert it to an array).
// Example:

let buttons1 = document.querySelectorAll(".btn");
console.log(buttons1); // NodeList of all elements with class 'btn'

// 2. How to Handle Collections
// Handling collections effectively involves accessing individual elements, looping through them, or converting them into arrays for more advanced operations.

// 2.1. Accessing Individual Elements
// You can access elements in a collection using an index, similar to arrays.

// Example:
let items2 = document.getElementsByClassName('item');
console.log(items2[0]); // Accesses the first element in the collection

// 2.2. Looping through Collections
// 2.2.1. Using for Loop
// This is a universal method to iterate through both HTMLCollection and NodeList.

// Example:
let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  console.log(items[i]); // Logs each item in the collection
}

// 2.2.2. Using forEach() on NodeList
// NodeList supports the forEach() method for easier iteration.

// Example:
let buttons2 = document.querySelectorAll(".btn");
buttons2.forEach((button) => {
  console.log(button); // Logs each button element
});

// 2.2.3. Converting HTMLCollection to an Array
// Since HTMLCollection does not support forEach(), you can convert it to an array first.

// Example:
let divs1 = document.getElementsByTagName("div");
let divArray = Array.from(divs1);

divArray.forEach((div) => {
  console.log(div); // Logs each div
});

// Alternatively, you can use the spread operator to convert it into an array:

// Example:
let divArray1 = [...document.getElementsByTagName("div")];
divArray1.forEach((div) => {
  console.log(div);
});

// 2.3. Manipulating Elements in a Collection
// Once you've selected a collection, you can loop through and manipulate each element.

// Example: Adding a class to all elements in a collection:

let items1 = document.querySelectorAll(".item");

items1.forEach((item) => {
  item.classList.add("highlight"); // Adds the 'highlight' class to each item
});

// Example: Changing text of all buttons:
let buttons3 = document.getElementsByClassName("btn");

for (let i = 0; i < buttons3.length; i++) {
  buttons3[i].textContent = "Clicked!";
}

// 2.4. Filtering Collections
// You can filter collections by converting them into arrays and using .filter().

// Example: Filtering for visible elements:
let divs3 = document.querySelectorAll("div");

let visibleDivs = Array.from(divs3).filter((div) => {
  return div.offsetParent !== null; // Filters out hidden divs
});

console.log(visibleDivs);

// 3. Key Differences Between HTMLCollection and NodeList
// Feature	HTMLCollection	NodeList
// Returned by	getElementsByClassName, getElementsByTagName	querySelectorAll
// Live or static	Live (updates when DOM changes)	Static (doesn't update when DOM changes)
// Array-like	Yes (has length, index access)	Yes (has length, index access)
// Supports forEach()	No	Yes
// Common Use Case	Selecting elements by tag or class	Selecting elements using CSS selectors

// 4. Practical Example: Working with Multiple Elements
// Scenario: You want to change the background color of all buttons with the class .btn when the page loads.
// Solution:

// Select all buttons using querySelectorAll().
// Loop through the NodeList and apply the style changes.
window.onload = () => {
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.style.backgroundColor = "lightblue"; // Change the background color of each button
  });
};

// 5. Best Practices for Handling Collections
// Use querySelectorAll() for flexibility: It returns a NodeList, which is more flexible than HTMLCollection. It also allows more complex CSS selectors.

// Convert to arrays when needed: If you need array methods like .filter(), .map(), or .reduce(), convert the collection to an array using Array.from() or the spread operator [...collection].

// Prefer forEach() for readability: If using NodeList, prefer forEach() over a for loop for better readability.

// Be mindful of live vs. static collections: Understand the difference between live (HTMLCollection) and static (NodeList). Use live collections if you expect the DOM to change frequently and want the collection to stay up-to-date automatically.

// Conclusion
// Handling collections returned by selectors is an essential skill in DOM manipulation. Understanding the differences between HTMLCollection and NodeList and knowing how to loop through and manipulate these collections allows you to efficiently manage multiple elements on a page. By applying the right method and converting to arrays when necessary, you'll be able to perform complex DOM operations easily.
