// Node.js Path Module: A Comprehensive Master Class
// The path module in Node.js is a built-in module that provides utilities for working with file and directory paths. It is especially useful for handling file paths in different operating systems (e.g., Windows vs. Unix-based systems). Let's dive deep into how to use this module, its functions, and real-world use cases.

// 1. Getting Started with the Path Module
// First, you need to import the path module in your project. Since it's a core module, you don't need to install anything.

const path = require("path");

// 2. Key Functions of the Path Module
// 2.1 path.basename()
// Returns the last part of a file path (the base name).
const filePath = "/user/local/bin/file.txt";
const baseName = path.basename(filePath);
console.log(baseName); // Output: file.txt

// You can also pass an extension as the second argument to strip it off:

const baseNameWithoutExt = path.basename(filePath, ".txt");
console.log(baseNameWithoutExt); // Output: file

// 2.2 path.dirname()
// Returns the directory part of a file path.
const dirName = path.dirname(filePath);
console.log(dirName); // Output: /user/local/bin

// 2.3 path.extname()
// Returns the extension of the file (including the dot).

const extName = path.extname(filePath);
console.log(extName); // Output: .txt

// 2.4 path.join()
// Joins multiple segments into a single path. This function ensures the correct path delimiter is used based on the operating system (i.e., / for Unix and \ for Windows).

const joinedPath = path.join("user", "local", "bin", "file.txt");
console.log(joinedPath); // Output: user/local/bin/file.txt

// 2.5 path.resolve()
// Resolves a sequence of paths into an absolute path. It starts from the rightmost path and resolves back to the root.

const resolvedPath = path.resolve("user", "local", "bin", "file.txt");
console.log(resolvedPath);
// Output: (absolute path on your system, e.g., /home/username/user/local/bin/file.txt)

// 2.6 path.normalize()
// Normalizes a given path, resolving any .. or . segments.

const normalizedPath = path.normalize("/user//local/../bin/file.txt");
console.log(normalizedPath); // Output: /user/bin/file.txt

// 2.7 path.relative()
// Returns the relative path from one location to another.

const from = "/user/local/bin";
const to = "/user/documents/file.txt";
const relativePath = path.relative(from, to);
console.log(relativePath); // Output: ../../documents/file.txt

// 2.8 path.isAbsolute()
// Checks if a path is an absolute path.

console.log(path.isAbsolute("/user/local/bin")); // Output: true
console.log(path.isAbsolute("bin/file.txt")); // Output: false

// 2.9 path.parse() and path.format()
// path.parse() splits a path into an object with properties like root, dir, base, ext, and name.
// path.format() creates a path from an object.

const parsed = path.parse("/user/local/bin/file.txt");
console.log(parsed);
// Output: { root: '/', dir: '/user/local/bin', base: 'file.txt', ext: '.txt', name: 'file' }

const formatted = path.format(parsed);
console.log(formatted); // Output: /user/local/bin/file.txt

// 3. Practical Use Cases
// 3.1 Cross-Platform File Paths
// The path module allows you to write code that works on both Windows and Unix-like systems. For example:

const myPath = path.join("folder", "subfolder", "file.txt");
console.log(myPath);
// Output (Unix): folder/subfolder/file.txt
// Output (Windows): folder\subfolder\file.txt

// 3.2 Safely Resolving Paths
// When working with relative paths, such as serving static files in a web server, using path.resolve() can prevent issues related to directory traversal.

const publicDir = path.resolve(__dirname, "public");
console.log(publicDir); // Absolute path to the public directory

// 3.3 Parsing and Manipulating Paths
// When you need to manipulate different parts of a path (e.g., getting the file name or directory), path.parse() and path.basename() are helpful.

const fileInfo = path.parse("/user/documents/report.pdf");
console.log(fileInfo.name); // Output: report
console.log(fileInfo.ext); // Output: .pdf

// 3.4 Serving Static Files in an Express.js Application
// Path utilities are commonly used in frameworks like Express to serve static files.

const express = require("express");
const app = express();
const path = require("path");

app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// 4. Best Practices
// Avoid Hardcoding Paths: Always use the path module to avoid issues with different operating systems.
// Use path.resolve() for Absolute Paths: When serving files or handling imports, path.resolve() helps to always work with absolute paths.
// Be Mindful of Path Injection Attacks: Never directly concatenate user input into paths; validate or sanitize it to avoid path traversal attacks.

// 5. Conclusion
// The path module is an essential utility in Node.js for handling file and directory paths. Its functions allow you to write clean, cross-platform compatible code while abstracting the complexity of dealing with different path formats in various operating systems.
