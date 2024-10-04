// Node.js HTTP Module: A Master Class
// Node.js comes with a built-in module called the HTTP Module, which enables developers to create HTTP servers and clients. This is essential for building web applications, APIs, and network services. Here's an in-depth look at its core concepts, features, and practical use.

// 1. Introduction to HTTP Module in Node.js
// Node.js HTTP module allows you to:

// Create a web server that listens for HTTP requests.
// Handle requests (GET, POST, PUT, DELETE, etc.).
// Respond to client requests.
// You don't need external libraries to use the HTTP module as it is part of the core Node.js framework.

// Importing the HTTP Module
const http = require("http");

// 2. Creating a Basic HTTP Server
// A server can be created using the createServer() method, which takes a callback function with two arguments:

// Request Object (req): Contains details about the incoming request.
// Response Object (res): Used to respond to the request.

// Example: A Simple Server
const http = require("http");

const server = http.createServer((req, res) => {
  // Set the response header (status code and content type)
  res.writeHead(200, { "Content-Type": "text/plain" });
  // Send a response to the client
  res.end("Hello, World!\n");
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

// res.writeHead(200) sets the HTTP status code (200 means OK).
// res.end() ends the response and sends the result back to the client.

// 3. Handling Different Routes
// You can handle different routes by analyzing the req.url property. Depending on the URL, you can send different responses.

// Example: Handling Multiple Routes
const http = require("http");

const serverOne = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    res.end("<h1>Welcome to Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Us</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

serverOne.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

// The URL / will display "Home Page."
// The URL /about will display "About Us."
// Any other URL will return a 404 page.

// 4. Serving HTML Files
// Instead of serving plain text, you can serve HTML files by reading them with Node’s file system (fs) module.

// Example: Serving HTML Files
const http = require("http");
const fs = require("fs");

const serverTwo = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        return res.end("500 Internal Server Error");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

serverTwo.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

// fs.readFile() is used to read the HTML file from the filesystem.
// The server serves the content of index.html for the root (/) URL.

// 5. Handling HTTP Methods (GET, POST, etc.)
// The HTTP module allows handling various HTTP methods like GET, POST, PUT, DELETE.

// Example: Handling GET and POST Requests
const http = require("http");

const serverThree = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is a GET request");
  } else if (req.method === "POST") {
    let body = "";

    // Collect data chunks
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // End of data collection
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Received POST data: ${body}`);
    });
  }
});

serverThree.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

// The GET request serves a response immediately.
// For POST, it collects the data stream in chunks and processes it after the full body is received.

// 6. Creating an HTTP Client
// Besides servers, you can use the HTTP module to make HTTP requests from a client.

// Example: Making a GET Request
const http = require("http");

http
  .get("http://api.example.com/data", (res) => {
    let data = "";

    // A chunk of data has been received
    res.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received
    res.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

// The http.get() method makes an HTTP GET request to the specified URL.
// It collects the response in chunks and processes it once all data is received.

// 7. Creating HTTPS Servers
// For secure connections, Node.js provides an https module similar to the http module, which requires SSL certificates.

// Example: Creating an HTTPS Server
const https = require("https");
const fs = require("fs");

// SSL credentials
const options = {
  key: fs.readFileSync("server-key.pem"),
  cert: fs.readFileSync("server-cert.pem"),
};

const serverFour = https.createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Secure World!\n");
});

serverFour.listen(8443, () => {
  console.log("HTTPS server running at https://127.0.0.1:8443/");
});

// https.createServer() takes SSL options (key, cert) and sets up an HTTPS server.
// Make sure to use valid SSL certificates (generated through OpenSSL or provided by a CA).

// 8. Working with JSON and APIs
// In modern applications, servers often serve and consume data in JSON format. Node.js HTTP servers can easily handle this.

// Example: Serving JSON
const http = require("http");

const serverFive = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const data = { message: "Hello, JSON World!" };
  res.end(JSON.stringify(data));
});

serverFive.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

// Set Content-Type: 'application/json' to tell the client that the response is JSON.
// JSON.stringify() converts a JavaScript object into a JSON string for transmission.

// 9. Conclusion
// The HTTP module in Node.js is versatile and forms the backbone of many web applications and APIs. Here's a summary of what you've learned:

// How to create HTTP and HTTPS servers.
// Handling routing and different HTTP methods (GET, POST).
// Serving static files like HTML.
// Making HTTP requests as a client.
// Working with JSON APIs.

// You can extend this knowledge further by exploring frameworks like Express.js, which builds on top of the HTTP module to simplify server creation and management.

// With this solid foundation, you're ready to dive deeper into server-side development and create robust, scalable web services using Node.js!
