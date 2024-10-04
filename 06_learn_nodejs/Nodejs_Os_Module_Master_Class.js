// Master Class on Node.js os Module
// The os (Operating System) module in Node.js provides methods for interacting with the operating system. It offers functions to retrieve details like system memory, CPU information, platform type, and more. Understanding how to use this module is essential for developers who want to build cross-platform applications or need detailed system diagnostics in their projects.

// 1. Introduction to the os Module
// The os module is built into Node.js and does not require any installation. You can include it by requiring the module in your file:

const os = require("os");

// Once imported, you can use various methods to access system information.

// 2. Key Methods of the os Module
// 2.1 os.arch()
// This method returns the CPU architecture of the operating system. Common values are 'x64', 'arm', etc.

// Example:

console.log(os.arch());
// Output: 'x64' or 'arm'

// 2.2 os.platform()
// Returns the platform the operating system is built on. Common platforms include 'win32', 'linux', 'darwin' (for macOS).

// Example:

console.log(os.platform());
// Output: 'win32', 'linux', or 'darwin'

// 2.3 os.type()
// Returns the operating system name. This differs slightly from os.platform() by returning a more readable name, like 'Linux', 'Darwin', or 'Windows_NT'.

// Example:

console.log(os.type());
// Output: 'Linux', 'Darwin', 'Windows_NT'

// 2.4 os.release()
// Returns the version of the operating system.

// Example:

console.log(os.release());
// Output: '10.0.19043' (on Windows), or '5.4.0-42-generic' (on Linux)

// 2.5 os.uptime()
// Returns the system uptime in seconds. This shows how long the system has been running since the last restart.

// Example:

console.log(os.uptime());
// Output: Time in seconds

// 2.6 os.totalmem()
// Returns the total amount of system memory in bytes.

// Example:

console.log(os.totalmem());
// Output: Total memory in bytes

// 2.7 os.freemem()
// Returns the amount of free system memory in bytes. This can be helpful for checking system resource availability.

// Example:

console.log(os.freemem());
// Output: Free memory in bytes

// 2.8 os.cpus()
// Returns information about each logical CPU core available in the system. Each object contains details about the core's model, speed (in MHz), and times spent in different modes (user, idle, etc.).

// Example:

console.log(os.cpus());
// Output: Array of objects describing each CPU core

// 2.9 os.networkInterfaces()
// Returns an object containing network interfaces with IP addresses and MAC addresses. This is useful for determining active network connections.

// Example:

console.log(os.networkInterfaces());
// Output: Object with network interface details

// 2.10 os.homedir()
// Returns the home directory of the current user. This is particularly useful for applications that store user-specific files.

// Example:

console.log(os.homedir());
// Output: Home directory path

// 2.11 os.hostname()
// Returns the hostname of the operating system, i.e., the network name of the machine.

// Example:

console.log(os.hostname());
// Output: Hostname of the machine

// 2.12 os.tmpdir()
// Returns the path of the temporary folder for the current operating system.

// Example:

console.log(os.tmpdir());
// Output: Temporary folder path

// 2.13 os.constants
// This object provides access to specific constants related to error codes and signal values across different operating systems.

// Example:

console.log(os.constants.signals.SIGINT);
// Output: Interrupt signal constant (usually 2)

// 3. Practical Use Cases for the os Module
// 3.1 Monitor System Resources
// You can create a simple script to monitor the system's resource usage (memory and CPU) at regular intervals:

setInterval(() => {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  console.log(`Total Memory: ${(totalMem / 1024 ** 3).toFixed(2)} GB`);
  console.log(`Used Memory: ${(usedMem / 1024 ** 3).toFixed(2)} GB`);
  console.log(`Free Memory: ${(freeMem / 1024 ** 3).toFixed(2)} GB`);
  console.log("---------------------------------------");
}, 5000);

// 3.2 Display System Information
// Build a command-line tool that displays basic system information:

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Release:", os.release());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Uptime:", `${(os.uptime() / 3600).toFixed(2)} hours`);

// 3.3 Get CPU Load
// You can fetch CPU information to analyze system load or adjust performance settings in a more dynamic application:

const cpus = os.cpus();
cpus.forEach((cpu, index) => {
  console.log(`Core ${index + 1}:`, cpu.model, `${cpu.speed} MHz`);
});

// 4. Error Handling in the os Module
// Most os module methods are synchronous and typically don’t throw errors. However, it’s good practice to use try-catch blocks when calling these methods in large applications, especially if the environment may differ from system to system.

// 5. Conclusion
// The os module in Node.js is a powerful tool for accessing and managing system-level information in a cross-platform way. Whether you are developing system monitoring tools, resource management scripts, or just need quick access to system data in your application, understanding this module will help you make your applications more efficient and informed about their running environments.

// By mastering the os module, you’ll have the ability to:

// Build tools to monitor and manage system resources.
// Develop cross-platform applications that can adapt to different operating systems.
// Enhance your applications with information about the system they are running on.

// Next Steps
// Explore combining the os module with other Node.js modules like fs (file system) or process to create advanced system utilities or tools.
