// Introduction to Express.js
// What is Express.js? Express.js is a lightweight, unopinionated web framework for Node.js that simplifies the process of building web applications and APIs. It provides a robust set of features for creating web servers and handling HTTP requests, without enforcing a rigid structure, allowing developers to have greater flexibility.

// Relationship Between Express.js and Node.js
// Node.js is a runtime environment that allows JavaScript to be run on the server side. It handles low-level server functionality, like managing files, databases, and network operations.
// Express.js is built on top of Node.js and provides a higher-level abstraction, making it easier to work with HTTP requests, responses, routing, and middleware. Essentially, Express.js simplifies the process of building web applications in Node.js.

// Overview of Express.js
// Minimalistic: Express doesn’t impose any specific project structure or complex tools, keeping it flexible.
// Unopinionated: You can structure your application any way you want.
// Middleware: Allows easy handling of requests and responses, manipulating data before it reaches the route handlers or returns to the client.

// Routing: Simplifies the process of defining routes for different HTTP methods and URLs.
// Integration: Easily integrates with databases like MongoDB or MySQL and with front-end frameworks like React or Angular.

// Key Features of Express.js
// Routing: Built-in routing mechanism for defining URL patterns and handling HTTP requests (GET, POST, PUT, DELETE, etc.).

// Middleware: A powerful feature that allows customization of how requests and responses are handled (e.g., authentication, logging).

// Template Engines: Supports template engines like Pug, EJS, and Handlebars for dynamic HTML rendering.
// Static File Serving: Can serve static files (CSS, JavaScript, images) easily.
// Error Handling: Built-in error-handling mechanisms to simplify debugging.
// Scalability: Supports creating highly scalable applications due to its modularity.
// Integration: Works seamlessly with many database systems, front-end frameworks, and authentication systems.
// Installing and Setting Up Express.js
// Step 1: Install Node.js

// To start with Express.js, first, ensure that you have Node.js installed on your machine.
// You can download and install Node.js from the official website.
// Check if Node.js is installed:

// node -v
// npm -v

// Step 2: Initialize a New Node.js Project Create a directory for your project and navigate into it:
// mkdir my-express-app
// cd my-express-app

// Then, initialize the project:
// npm init -y

// Step 3: Install Express.js Install Express.js using npm (Node Package Manager):
// npm install express

// Creating Your First Express App
// Step 1: Setting up a Basic Express Server
// In the root of your project, create a file named app.js and set up your first Express server:

// Import the express module
const express = require("express");

// Create an instance of an Express app
const app = express();

// Define a simple route for GET requests to the homepage
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// To run the server:
// node app.js
// Now, if you open a browser and visit http://localhost:3000, you will see "Hello, World!" displayed.

// Understanding the Anatomy of an Express App

// 1. Middleware
// Middleware is any function that processes incoming requests before they reach the route handlers. Examples include logging requests, parsing JSON bodies, or handling authentication.

// Example of Middleware:
// A middleware function that logs the request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Move to the next middleware or route handler
});

// 2. Routes
// Routes are used to define how the server responds to different requests (GET, POST, etc.) to different paths (URLs).

// Example of Routes:
// Handle GET requests to the homepage
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Handle GET requests to the about page
app.get("/about", (req, res) => {
  res.send("About Page");
});

// 3. Request-Response Cycle
// In Express.js, the server waits for incoming requests from the client, processes them using middleware and route handlers, and sends back a response.

// Request Object (req): Contains information about the client's request, such as headers, query parameters, and body data.

// Response Object (res): Contains methods for sending a response back to the client, such as res.send(), res.json(), or res.render().
// Example of Request-Response Cycle:

app.get("/user/:id", (req, res) => {
  const userId = req.params.id; // Access route parameters
  res.send(`User ID: ${userId}`);
});

// Master Class Summary
// Relationship: Express.js is a framework that runs on top of Node.js, providing tools to build web applications and APIs quickly and efficiently.

// Features: Key features include routing, middleware, static file serving, and error handling.
// Installation: Install Node.js, initialize a new project, and install Express using npm.
// First App: Set up a basic Express server with a simple route and understand the anatomy of an Express app, focusing on middleware, routing, and the request-response cycle.
// By following these steps, you will have a foundational understanding of Express.js and be ready to explore more advanced features like handling POST requests, using templating engines, or connecting to databases.
