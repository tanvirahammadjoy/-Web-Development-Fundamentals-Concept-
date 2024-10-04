// Introduction to Node.js in Depth
// Node.js is a popular, open-source, cross-platform runtime environment built on Chrome's V8 JavaScript engine that allows developers to execute JavaScript code outside of a web browser. Initially created by Ryan Dahl in 2009, Node.js has become one of the most widely used platforms for server-side and network applications.

// Key Features of Node.js
// Asynchronous and Event-Driven:

// Node.js operates on an event-driven, non-blocking I/O model. This means operations like reading files, querying a database, or handling network requests are executed asynchronously. This non-blocking behavior makes Node.js ideal for I/O-intensive tasks, where multiple operations can occur simultaneously without halting the program.
// Single-Threaded Architecture:

// Despite being asynchronous, Node.js uses a single thread for event processing. This single thread leverages an event loop, delegating blocking tasks to the background, allowing the main thread to handle new requests. This reduces the overhead associated with managing multiple threads.
// V8 Engine:

// Node.js is powered by Google's V8 engine, which compiles JavaScript to machine code, ensuring high performance. V8, known for its efficiency and speed, is crucial to Node.js's ability to handle large-scale applications.
// Package Management (npm):

// Node.js comes with npm (Node Package Manager), the largest ecosystem of open-source libraries in the world. Developers can easily install, share, and manage packages, allowing rapid development by leveraging community contributions.
// Cross-Platform:

// Node.js runs on a variety of platforms: Windows, macOS, Linux, and Unix. Developers can write code once and deploy it across different environments.
// How Node.js Works: The Event Loop
// At the heart of Node.js is its event-driven architecture and event loop. Here’s a breakdown:

// Single Thread:

// Node.js operates on a single thread and processes incoming requests using an event loop. This single-threaded model is efficient because it doesn’t require multiple threads for handling I/O tasks (which can introduce overhead in multi-threaded environments).
// The Event Loop:

// The event loop in Node.js is responsible for handling all asynchronous operations. When an operation like a database query or file read is initiated, the event loop allows other tasks to proceed while waiting for the result of the operation.
// Once the result is ready (e.g., a file is read or a query is completed), a callback function is executed, and the main thread is notified to handle the response.
// Callbacks, Promises, and Async/Await:

// Early versions of Node.js relied heavily on callbacks to manage asynchronous tasks, leading to a common issue called "callback hell" (nested callbacks). To improve code readability, Promises and async/await were introduced. These provide a cleaner way to handle asynchronous operations.
// Core Modules in Node.js
// Node.js has several built-in modules, providing various functionalities without requiring external packages. Some of the most commonly used ones include:

// 1. http:

// Enables creating HTTP servers and making HTTP requests.
const http = require("http");

const serverOne = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

serverOne.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

// 2. fs (File System):

// Allows interaction with the file system, including reading and writing files asynchronously or synchronously.
const fs = require("fs");

// Reading a file asynchronously
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 3. path:

// Provides utilities for working with file and directory paths.
const path = require("path");

// Getting the extension of a file
console.log(path.extname("file.txt")); // Output: .txt

// 4. events:

// Node.js is built around an event-driven architecture. The events module allows developers to create, emit, and listen for custom events.
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listening for an event
emitter.on("event", () => {
  console.log("An event occurred!");
});

// Emitting the event
emitter.emit("event");

// 5. os:

// Provides information about the operating system, such as memory, CPU, and network interfaces.
const os = require("os");

console.log(os.platform()); // Outputs the platform (e.g., 'win32', 'linux')

// Creating a Simple Server in Node.js

// One of the most common use cases for Node.js is building web servers. Here’s a simple example of creating an HTTP server:
const http = require("http");

const serverTwo = http.createServer((req, res) => {
  // Setting the response header and status code
  res.writeHead(200, { "Content-Type": "text/html" });

  // Response body
  res.end("<h1>Hello from Node.js Server!</h1>");
});

// Server listens on port 3000
serverTwo.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// In this example:
// We use the http module to create an HTTP server.
// The createServer method accepts a callback function that runs when a request is received.
// The res.writeHead method sets the HTTP headers, and res.end sends the response to the client.
// The server.listen method starts the server on a specified port (3000 in this case).

// Node.js Application Structure
// A typical Node.js application follows a modular structure:

// app.js (Main file):
// This file serves as the entry point of the application, where the server setup and essential configurations are done.

// routes/:
// This directory contains route handlers that define how different HTTP requests are handled.

// controllers/:
// Controllers manage the application logic, often separating the business logic from the routes.

// models/:
// Models define the structure of data (typically when working with databases). These often interact with databases like MongoDB or MySQL.

// middlewares/:
// Middlewares handle tasks like logging, authentication, and error handling before requests reach the route handlers.

// Advantages of Node.js
// Scalability:
// Its event-driven, non-blocking model makes Node.js suitable for building scalable network applications.

// Speed:
// The V8 engine provides fast execution of JavaScript, and the asynchronous nature of Node.js ensures fast I/O operations.

// Community and Ecosystem:
// npm offers a vast array of packages, allowing developers to integrate existing solutions into their applications easily.

// Full-Stack JavaScript:
// Node.js allows developers to use JavaScript for both client-side and server-side development, enabling full-stack development with a single language.

// Real-Time Applications:
// Node.js is ideal for real-time applications such as chat applications, gaming servers, and live collaboration tools, where many connections are handled simultaneously.

// Use Cases for Node.js
// Real-time Chat Applications: Its asynchronous, event-driven architecture is well-suited for real-time applications with high I/O, like chats.
// API Servers: Lightweight API servers, particularly those using REST or GraphQL.
// Microservices: Node.js can be used to build small, modular services that communicate with each other, often in cloud-native environments.
// Streaming Applications: Applications that involve processing real-time data streams, such as media streaming platforms.

// In summary, Node.js is a powerful tool for building fast, scalable server-side applications using JavaScript. Its non-blocking architecture, event-driven model, and extensive ecosystem make it a versatile choice for many types of applications.
