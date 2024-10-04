// Master Class on DOM Traversal and Manipulation in JavaScript (Optimized)
// 1. Introduction to the DOM (Document Object Model)
// The DOM is the representation of your HTML document as a tree of objects. Each element (e.g., div, p, span) is a node in this tree, and JavaScript allows us to traverse and manipulate this tree.

// Key DOM Concepts:

// Document: The root of the DOM, representing the entire HTML document.
// Element: A node representing an HTML element.
// Node: The base class for all DOM nodes, including elements, attributes, and text content.

// 2. Efficient DOM Traversal
// DOM traversal refers to the process of navigating between nodes in the DOM tree. There are several methods to traverse the DOM, and choosing the right one is key for performance.

// Common Traversal Methods
// document.getElementById(): Fastest way to get an element by its id. It directly accesses the node.

const element = document.getElementById("myElement");

// document.querySelector() / document.querySelectorAll(): Allows more flexible selection based on CSS selectors. These methods are slightly slower than getElementById().

const firstElement = document.querySelector(".myClass"); // First matching element
const allElements = document.querySelectorAll(".myClass"); // All matching elements

// parentNode / childNodes / firstChild / lastChild: These allow you to traverse through parent, child, and sibling nodes directly.

const parent = element.parentNode;
const children = parent.childNodes; // Includes text nodes

// Optimizing Traversal
// Cache your selectors: Avoid querying the DOM multiple times if the same element is being used frequently.

const myElement = document.getElementById("myElement");
// Instead of re-querying:
// document.getElementById('myElement').style.color = 'red';
myElement.style.color = "red";

// Limit DOM access: The DOM is much slower than working with regular JavaScript objects. Accessing the DOM repeatedly, especially in loops, is inefficient.

// Inefficient
for (let i = 0; i < 100; i++) {
  document.getElementById("item" + i).style.color = "blue";
}

// Optimized (cache)
const elements = [];
for (let i = 0; i < 100; i++) {
  elements.push(document.getElementById("item" + i));
}
elements.forEach((el) => (el.style.color = "blue"));

// 3. Manipulating the DOM
// Basic DOM Manipulation
// Changing Content:

element.textContent = "New Text"; // For text
element.innerHTML = "<b>New Content</b>"; // For HTML content

// Changing Attributes:

element.setAttribute("src", "image.jpg");
element.className = "new-class"; // For updating the class

// Adding and Removing Elements:

const newElement = document.createElement("div");
newElement.textContent = "I am new!";
document.body.appendChild(newElement); // Add element to the DOM

// Remove element
newElement.remove();

// Optimized DOM Manipulation
// Batching Changes: Instead of making multiple updates directly to the DOM, batch them using document fragments or by manipulating cloned nodes off-screen.

// Inefficient
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;
  document.body.appendChild(div);
}

// Optimized with DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}
document.body.appendChild(fragment);

// Class and Style Manipulation:

// Use classList instead of className to add, remove, or toggle classes without affecting other existing classes.

element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("hidden");

// For styling, batch changes using classList rather than modifying individual styles repeatedly.

element.style.backgroundColor = "red"; // Direct style change (ok for one-off)

// Efficient
element.classList.add("active"); // Use predefined CSS class for multiple style updates

// 4. Handling Large DOM Structures
// If you’re dealing with large DOM structures or frequently modifying a significant number of elements, here are techniques for optimizing the manipulation:

// Virtual DOM or Off-DOM Manipulation: Create elements outside the visible DOM, perform your operations, and then add them to the DOM. This reduces reflow and repaints.

const container = document.createElement("div");
for (let i = 0; i < 1000; i++) {
  const item = document.createElement("p");
  item.textContent = `Item ${i}`;
  container.appendChild(item);
}
document.body.appendChild(container);

// Avoid Layout Thrashing: Reading layout properties (e.g., offsetHeight, scrollTop) forces the browser to reflow. Avoid reading and writing styles in the same operation.

// Inefficient: causes reflow each time
const height1 = element.offsetHeight;
element.style.height = `${height1 + 10}px`;

// Optimized
const height = element.offsetHeight;
element.style.transform = `scale(${height / 100})`;

// 5. Debouncing and Throttling Events
// When manipulating the DOM in response to frequent events like scrolling or resizing, use debouncing or throttling to limit how often your logic runs.

// Debouncing: Ensures that a function is invoked only after a certain period of inactivity.

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

window.addEventListener(
  "resize",
  debounce(() => {
    // Resize logic
  }, 300)
);

// Throttling: Ensures that a function runs at most once every given interval.
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    // Scroll logic
  }, 100)
);

