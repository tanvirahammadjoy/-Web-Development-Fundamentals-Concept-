// Master Class on TypeScript

// 1. Introduction to TypeScript
// What is TypeScript?
// TypeScript is an open-source superset of JavaScript developed and maintained by Microsoft. It builds on JavaScript by adding static types, which means that you can define variable types and function return types during development. TypeScript code is transpiled into plain JavaScript (using the TypeScript compiler), making it runnable in any environment where JavaScript runs, including web browsers and Node.js.

// Key Points:
// Superset of JavaScript: All JavaScript code is valid TypeScript code, but TypeScript adds additional features like static types.
// Static Typing: Unlike JavaScript, where types are determined at runtime, TypeScript enables types to be specified during development, leading to fewer bugs.
// Compiled Language: TypeScript needs to be compiled (or transpiled) into JavaScript to run, using the TypeScript compiler (tsc).
// Why Use TypeScript?
// TypeScript offers several benefits that make development faster, safer, and more efficient:

// Type Safety: TypeScript's static type-checking prevents type-related runtime errors by catching issues early during development.
// Example: If a function expects a string and you pass a number, TypeScript will throw a compile-time error.
// Better Tooling Support: Many modern IDEs, like VSCode, have excellent TypeScript integration, providing features like autocompletion, intelligent code navigation, and real-time error checking.
// Improved Code Readability & Maintainability: With type definitions, your code is self-documenting, making it easier for other developers to understand.
// Scalability: TypeScript is ideal for large codebases where keeping track of types helps ensure code quality.
// Refactoring & Debugging: With type definitions, you can refactor code more confidently because TypeScript helps catch errors before they occur at runtime.
// Setting Up a TypeScript Project
// To start using TypeScript, you need to install it and configure your project. Here’s a step-by-step guide to get you started:

// Step 1: Installing TypeScript
// You can install TypeScript globally or as a local dependency in your project.

// Install Globally:
// npm install -g typescript

// This installs TypeScript globally, allowing you to use the tsc (TypeScript Compiler) command anywhere in your system.

// Install Locally:
// npm install typescript --save-dev

// This installs TypeScript as a development dependency in your project.

// Step 2: Configuring tsconfig.json
// TypeScript uses a configuration file called tsconfig.json to manage its settings. This file allows you to customize how TypeScript compiles your code.

// You can generate the tsconfig.json file using the following command:
// tsc --init

// Key Properties of tsconfig.json:
// Here are some important fields you’ll often configure:

// compilerOptions: This section allows you to customize how TypeScript compiles your code.
// target: Specifies the version of JavaScript that TypeScript should compile into (e.g., ES5, ES6, ES2020).
// "target": "ES6"

// module: Defines the module system to use (e.g., commonjs, ESNext, amd).
// "module": "commonjs"

// strict: Enforces strict type-checking rules. This is highly recommended to catch more errors during development.
// "strict": true

// outDir: Specifies where to output the compiled JavaScript files.
// "outDir": "./dist"

// rootDir: Specifies the root directory of your TypeScript files.
// "rootDir": "./src"

// include/exclude: These arrays specify which files and directories TypeScript should (or should not) compile.
// "include": ["src/**/*"],
// "exclude": ["node_modules", "dist"]

// Step 3: Writing Your First TypeScript File
// Once TypeScript is installed and configured, you can start writing TypeScript code.

// Create a file called index.ts in your src folder with the following code:

function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("TypeScript"));

// Step 4: Compiling TypeScript
// To compile your TypeScript files into JavaScript, run the following command:

// tsc

// This will generate a corresponding index.js file in your outDir (e.g., dist folder).

// Step 5: Running the Compiled JavaScript
// Once the TypeScript file has been compiled into JavaScript, you can run it using Node.js or in a browser, depending on the target environment.

// For Node.js:
// node dist/index.js

// You’ve now successfully set up a TypeScript project!
