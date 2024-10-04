// Master Class: JavaScript Event Handlers
// JavaScript event handlers are essential for creating dynamic web applications by allowing users to interact with elements on a webpage. In this master class, we'll cover everything from the basics to more advanced concepts, including practical examples.

// 1. Introduction to Events and Event Handlers
// An event in JavaScript refers to any interaction that happens on a webpage (e.g., clicking a button, hovering over a link, scrolling, etc.). An event handler (or event listener) is a function that gets executed when a specific event occurs.

// Common Events:
// Click event: click
// Keyboard events: keydown, keyup, keypress
// Mouse events: mousemove, mouseover, mouseout
// Form events: submit, change, input
// Window events: resize, scroll

// 2. Basic Syntax: addEventListener()
// The most standard way to add an event listener is with the addEventListener() method.

// Syntax
// element.addEventListener(event, function, useCapture);

// Example: Listening to a button click event
const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('Button clicked!');
});

// Parameters:
// event: The type of event you want to listen for (e.g., 'click', 'submit').
// function: The function to execute when the event occurs (also known as the event handler).
// useCapture (optional): A boolean that indicates if the event should be captured in the capture phase (true) or the bubble phase (false). Defaults to false.

// 3. Inline Event Handlers
// An alternative to addEventListener() is using inline event handlers in HTML, but this is generally discouraged due to maintainability issues.

// <button onclick="alert('Inline handler')">Click Me</button>

// 4. Handling Events with Anonymous Functions
// Often, you'll use anonymous functions directly inside addEventListener():

document.querySelector('button').addEventListener('click', function() {
    console.log('Button was clicked!');
});

// 5. Using Named Functions as Event Handlers
// It's a good practice to define event handler functions separately and then pass them as a reference.

function handleClick() {
    alert('Button clicked!');
}
const button1 = document.querySelector('button');
button1.addEventListener('click', handleClick);

// 6. The Event Object
// When an event is triggered, JavaScript passes an event object to the handler function, which contains information about the event (e.g., target element, event type).

button.addEventListener('click', function(event) {
    console.log(event.target); // The element that was clicked
    console.log(event.type);   // The event type (e.g., "click")
});

// Common Event Object Properties:
// event.target: The element that triggered the event.
// event.type: The type of event.
// event.preventDefault(): Prevents the default behavior of the event (e.g., preventing form submission).
// event.stopPropagation(): Stops the event from bubbling up to parent elements.

// 7. Event Bubbling and Capturing
// Events in JavaScript go through two phases:

// Capture phase: The event goes from the root to the target element.
// Bubble phase: The event goes from the target element back to the root.
// By default, events bubble. However, we can choose to listen in either phase by passing true (capture) or false (bubble) as the third argument in addEventListener().

// Bubbling (default)
button.addEventListener('click', function() {
    console.log('Button clicked - bubbling phase');
}, false);

// Capturing
button.addEventListener('click', function() {
    console.log('Button clicked - capturing phase');
}, true);

// 8. Event Delegation
// Event Delegation is a technique where instead of attaching an event handler to multiple child elements, you attach it to a parent element and make use of event bubbling to catch events triggered by children.

const container = document.querySelector('#container');

container.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        alert(`Button ${event.target.textContent} clicked`);
    }
});

// 9. Removing Event Listeners
// You can remove an event listener using removeEventListener(), but the function passed to both addEventListener() and removeEventListener() must be the same.

const button2 = document.querySelector('button');
button2.addEventListener('click', handleClick);

function handleClick() {
    alert('Button clicked!');
    button.removeEventListener('click', handleClick);
}

// 10. One-Time Event Listeners
// If you want an event handler to run only once, use the { once: true } option in the addEventListener() method.

const button3 = document.querySelector('button');

button3.addEventListener('click', function() {
    alert('Button clicked only once');
}, { once: true });

// 11. Custom Events
// You can create and dispatch your own custom events using the CustomEvent constructor.

const customEvent = new CustomEvent('myEvent', {
    detail: { message: 'Custom event triggered!' }
});

document.addEventListener('myEvent', function(event) {
    console.log(event.detail.message);  // Output: Custom event triggered!
});

// Dispatch the event
document.dispatchEvent(customEvent);

// 12. Passive Event Listeners for Performance
// When working with events like scroll or touchmove, it’s beneficial to mark the event as passive to improve performance.

window.addEventListener('scroll', function() {
    console.log('User is scrolling');
}, { passive: true });

// 13. Practical Examples
// Example 1: Form Validation with submit Event
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    const input = document.querySelector('input');
    if (input.value === '') {
        event.preventDefault();  // Prevents form submission
        alert('Input cannot be empty');
    }
});

// Example 2: Drag and Drop
const draggable = document.querySelector('#draggable');
const dropzone = document.querySelector('#dropzone');

draggable.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text', event.target.id);
});

dropzone.addEventListener('dragover', function(event) {
    event.preventDefault();  // Necessary to allow dropping
});

dropzone.addEventListener('drop', function(event) {
    const data = event.dataTransfer.getData('text');
    dropzone.appendChild(document.getElementById(data));
});

// 14. Conclusion
// Event handling in JavaScript is powerful and flexible, enabling developers to create interactive web applications. Understanding event phases, event delegation, and using advanced features like custom events and passive listeners will help you build more efficient and scalable applications.

// Homework:
// Practice handling different types of events.
// Implement event delegation in a project.
// Experiment with custom events and passive listeners in a web application.
// Would you like some real-world projects or challenges to practice event handling further?