// 6. Avoiding Common Pitfalls
// Minimize Repaints and Reflows: Every time you manipulate the DOM, the browser may need to recalculate layout or repaint. Avoid unnecessary changes, and group multiple changes into a single operation.

// Optimize Event Delegation: Instead of adding event listeners to multiple elements, use event delegation to listen for events at a higher level in the DOM (e.g., the parent).

document.getElementById("parent").addEventListener("click", function (e) {
  if (e.target && e.target.matches("button")) {
    // Handle button click
  }
});

// Conclusion
// Efficient DOM traversal and manipulation is crucial for building performant web applications. By minimizing direct DOM access, batching operations, and avoiding layout thrashing, you can ensure your application runs smoothly even with complex interactions and large DOM structures.

// This guide should give you the foundation needed to both traverse and manipulate the DOM efficiently in JavaScript!

// How about when we add text directly by text node creating?

// When adding text to the DOM, using a text node can sometimes be a better choice, especially when you want to ensure that you're only adding plain text without the risk of inadvertently adding HTML tags (which can happen with innerHTML). Text nodes are also useful when you want to add or manipulate text content while retaining any existing elements or children.

// Creating and Adding a Text Node
// A text node represents the text content within an element. You can create a text node using document.createTextNode() and append it to an element.

// Example: Adding Text Using a Text Node
// Create a new text node
const textNode = document.createTextNode("This is a text node");

// Create an element to hold the text node
const div = document.createElement("div");

// Append the text node to the div
div.appendChild(textNode);

// Append the div to the body (or any other parent element)
document.body.appendChild(div);

// Why Use createTextNode() Over innerHTML or textContent?
// Security: When you use innerHTML, you might expose your site to XSS (Cross-Site Scripting) vulnerabilities if the content contains user input. A text node ensures that any text added is treated as plain text, not HTML, reducing security risks.

// const textNode = document.createTextNode('<b>This is treated as plain text</b>');
// div.appendChild(textNode);  // It will display as plain text, not bold HTML

// Performance: While textContent or innerHTML may seem easier, createTextNode() is often more efficient when you are dealing with complex DOM manipulations, especially when appending or inserting text within existing elements. innerHTML re-parses the entire HTML content and can trigger reflows and repaints unnecessarily.

// Example: Comparing textNode and textContent
// Using createTextNode
const textNode3 = document.createTextNode("Hello, World!");
document.body.appendChild(textNode3);

// Using textContent (also safe, but overwrites existing children)
const div1 = document.createElement("div");
div.textContent = "Hello, World!";
document.body.appendChild(div1);

// Example: Inserting Text Node Without Affecting Other Content
// Let’s say you have an existing element with content, and you want to add new text without disrupting the structure.

// Existing HTML Structure:
// <div id="content">
//     <span>Existing content</span>
// </div>

// Adding Text Without Overwriting:
// Select the container element
const contentDiv = document.getElementById("content");

// Create a new text node
const newTextNode = document.createTextNode(" This is new text");

// Append the text node to the div without affecting existing elements
contentDiv.appendChild(newTextNode);

// This method ensures that the existing content, such as the <span>, remains intact while adding plain text next to it.

// Example: Inserting Text Node at a Specific Position
// To insert a text node in a specific position within an element, you can use insertBefore() or insertAdjacentText():

// Create a new text node
const newText = document.createTextNode(" New text before span");

// Select the existing span element
const span = document.querySelector("#content span");

// Insert the new text node before the span element
span.parentNode.insertBefore(newText, span);

// Handling Large Text Blocks Optimally
// If you're adding large amounts of text (such as content from an API or user input), it's a good idea to use document.createTextNode() in conjunction with a document fragment to avoid performance bottlenecks:

// Create a document fragment
const fragment1 = document.createDocumentFragment();

// Add a large amount of text using a text node
const text = "Lorem ipsum... (a lot of text here)";
const textNode1 = document.createTextNode(text);

// Append the text node to the fragment
fragment.appendChild(textNode1);

// Append the fragment to the DOM
document.body.appendChild(fragment1);

// Using document fragments ensures that the DOM is only updated once, avoiding multiple reflows and repaints.

// Conclusion
// Creating text nodes directly with document.createTextNode() is a safe, efficient, and performant way to add plain text to the DOM. It avoids potential security issues associated with innerHTML and performs better than using textContent or innerHTML for frequent or complex DOM manipulations. When manipulating large amounts of text or dynamically inserting user input, text nodes are the preferred choice for both performance and security reasons.

// Why you didn’t suggest about innerText?

