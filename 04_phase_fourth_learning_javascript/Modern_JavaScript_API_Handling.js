// Masterclass: Modern JavaScript APIs – Handling and Behind the Scenes
// Introduction to APIs in Modern JavaScript

// APIs (Application Programming Interfaces) allow different software systems to communicate with one another. In web development, APIs enable interaction between a client (the browser) and a server (backend services). With the rise of RESTful APIs, GraphQL, and WebSockets, modern JavaScript provides various ways to fetch, send, and manage data effectively.

// Part 1: Making API Requests
// 1. Using the fetch API
// Modern JavaScript utilizes the fetch API, which is more flexible and powerful than the older XMLHttpRequest. The fetch API is promise-based and easier to handle.

// Example:
fetch("https://api.example.com/data")
  .then((response) => response.json()) // parsing the response as JSON
  .then((data) => console.log(data)) // handling the data
  .catch((error) => console.error("Error:", error)); // handling errors

// Key Features:

// Promise-based, allowing asynchronous handling.
// Returns a Response object which needs to be converted (usually to JSON).
// Can handle various types of HTTP requests: GET, POST, PUT, DELETE, etc.

// 2. Asynchronous Functions and async/await
// async/await provides a cleaner and more readable way to handle asynchronous code compared to chaining .then() and .catch().

// Example with async/await:

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();

// Benefits:

// More readable, especially for complex sequences of asynchronous operations.
// Syntactically closer to synchronous code, but with the benefits of non-blocking behavior.

// Part 2: Behind the Scenes of API Handling
// 1. The Event Loop and Asynchronous Processing
// JavaScript is single-threaded, meaning it can only do one thing at a time. However, with asynchronous APIs (like fetch), JavaScript can perform non-blocking operations. The Event Loop is responsible for managing these asynchronous tasks.

// How it works:

// Call Stack: Executes synchronous code.
// Web APIs: Includes browser-provided APIs such as fetch, setTimeout, etc.
// Callback Queue: Where callbacks are placed when Web APIs finish their execution.
// Event Loop: Monitors the Call Stack and Callback Queue. When the stack is clear, it moves callbacks from the queue into the stack.

// 2. Promises and Microtasks
// Promises have a higher priority in the microtask queue, allowing them to resolve before other callback tasks in the event loop.

// Microtasks (Promise handlers):

// Resolved as soon as the current operation completes, before going back to other tasks like setTimeout.

// Part 3: Error Handling and Timeouts
// 1. Proper Error Handling in API Requests
// When making API requests, network failures or unexpected responses can occur. Handling errors in modern JavaScript can be done using the try-catch block with async/await or .catch() with promises.

// Example:
async function postData(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

// 2. Timeouts and Aborting Fetch Requests
// Sometimes, API requests might hang or take too long. You can use the AbortController to abort a request if it exceeds a specified time.

// Example:
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000); // 5-second timeout

async function fetchWithTimeout(url) {
  try {
    const response = await fetch(url, { signal: controller.signal });
    const data = await response.json();
    clearTimeout(timeoutId);
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Request timed out");
    } else {
      console.error("Error:", error);
    }
  }
}

fetchWithTimeout("https://api.example.com/data");

// Part 4: Handling Data and Caching
// 1. Optimizing API Calls
// Making frequent API calls can be inefficient and increase server load. Here are some strategies to optimize data handling:

// Caching Responses: Cache API responses in localStorage or sessionStorage for faster access.
// Debouncing/Throttling Requests: Limit API calls when users interact with input fields or buttons frequently (e.g., search input).

// Example: Caching API data:
async function fetchDataWithCache(url) {
  const cachedData = localStorage.getItem(url);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const response = await fetch(url);
  const data = await response.json();
  localStorage.setItem(url, JSON.stringify(data));
  return data;
}

fetchDataWithCache('https://api.example.com/data').then(console.log);

// 2. Rate Limiting and Pagination
// Some APIs impose rate limits, which restrict the number of requests within a time period. Use pagination to load data in chunks rather than fetching everything at once.

// Example: Pagination Request:
async function fetchPaginatedData(page = 1) {
  const response = await fetch(`https://api.example.com/data?page=${page}`);
  const data = await response.json();
  console.log(data);
}

// Part 5: Advanced API Usage
// 1. Working with GraphQL
// GraphQL is an alternative to REST that allows clients to request only the data they need. Unlike REST, which relies on multiple endpoints, GraphQL uses a single endpoint.

// Example:
const query = `
  {
    user(id: "1") {
      name
      posts {
        title
        comments {
          text
        }
      }
    }
  }
`;

async function fetchGraphQL(query) {
  const response = await fetch('https://api.example.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });

  const data = await response.json();
  console.log(data);
}

fetchGraphQL(query);

// 2. WebSockets for Real-Time Communication
// While REST and GraphQL handle request-response models, WebSockets enable real-time communication between client and server.

// Example:
const socket = new WebSocket('wss://example.com/socket');

// Connection opened
socket.addEventListener('open', () => {
  socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', (event) => {
  console.log('Message from server ', event.data);
});

// Conclusion: Best Practices
// Efficient Error Handling: Always handle errors in API requests, including timeouts and network issues.
// Optimize for Performance: Cache frequently used data and debounce/throttle requests.
// Security: Protect APIs by implementing proper authentication (e.g., OAuth, JWT) and handling sensitive data carefully.

// Scalability: Use pagination and rate limiting for efficient API consumption.
// By mastering modern techniques for API handling, you can build faster, more reliable, and scalable JavaScript applications.
