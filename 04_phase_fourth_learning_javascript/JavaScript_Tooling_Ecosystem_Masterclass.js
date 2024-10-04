// Master Class on Tooling & Ecosystem for JavaScript
// Introduction
// The JavaScript ecosystem is vast and constantly evolving, making it both exciting and challenging for developers. Understanding the right tools and technologies can drastically improve development efficiency and code quality. This master class will guide you through the essential tooling and ecosystems that are fundamental for any JavaScript project, whether it's a small script or a full-fledged web application.

// 1. Package Management
// 1.1. NPM (Node Package Manager)
// NPM is the default package manager for Node.js and the largest software registry globally. It helps developers manage dependencies and packages in their JavaScript projects.

// Basic commands:
// npm init: Initialize a new project.
// npm install <package>: Install a package.
// npm uninstall <package>: Remove a package.
// npm update: Update installed packages.

// 1.2. Yarn
// Yarn is an alternative to NPM, offering faster and more reliable dependency management.

// Key features:
// Offline caching.
// Deterministic dependency resolution.
// yarn install: Installs packages.
// yarn add <package>: Adds a new package.

// 1.3. PNPM
// PNPM is a fast, disk space-efficient package manager that works as an alternative to NPM and Yarn.

// 2. Task Runners and Build Tools
// 2.1. Gulp
// Gulp is a task runner that allows you to automate workflows. It uses streams to process files, making it very fast for tasks like minification, compilation, and concatenation.

// Usage:
// Install via npm install gulp.
// Create a gulpfile.js to define tasks.
// Example:
const gulp = require('gulp');
gulp.task('default', () => {
  console.log('Gulp is running!');
});

// 2.2. Webpack
// Webpack is a module bundler, crucial for modern JavaScript development. It can bundle multiple files (JS, CSS, images, etc.) into a single file for optimized delivery to the browser.

// Key concepts:

// Entry: The starting point for bundling.
// Output: Where the bundled file is stored.
// Loaders: Process files other than JavaScript (e.g., CSS, images).
// Plugins: Add functionality like minification.
// Example Webpack configuration:
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

// 2.3. Vite
// Vite is a modern build tool designed for speed. It leverages native ES modules in development and bundles the app for production.

// Advantages:
// Instant server start.
// Fast hot module replacement (HMR).
// Optimal performance for large applications.

// 3. Linters and Formatters
// 3.1. ESLint
// ESLint is a linter that helps you find and fix problems in your JavaScript code. It can enforce coding standards, catch errors, and improve code quality.

// Configuration:
// Install via npm install eslint.
// Create a .eslintrc configuration file.
// Example configuration:
// json
// {
//   "extends": "eslint:recommended",
//   "env": {
//     "browser": true,
//     "node": true,
//     "es6": true
//   },
//   "rules": {
//     "no-console": "off",
//     "indent": ["error", 2]
//   }
// }

// 3.2. Prettier
// Prettier is an opinionated code formatter that ensures consistent style throughout the codebase. It can be integrated with ESLint or used independently.

// Basic commands:
// prettier --write .: Format all files in the current directory.
// Example .prettierrc configuration:
// {
//   "singleQuote": true,
//   "trailingComma": "es5"
// }

// 4. Testing Frameworks
// 4.1. Jest
// Jest is a popular testing framework from Facebook, designed for simplicity. It works seamlessly with React but can also be used for testing Node.js and vanilla JavaScript applications.

// Features:

// Built-in mocking and assertion libraries.
// Supports asynchronous code.
// Snapshot testing.
// Example test:

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

// 4.2. Mocha + Chai
// Mocha is a flexible test framework that can be combined with assertion libraries like Chai.

// Example:
const { expect } = require('chai');

describe('Array', function () {
  it('should return -1 when the value is not present', function () {
    expect([1, 2, 3].indexOf(4)).to.equal(-1);
  });
});

// 4.3. Cypress
// Cypress is an end-to-end testing framework that allows you to test user interactions in the browser.

// Advantages:
// Real-time reloading and debugging.
// Time-traveling feature to debug the state at any point.

// 5. Module Bundlers and Transpilers
// 5.1. Babel
// Babel is a JavaScript compiler that allows you to write modern JavaScript and convert it to older versions for browser compatibility.

// Common Babel configurations:

// @babel/preset-env: Compiles ES6+ code to ES5.
// @babel/preset-react: Transforms JSX for React projects.
// Example:
// {
//   "presets": ["@babel/preset-env"]
// }

// 5.2. Rollup
// Rollup is a module bundler optimized for libraries and smaller projects. It outputs smaller bundles than Webpack.

// Usage:
// Install with npm install rollup.
// Define a rollup.config.js:
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
  },
};

// 6. Development Environments
// 6.1. Visual Studio Code
// VS Code is one of the most popular editors for JavaScript development, offering extensions, linting, IntelliSense, debugging, and version control.

// Recommended extensions:
// ESLint: Enforces coding standards.
// Prettier: Ensures consistent code formatting.
// Live Server: Provides a quick development server.

// 6.2. WebStorm
// WebStorm, developed by JetBrains, is a powerful IDE for JavaScript, React, Angular, and Node.js with built-in support for many tools like Git, ESLint, and Prettier.

// 7. Version Control & Collaboration Tools
// 7.1. Git
// Git is essential for version control, enabling you to track code changes, collaborate with teams, and revert to previous versions of code.

// Basic commands:
// git init: Initialize a new repository.
// git add <file>: Stage changes.
// git commit -m "message": Commit staged changes.
// git push: Push changes to a remote repository.
// 7.2. GitHub
// GitHub provides hosting for software development and version control using Git. It enables collaboration, issue tracking, and integration with CI/CD tools like GitHub Actions.

// 8. DevOps & Continuous Integration (CI)
// 8.1. Docker
// Docker allows you to containerize your JavaScript applications, ensuring they run in the same environment across all systems.

// Basic commands:
// docker build .: Builds an image.
// docker run <image>: Runs the container.

// 8.2. Jenkins
// Jenkins is an automation server used for continuous integration and delivery pipelines.

// Setup:
// Install the Jenkins server.
// Create a pipeline that automates build, test, and deployment tasks.

// 9. Monitoring & Error Tracking
// 9.1. Sentry
// Sentry is a real-time error tracking tool that helps you monitor and fix crashes in your application.

// Usage:
// Install via npm install @sentry/node.
// Initialize in your app:
const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'your-dsn' });

// 9.2. LogRocket
// LogRocket allows you to replay user sessions to see the exact bugs they encounter, combined with logs, network requests, and other telemetry.

// Conclusion
// This master class offers a comprehensive overview of the key tools and ecosystems in the JavaScript development world. By mastering these tools, you'll be well-equipped to handle modern JavaScript projects efficiently, from development to deployment.
