// Master Class on JavaScript Web APIs & Browser Interaction
// Introduction to Web APIs
// Web APIs are interfaces provided by the browser (or other platforms) to allow developers to interact with the browser environment and web features. JavaScript interacts with these APIs to access functionalities like manipulating the DOM, handling events, fetching data, and much more. Some common Web APIs include the DOM API, Fetch API, Geolocation API, and Web Storage API.

// Categories of Web APIs:

// Document Object Model (DOM) APIs: For manipulating the structure, style, and content of web pages.
// Browser APIs: For interaction with browser features like storage, history, and network.
// Media APIs: For handling multimedia like audio and video.
// Device APIs: For interacting with device features like geolocation, battery status, and more.

// 1. Document Object Model (DOM) API
// The DOM is a tree-like structure representing the HTML elements of a webpage. JavaScript uses DOM methods to manipulate these elements.
// Core Methods for DOM Manipulation:

// Selecting Elements:
document.getElementById("id");
document.querySelector(".class");
document.querySelectorAll("div");

// Modifying Content and Attributes:
element.textContent = "Hello, World!";
element.setAttribute("src", "image.jpg");
element.classList.add("active");

// Adding/Removing Elements:
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);
newDiv.remove();

// Event Handling: JavaScript can listen to events like click, scroll, submit, etc.
button.addEventListener("click", () => alert("Clicked!"));

// 2. Fetch API (Network Requests)
// The Fetch API provides a way to make network requests (e.g., AJAX) from the browser. It allows you to fetch resources such as data from REST APIs.

// Basic Example:
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// Using async/await for cleaner syntax:
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// 3. Web Storage API (Local Storage & Session Storage)
// The Web Storage API provides mechanisms for storing key-value data in the browser.

// Local Storage: Stores data with no expiration date.
localStorage.setItem("username", "JohnDoe");
const user = localStorage.getItem("username");
localStorage.removeItem("username");

// Session Storage: Stores data for the duration of the page session.
sessionStorage.setItem("authToken", "abc123");
const token = sessionStorage.getItem("authToken");

// 4. Geolocation API
// The Geolocation API allows the browser to access the user's location (with their permission).

// Example:
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  });
}

// 5. History API (Managing Browser History)
// The History API allows developers to interact with the browser's session history, enabling SPA-like behavior.

// Navigate Through History:
history.back(); // Go back
history.forward(); // Go forward
history.go(-2); // Go 2 steps back

// Manipulating History:
history.pushState({ id: 1 }, "Page Title", "/new-url");
history.replaceState({ id: 2 }, "Another Title", "/another-url");

// 6. Web Workers API (Background Processing)
// Web Workers allow JavaScript to run in the background without blocking the main thread, improving performance in heavy computations.

// Creating a Worker:
// Create a worker script (worker.js):
// worker.js
onmessage = function (e) {
  const result = e.data[0] * e.data[1];
  postMessage(result);
};

// In the main script, use the worker:
const worker = new Worker("worker.js");
worker.postMessage([5, 10]);
worker.onmessage = function (e) {
  console.log("Result from worker:", e.data);
};

// 7. Intersection Observer API (Lazy Loading & Infinite Scrolling)
// The Intersection Observer API allows you to observe changes in the intersection of an element with the viewport. It's useful for lazy loading images or implementing infinite scroll.

// Basic Usage:
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Element is in view:", entry.target);
    }
  });
});

// const target = document.querySelector('.lazy-load');
// observer.observe(target);

// 8. File API (Handling File Uploads)
// The File API enables interaction with local files using file inputs, reading file data, and uploading files.

// Basic Example:
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    console.log("File content:", e.target.result);
  };

  reader.readAsText(file);
});

// 9. Notification API (Browser Notifications)
// The Notification API allows you to display system notifications to the user.

// Request Permission:
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    new Notification("Hello, this is a notification!");
  }
});

// 10. Drag and Drop API
// The Drag and Drop API enables web elements to be draggable.

// Basic Drag and Drop:

// Make an element draggable:
// <div draggable="true" id="draggable">Drag me!</div>

// Handle drag events in JavaScript:
const draggable = document.getElementById("draggable");
draggable.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", "dragged item");
});

const dropZone = document.getElementById("dropZone");
dropZone.addEventListener("dragover", (e) => e.preventDefault());
dropZone.addEventListener("drop", (e) => {
  const data = e.dataTransfer.getData("text");
  console.log(data); // Handle the drop
});

// 11. WebSockets API (Real-time Communication)
// WebSockets provide full-duplex communication channels over a single TCP connection.

// Example:
const socket = new WebSocket("ws://example.com/socket");
socket.onmessage = function (event) {
  console.log("Message from server:", event.data);
};
socket.send("Hello, Server!");

// Conclusion
// JavaScript Web APIs provide powerful tools for creating dynamic, interactive web applications. By leveraging these APIs, developers can interact with the browser, handle data, improve performance, and provide rich user experiences.
