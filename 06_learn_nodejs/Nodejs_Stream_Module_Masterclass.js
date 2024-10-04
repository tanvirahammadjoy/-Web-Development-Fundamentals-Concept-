// Master Class on Node.js Stream Module
// The Node.js stream module is a fundamental aspect of working with I/O operations, allowing developers to process data in chunks (instead of all at once), which enhances performance and memory efficiency. This master class will guide you through the core concepts, types of streams, usage, and practical examples of the stream module.

// 1. What are Streams?
// Streams are objects in Node.js that facilitate reading and writing data piece by piece (in chunks), as opposed to buffering the entire data set before processing. This is especially useful for handling large files, real-time data, or working with network requests.

// 2. Key Characteristics of Streams
// Event-driven: Streams emit events when data is available, consumed, or errors occur.
// Memory-efficient: They handle data in small, manageable chunks.
// Asynchronous: Non-blocking I/O operations allow you to read/write data without waiting for the entire operation to complete.
// 3. Types of Streams in Node.js
// There are four main types of streams in Node.js:

// Readable Streams: These allow you to read data from a source (like a file, HTTP response, or other I/O sources).
// Writable Streams: These allow you to write data to a destination (like a file, HTTP request, etc.).
// Duplex Streams: These implement both readable and writable interfaces, meaning you can read and write to them (e.g., TCP sockets).

// Transform Streams: These are duplex streams that modify or transform the data as it is read or written (e.g., compression or encryption).

// 4. Core Methods and Events of Streams

// A. Methods
// Readable streams:
// .pipe(writable): Pipes the readable stream into a writable stream.
// .read(): Reads data from the stream.
// .setEncoding(encoding): Sets the encoding (e.g., utf8) for reading data.
// Writable streams:
// .write(chunk): Writes data to the stream.
// .end(): Signals that writing is complete.
// Duplex/Transform: Inherits methods from both readable and writable streams.

// B. Events
// data: Emitted when a chunk of data is available to be read.
// end: Emitted when there is no more data to read.
// error: Emitted when an error occurs.
// finish: Emitted when all data has been written to the stream.

// 5. How Streams Work in Node.js
// A. Readable Stream
// A readable stream can read data in small chunks (streaming the data) from a source like a file or HTTP request. Here’s an example of reading a file using a readable stream:

const fs = require("fs");

// Create a readable stream
const readableStream = fs.createReadStream("example.txt", { encoding: "utf8" });

// Handle 'data' event
readableStream.on("data", (chunk) => {
  console.log("Received data:", chunk);
});

// Handle 'end' event when reading finishes
readableStream.on("end", () => {
  console.log("No more data to read.");
});

// Handle 'error' event
readableStream.on("error", (error) => {
  console.error("An error occurred:", error);
});

// B. Writable Stream
// Writable streams allow you to write data to a destination, like a file or HTTP response:

const fs = require("fs");

// Create a writable stream
const writableStream = fs.createWriteStream("output.txt");

// Write data to the stream
writableStream.write("Hello, world!\n");
writableStream.write("This is a stream example.\n");

// Mark the end of the writing process
writableStream.end();

// Handle 'finish' event
writableStream.on("finish", () => {
  console.log("Data has been written.");
});

// Handle 'error' event
writableStream.on("error", (error) => {
  console.error("An error occurred:", error);
});

// C. Piping Streams
// Streams can be piped together. For example, piping a readable stream to a writable stream allows efficient file copying.

const fs = require("fs");

// Create a readable stream
const readableStreamTwo = fs.createReadStream("source.txt");

// Create a writable stream
const writableStreamThree = fs.createWriteStream("destination.txt");

// Pipe the readable stream into the writable stream
readableStreamTwo.pipe(writableStreamThree);

// Handle the 'finish' event
writableStreamThree.on("finish", () => {
  console.log("File copied successfully.");
});

// 6. Transform Streams
// Transform streams allow for modification of data as it passes through. For instance, you can compress a file while streaming it:

const fs = require("fs");
const zlib = require("zlib");

// Create a readable stream
const readableStreamFour = fs.createReadStream("example.txt");

// Create a transform stream (gzip)
const gzipStream = zlib.createGzip();

// Create a writable stream
const writableStreamFive = fs.createWriteStream("example.txt.gz");

// Pipe the readable stream into the gzip stream and then into the writable stream
readableStreamFour.pipe(gzipStream).pipe(writableStreamFive);

writableStreamFive.on("finish", () => {
  console.log("File compressed successfully.");
});

// 7. Buffering vs Streaming
// When dealing with large amounts of data, buffering the entire data can overwhelm memory, especially with limited resources. Streaming processes data chunk by chunk, making it highly efficient. This is especially beneficial when handling large files or real-time data like video/audio streams.

// 8. Flowing vs Non-flowing Mode in Readable Streams
// Flowing Mode: Data is read automatically and provided as fast as possible via the 'data' event.
// Non-flowing Mode: Data is read only when the .read() method is called explicitly.
// Example of controlling the flow manually:

const fs = require("fs");
const readableStreamSixth = fs.createReadStream("example.txt");

// Switch to non-flowing mode
readableStreamSixth.on("readable", () => {
  let chunk;
  while (null !== (chunk = readableStreamSixth.read())) {
    console.log("Chunk received:", chunk);
  }
});

// 9. Handling Backpressure
// Backpressure occurs when a writable stream cannot process data as quickly as a readable stream provides it. The .pipe() method handles this automatically by pausing and resuming the readable stream as needed. However, in some cases, you may want to handle backpressure manually:

const fs = require("fs");
const readableStreamSeven = fs.createReadStream("largefile.txt");
const writableStreamEight = fs.createWriteStream("outputfile.txt");

readableStreamSeven.on("data", (chunk) => {
  const isWritable = writableStreamEight.write(chunk);
  if (!isWritable) {
    readableStreamSeven.pause();
  }
});

writableStreamEight.on("drain", () => {
  readableStreamSeven.resume();
});

// 10. Practical Use Cases of Streams
// File handling: Reading/writing large files efficiently.
// Network communication: Streaming data over network sockets.
// Real-time data processing: Processing audio/video streams.
// Piping HTTP requests/responses: Handling HTTP request streams and responding with data streams.

// 11. Advanced Stream Techniques
// Stream chaining: Chain multiple streams together, such as piping from a readable to a transform stream and then to a writable stream.
// Custom streams: You can create your own readable, writable, or transform streams by extending Node.js’s stream classes.

// Example of a custom transform stream:

const { Transform } = require("stream");

class UpperCaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    // Transform the chunk to uppercase
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

const upperCaseStream = new UpperCaseTransform();

process.stdin.pipe(upperCaseStream).pipe(process.stdout);

// Conclusion
// Node.js streams are a powerful way to handle I/O operations efficiently, allowing you to process large files and real-time data without overwhelming your system's memory. Mastering streams will help you develop scalable applications and improve performance in scenarios where data is processed in chunks.