// You're right to point out the omission of innerText! Let's take a moment to compare innerText, textContent, and createTextNode, and understand why innerText wasn’t highlighted initially.

// Difference Between innerText, textContent, and createTextNode
// 1. innerText:
// Rendering-based: innerText returns the visible text inside an element, accounting for CSS styles like display: none or visibility: hidden. This means that if a part of the content is hidden with CSS, innerText won’t return that hidden text.

// Live update: It triggers a layout reflow because it checks the rendered content of the page, making it slower compared to textContent in cases where you don't need the layout recalculated.

// Security: Like textContent, innerText is safe from XSS attacks. If you set innerText with any HTML-like content, it will be treated as plain text.

// Example:
const element = document.querySelector(".example");
console.log(element.innerText); // Only returns visible text
element.innerText = "<b>This is bold</b>"; // Renders as plain text, not bold

// 2. textContent:
// Content-based: textContent returns the text inside an element, regardless of its visibility. It includes text from elements hidden via CSS (display: none) or that are off-screen.

// Performance: It is faster than innerText because it directly pulls the content without causing reflows or rendering calculations.

// Example:
const element = document.querySelector(".example");
console.log(element.textContent); // Returns all text, including hidden text
element.textContent = "This is plain text"; // Replaces the entire content with text

// 3. createTextNode():
// Node-based: createTextNode() creates a standalone text node and doesn’t interact directly with HTML elements until it’s inserted. It’s useful when you’re building up content piece by piece or appending multiple nodes.

// Flexibility: This is often used when you want to append text dynamically into an element without overwriting its existing content. It provides control over where and how the text is inserted.

// Example:
const textNode2 = document.createTextNode("This is a new text node");
const parent1 = document.querySelector(".example");
parent1.appendChild(textNode2); // Appends new text to existing content

// When Should You Use innerText?
// While innerText is useful, it was not initially suggested due to its specific use cases and performance concerns compared to textContent or createTextNode().

// Best Use Cases for innerText:
// When you need the rendered text, meaning you want only the visible text on the page, ignoring hidden elements.

// Example:
const element = document.querySelector(".hidden-text");
console.log(element.innerText); // Will not include hidden content

// When you’re reading text that might be affected by CSS, such as content inside elements with display: none.

// <div class="hidden-text" style="display: none;">This is hidden</div>
// <div>This is visible</div>

{
  /* <script>
  const text = document.querySelector('.hidden-text').innerText;
  console.log(text); // Returns empty string because it’s hidden
</script>; */
}

// When you want to avoid inserting potentially dangerous HTML, like innerHTML. With innerText, you can ensure that any input is treated as plain text.

// element.innerText = '<script>alert("XSS")</script>';  // Treated as text, not HTML

// Comparison of innerText vs. textContent in Performance
// In terms of performance, textContent is faster than innerText because:

// textContent does not trigger reflow: innerText needs to calculate the CSS and visible rendering of elements to return only the visible text, which can be slow if used frequently.
// textContent includes hidden elements: It doesn’t care about visibility, which makes it more straightforward for scenarios where you need all text regardless of how it’s rendered.

// When to Use Each Method:
// innerText: Use when you need to extract or modify only the visible text and are dealing with elements whose visibility changes based on CSS.
// textContent: Use when you need the entire content of the element, including hidden text, and performance is a concern.
// createTextNode(): Use when you are dynamically building up content and appending text nodes directly. It’s especially useful when working with complex DOM structures or when you want to insert text nodes in specific locations without overwriting existing content.
// Example: Comparing All Methods

// <div class="example" style="display: none;">
//     This is some <b>bold</b> text that is hidden.
// </div>

{
  /* <script>
    const element = document.querySelector('.example');

    // Using innerText (returns an empty string because it's hidden)
    console.log(element.innerText);  // ""

    // Using textContent (returns all text, including hidden text)
    console.log(element.textContent);  // "This is some bold text that is hidden."

    // Using createTextNode (adding a new text node)
    const textNode = document.createTextNode(' Appended text node');
    element.appendChild(textNode);  // Appends text but does not affect visibility
</script> */
}

// Conclusion
// innerText is useful for reading or modifying visible text content, but it can be slower because it triggers reflows and repaints.
// textContent is faster and is better suited for cases where you don’t care about CSS visibility or want to process large amounts of text efficiently.
// createTextNode() gives more granular control, especially for dynamically building up content or appending text nodes into an element without overwriting its existing structure.
// Each of these methods has its place, and the choice depends on the use case, performance requirements, and how the text content is handled in your application.
