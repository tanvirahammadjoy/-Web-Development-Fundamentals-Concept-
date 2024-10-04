// Master Class on Node.js File System (fs) Module
// The Node.js fs module is essential for interacting with the file system on your machine. It allows you to perform operations such as reading, writing, updating, and deleting files, as well as interacting with directories. This master class will cover both synchronous and asynchronous methods in depth, along with real-world use cases.

// 1. Introduction to the fs Module
// The fs module in Node.js provides both synchronous and asynchronous methods to work with files. It requires importing in your code:

const fs = require("fs");

// Synchronous Methods: Blocking, meaning the execution of further code pauses until the file operation is complete.
// Asynchronous Methods: Non-blocking, meaning the file operation runs in the background, allowing other operations to execute.

// 2. Basic Operations in fs
// a. Reading Files
// Asynchronous Reading: Use fs.readFile() for non-blocking file reading.

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Synchronous Reading: Use fs.readFileSync() for blocking file reading.

const data = fs.readFileSync("example.txt", "utf8");
console.log(data);

// b. Writing Files
// Asynchronous Writing: Use fs.writeFile() to write data to a file.

fs.writeFile("example.txt", "Hello, Node.js!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});

// Synchronous Writing: Use fs.writeFileSync() for blocking file writing.

fs.writeFileSync("example.txt", "Hello, Node.js!");
console.log("File written successfully");

// c. Appending to Files
// Asynchronous Appending: Use fs.appendFile() to add content to an existing file.

fs.appendFile("example.txt", "\nNew content", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Content appended");
});

// Synchronous Appending: Use fs.appendFileSync() to append data synchronously.

fs.appendFileSync("example.txt", "\nNew content");
console.log("Content appended");

// d. Deleting Files
// Asynchronous Deletion: Use fs.unlink() to delete a file.

fs.unlink("example.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted");
});

// Synchronous Deletion: Use fs.unlinkSync() for deleting a file synchronously.
fs.unlinkSync("example.txt");
console.log("File deleted");

// 3. Working with Directories
// a. Creating Directories
// Asynchronous Creation: Use fs.mkdir() to create a directory.

fs.mkdir("newDirectory", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory created");
});

// Synchronous Creation: Use fs.mkdirSync() to create a directory synchronously.
fs.mkdirSync("newDirectory");
console.log("Directory created");

// b. Reading Directories
// Asynchronous Reading: Use fs.readdir() to read the contents of a directory.
fs.readdir("newDirectory", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(files); // Output: Array of filenames
});

// Synchronous Reading: Use fs.readdirSync() to read directory contents synchronously.

const files = fs.readdirSync("newDirectory");
console.log(files);

// c. Removing Directories
// Asynchronous Deletion: Use fs.rmdir() to remove a directory (empty directories only).

fs.rmdir("newDirectory", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory removed");
});

// Synchronous Deletion: Use fs.rmdirSync() for removing a directory synchronously.
fs.rmdirSync("newDirectory");
console.log("Directory removed");

// 4. File Metadata
// You can access file metadata like size, creation time, etc., using fs.stat() or fs.lstat().

// a. Getting File Information
// Asynchronous Metadata: Use fs.stat() to get file details.
fs.stat("example.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats);
});

// Synchronous Metadata: Use fs.statSync() for synchronous file metadata.

const stats = fs.statSync("example.txt");
console.log(stats);

// Key properties of stats:

// size: Size of the file in bytes.
// isFile(): Returns true if it's a file.
// isDirectory(): Returns true if it's a directory.
// 5. Watching Files and Directories
// You can watch for changes in files or directories using fs.watch(). This is useful for file-based event systems (e.g., for live reload in development).

// Example:
fs.watch("example.txt", (eventType, filename) => {
  console.log(`File ${filename} changed: ${eventType}`);
});

// 6. Streams in File Handling
// Streams allow you to process data from files in chunks rather than reading or writing the entire file at once, which is crucial for handling large files.

// a. Readable Streams
const readable = fs.createReadStream("largeFile.txt", { encoding: "utf8" });

readable.on("data", (chunk) => {
  console.log(chunk); // Process chunks of data
});

// b. Writable Streams
const writable = fs.createWriteStream("output.txt");

writable.write("Some data");
writable.end(); // Ends the writing process

// 7. Promisified fs with fs.promises
// For those who prefer using promises (or async/await), Node.js provides a fs.promises API. Here's how you can use it:

const fsPromises = require("fs").promises;

// Example: Reading a file using promises
fsPromises
  .readFile("example.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// Example: Writing to a file using async/await
async function writeToFile() {
  try {
    await fsPromises.writeFile("example.txt", "Hello, Node.js!");
    console.log("File written successfully");
  } catch (err) {
    console.error(err);
  }
}
writeToFile();

// 8. Real-World Use Cases
// a. Creating a Simple File Server
// Node.js fs can be used to build file servers that serve HTML, CSS, or other static assets:

const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    const filePath = path.join(
      __dirname,
      req.url === "/" ? "index.html" : req.url
    );

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("File not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  })
  .listen(3000, () => {
    console.log("Server running on port 3000");
  });

// b. Logging System
// You can log information to a file asynchronously:
function logToFile(message) {
  fs.appendFile(
    "logs.txt",
    `${new Date().toISOString()} - ${message}\n`,
    (err) => {
      if (err) console.error("Error logging message:", err);
    }
  );
}
logToFile("Server started");

// 9. Best Practices and Tips
// Use asynchronous methods whenever possible to avoid blocking the event loop.
// Error handling is crucial in fs operations as files may not exist, or there may be permission issues.
// Streams should be preferred for handling large files.
// Use fs.promises or async/await for cleaner code if you are comfortable with promises.

// 10. Conclusion
// The Node.js fs module is a powerful tool for working with files and directories. Mastering both its synchronous and asynchronous capabilities, along with real-world use cases, prepares you for building file-based systems and handling file I/O efficiently. Understanding how to use streams and promises will further improve the efficiency of your file-handling operations in Node.js.
