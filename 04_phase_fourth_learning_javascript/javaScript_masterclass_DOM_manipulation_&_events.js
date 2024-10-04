// Masterclass on DOM Manipulation & Events in JavaScript
// Objective:
// By the end of this masterclass, you will have a strong understanding of how to manipulate the DOM (Document Object Model) using JavaScript, handle events, and build interactive web pages. We'll cover practical techniques and concepts with examples.

// 1. Introduction to the DOM
// The DOM is a programming interface that represents the structure of a webpage. It transforms an HTML document into a tree-like structure, where each element (tag) is represented as a node, allowing JavaScript to interact with and modify the structure, style, and content.

// Key DOM Concepts:
// Document Object: The root of the DOM tree. You interact with it using document.
// Nodes: Elements (<div>, <span>, etc.), attributes, text content, etc., are all nodes.
// Parent-Child Hierarchy: The DOM has a hierarchical structure where elements are nested as parent-child relationships.
// Accessing DOM Elements
// You can access elements using various methods:

// Accessing elements by ID
const element1 = document.getElementById("myId");

// Accessing elements by class name
// const elements = document.getElementsByClassName('myClass');

// Accessing elements by tag name
const elements2 = document.getElementsByTagName('div');

// Accessing elements using query selectors (more flexible)
const element3 = document.querySelector('.myClass');  // Single element
const elements4 = document.querySelectorAll('.myClass');  // All matching elements

// 2. DOM Manipulation
// Once you've accessed elements, you can manipulate them by modifying their properties, attributes, and styles, or by adding/removing elements.

// Modifying Content
// You can modify the text, HTML content, or attributes of an element.

// Modify inner text
element1.textContent = "New Text";

// Modify inner HTML
element2.innerHTML = "<strong>New HTML Content</strong>";

// Modify an attribute (e.g., setting an image source)
element3.setAttribute("src", "newImage.jpg");

// Modifying Styles
// You can change the style of elements dynamically.
element4.style.color = "red"; // Change text color to red
element4.style.fontSize = "20px"; // Change font size

// Adding & Removing Elements
// You can create new elements or remove existing ones:

// Create a new element
const newElement = document.createElement("div");
newElement.textContent = "I am a new div!";
document.body.appendChild(newElement); // Append to body

// Remove an existing element
const elementToRemove = document.getElementById("myId");
elementToRemove.remove();

// 3. Traversing the DOM
// Navigating between nodes is essential when you need to move up or down the DOM hierarchy.

// Key DOM Traversal Methods:
// Access the parent element
const parent = element.parentElement;

// Access the first child element
const firstChild = element.firstElementChild;

// Access the last child element
const lastChild = element.lastElementChild;

// Access the next sibling
const nextSibling = element.nextElementSibling;

// Access the previous sibling
const prevSibling = element.previousElementSibling;

// Example:
{
  /* <ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul> */
}

const list = document.getElementById("list");
const secondItem = list.children[1]; // Access second list item (Item 2)
secondItem.style.color = "blue"; // Change its color to blue

// 4. Event Handling
// Event handling allows your web page to respond to user interactions such as clicks, key presses, mouse movements, etc.

// Types of Events
// Some common events:

// click: Fired when an element is clicked.
// input: Fired when the value of an input changes.
// keydown/keyup: Fired when a key is pressed or released.
// submit: Fired when a form is submitted.
// Adding Event Listeners
// You can add event listeners to handle events and respond with custom logic.

const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});

// Removing Event Listeners
// If necessary, you can also remove event listeners.

function handleClick() {
  console.log("Button clicked");
}

button.addEventListener("click", handleClick);

// Remove the event listener later
button.removeEventListener("click", handleClick);

// 5. Event Object
// When an event occurs, an event object is automatically passed to the event handler. This object contains useful information about the event (e.g., the target element, the event type, mouse position, etc.).

// Example:
button.addEventListener("click", function (event) {
  console.log(event.target); // Logs the element that triggered the event
  console.log(event.type); // Logs the event type ('click')
  console.log(event.clientX, event.clientY); // Logs the mouse coordinates
});

// 6. Event Delegation
// Event delegation allows you to handle events efficiently by taking advantage of event bubbling. Instead of adding event listeners to many child elements, you add one listener to a parent element.

// Example:
// <ul id="parentList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

const parentList = document.getElementById("parentList");
parentList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent); // Logs the clicked list item's text
  }
});

// Instead of attaching a listener to each <li>, the parent <ul> handles the clicks.

// 7. Preventing Default Behavior
// Sometimes you want to prevent the default behavior of an event, such as stopping a link from navigating away from the page.

// Example:
// <a href="https://example.com" id="link">Click me</a>

const link = document.getElementById("link");
link.addEventListener("click", function (event) {
  event.preventDefault(); // Prevents navigation
  alert("Navigation prevented!");
});

// 8. Common Patterns for DOM Manipulation & Events
// Form Validation Example
// <form id="myForm">
//   <input type="text" id="nameInput" placeholder="Enter your name" />
//   <button type="submit">Submit</button>
// </form>
// <div id="errorMessage"></div>

const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  if (nameInput.value === "") {
    event.preventDefault(); // Prevent form submission
    errorMessage.textContent = "Name is required!";
    errorMessage.style.color = "red";
  }
});

// 9. Advanced Event Handling Techniques
// Debouncing Events
// Debouncing helps in controlling high-frequency events like scroll or resize. It ensures that the event handler is called after a specified period of inactivity.

let timeout;
window.addEventListener("scroll", function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    console.log("Scrolled!");
  }, 200);
});

// Throttling Events
// Throttling ensures that the event handler is executed at regular intervals, regardless of how many times the event is triggered.

let lastExecution = 0;
window.addEventListener("resize", function () {
  const now = Date.now();
  if (now - lastExecution >= 100) {
    console.log("Resized!");
    lastExecution = now;
  }
});

// 10. Conclusion
// Mastering DOM manipulation and event handling allows you to create dynamic and interactive web applications. Understanding how to navigate the DOM, modify elements, handle events efficiently, and optimize performance through techniques like event delegation, debouncing, and throttling will enable you to build modern web interfaces.
