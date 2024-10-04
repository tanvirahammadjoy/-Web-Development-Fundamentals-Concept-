// Master Class: Core Modules in Node.js
// Node.js comes with a rich set of core modules that provide essential functionalities out of the box. These core modules are part of Node.js itself, so there's no need to install them separately. Below is a comprehensive guide on Node.js core modules, covering the most commonly used ones.

// 1. Understanding Core Modules in Node.js
// Node.js core modules are built into Node.js and provide various functionalities like file handling, networking, streams, and more. They are optimized for performance and are available globally, meaning you can use them in your Node.js programs without installing additional packages.

// To use a core module, you simply use the require() function:

const fs = require("fs"); // Example of requiring the 'fs' module

// 2. Commonly Used Node.js Core Modules
// 2.1 File System (fs)
// The fs module allows you to interact with the file system. It supports both synchronous and asynchronous operations.

// Read a file (Async):
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write to a file (Sync):
const fs = require("fs");
fs.writeFileSync("output.txt", "Hello, Node.js!", "utf8");
console.log("File written successfully");

// Rename a file (Async):
const fs = require("fs");

fs.rename("old.txt", "new.txt", (err) => {
  if (err) throw err;
  console.log("File renamed successfully");
});

// 2.2 Path
// The path module provides utilities for working with file and directory paths.

// Join paths:
const path = require("path");
const fullPath = path.join(__dirname, "files", "example.txt");
console.log(fullPath); // Prints: /current/dir/files/example.txt

// Get file extension:
const ext = path.extname("file.txt");
console.log(ext); // Prints: .txt

// Parse a file path:
const parsed = path.parse("/user/local/example.txt");
console.log(parsed);

// 2.3 HTTP
// The http module allows you to create web servers and handle HTTP requests and responses.

// Basic HTTP server:
const http = require("http");

const serverOne = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");
});

serverOne.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

// Routing requests:
const http = require("http");

const serverTwo = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

serverTwo.listen(3000, () => console.log("Server listening on port 3000"));

// 2.4 URL
// The url module provides utilities for URL resolution and parsing.

// Parse a URL:
const url = require("url");

const myUrlOne = new URL(
  "https://example.com:8000/pathname?id=100&status=active"
);
console.log(myUrlOne.hostname); // example.com
console.log(myUrlOne.pathname); // /pathname
console.log(myUrlOne.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active' }

// Format a URL:
const url = require("url");

const myUrlTwo = new URL("https://example.com");
myUrlTwo.pathname = "/test";
myUrlTwo.searchParams.append("id", 123);
console.log(myUrlTwo.href); // https://example.com/test?id=123

// 2.5 Events
// The events module is a fundamental part of Node.js. It allows us to create, emit, and listen to events.

// Create an Event Emitter:
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listen for an event
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

// Emit the event
emitter.emit("greet", "Alice");

// 2.6 OS
// The os module provides operating system-related utility methods and properties.

// Get OS information:
const os = require("os");

console.log("OS Platform:", os.platform()); // OS Platform: linux/darwin/win32
console.log("CPU Architecture:", os.arch()); // CPU Architecture: x64/arm
console.log("Free Memory:", os.freemem()); // Free Memory in bytes
console.log("Total Memory:", os.totalmem()); // Total Memory in bytes

// Get CPU details:
const cpus = os.cpus();
console.log(cpus); // Array of CPU core details

// 2.7 Stream
// The stream module is used to handle streaming data. Streams are used for processing data piece by piece (e.g., reading large files or sending large amounts of data over the network).

// Create a readable stream:
const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt", "utf8");
readStream.on("data", (chunk) => {
  console.log(chunk);
});

// Create a writable stream:
const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello, ");
writeStream.write("World!");
writeStream.end(); // Close the stream

// 3. Other Core Modules
// Here are some other core modules to explore:

// crypto: Provides cryptographic functionality like hashing, encryption, etc.
// zlib: Allows compression and decompression of data.
// dns: Provides DNS lookup and name resolution.
// child_process: Used for spawning child processes.
// net: Provides asynchronous network APIs for creating servers and clients.

// 4. Conclusion
// Node.js core modules are powerful tools that enable you to build a wide range of applications, from simple scripts to complex network servers. Mastering these modules will give you a strong foundation in Node.js development. You can further explore the official Node.js documentation to dive into more advanced use cases and patterns.

// By understanding and utilizing Node.js core modules effectively, you'll be able to build more efficient, scalable, and high-performing applications.
