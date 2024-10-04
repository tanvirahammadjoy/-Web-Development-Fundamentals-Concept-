// Masterclass on JavaScript Old Ways of Handling APIs: Foundation Concepts
// Before modern JavaScript features like fetch, async/await, and Promises were widely used for handling APIs, JavaScript had other mechanisms to perform asynchronous tasks. This masterclass focuses on the foundational concepts of API handling in the "old ways" using callbacks, XMLHttpRequest, and basic asynchronous programming.

// 1. Callbacks
// Callbacks were one of the primary ways to handle asynchronous code in JavaScript before Promises and async/await.

// What is a Callback? A callback is a function passed as an argument to another function. It is called once the first function completes its task. It is particularly useful when handling time-consuming tasks like API requests or file I/O.

// Example of a Callback:

function getData(callback) {
  setTimeout(() => {
    let data = { name: "Product", price: 100 };
    callback(data);
  }, 1000);
}

function displayData(data) {
  console.log("Data received:", data);
}

getData(displayData);

// Drawback: Callback Hell When dealing with multiple asynchronous calls, code can become deeply nested and hard to manage. This issue is commonly referred to as "callback hell."

function step1(data, callback) {
  console.log("Step 1:", data);
  callback("Data from Step 1");
}

function step2(data, callback) {
  console.log("Step 2:", data);
  callback("Data from Step 2");
}

function step3(data, callback) {
  console.log("Step 3:", data);
  callback("Data from Step 3");
}

step1("Initial Data", (result1) => {
  step2(result1, (result2) => {
    step3(result2, (result3) => {
      console.log("Final Result:", result3);
    });
  });
});

// 2. XMLHttpRequest (XHR)
// Before fetch was introduced, developers used the XMLHttpRequest object to make HTTP requests. Although it was powerful, it had a more complex syntax and was less developer-friendly.

// Basic Structure of XMLHttpRequest:

let xhr = new XMLHttpRequest();

// Open the request
xhr.open('GET', 'https://api.example.com/data', true);

// Setup a callback to handle the response
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

// Send the request
xhr.send();

// The readyState Values: The XMLHttpRequest object has a readyState property that indicates the status of the request:

// 1. 0: UNSENT – The request has not been sent yet.
// 2. 1: OPENED – The request is opened, but the server has not received it yet.
// 3. 2: HEADERS_RECEIVED – The server has received the request and is processing it.
// 4. 3: LOADING – The server is transmitting data.
// 5. 4: DONE – The request is complete, and the data has been fully received.
// Handling Different HTTP Methods: You could use XMLHttpRequest to perform various HTTP methods like GET, POST, PUT, and DELETE.

// Example of a POST request:

let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/data', true);
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};

let payload = {
  name: 'New Product',
  price: 120
};

xhr.send(JSON.stringify(payload));

// 3. Error Handling
// Error handling with the older methods was less standardized than with modern JavaScript APIs.

// Handling Errors in XMLHttpRequest: The onerror event was used to handle errors in XMLHttpRequest operations.
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onload = function () {
  if (xhr.status == 200) {
    console.log('Success:', JSON.parse(xhr.responseText));
  } else {
    console.log('Error:', xhr.status);
  }
};

xhr.onerror = function () {
  console.log('Request failed');
};

xhr.send();

// 4. JSONP (JSON with Padding)
// Before cross-origin requests were possible through modern CORS (Cross-Origin Resource Sharing) policies, JSONP was a popular method for overcoming browser restrictions on cross-domain requests.

// How JSONP Works: It relies on <script> tags, which are not subject to the same-origin policy. A script tag is inserted into the document to make a request to the server, which then responds with JSON data wrapped in a function call.

// Example:
// <script>
//   function handleResponse(data) {
//     console.log('Data received from JSONP:', data);
//   }
// </script>

// <script src="https://api.example.com/data?callback=handleResponse"></script>

// The server returns:

handleResponse({ name: 'Product', price: 100 });

// Drawbacks of JSONP: JSONP works only for GET requests and opens the door for security vulnerabilities like XSS (Cross-Site Scripting) attacks.

// 5. The Evolution of Asynchronous Handling
// JavaScript's asynchronous programming capabilities have evolved significantly since the early days of callbacks and XMLHttpRequest. The old methods, while still usable, have been largely replaced by more powerful and readable features like Promises, async/await, and fetch. These newer features offer cleaner syntax, better error handling, and more efficient workflows.

// Summary
// Callbacks were the foundational way of handling asynchronous programming but led to issues like callback hell.

// XMLHttpRequest was the primary method for handling HTTP requests, though it required verbose code to manage even basic requests.

// JSONP allowed cross-domain requests before CORS, but it had limitations and security concerns.

// Though modern JavaScript has provided better alternatives, understanding these older techniques gives you a deeper insight into how JavaScript's asynchronous handling evolved. It also helps when working with legacy codebases that may still rely on these "old ways."

// If you're looking to modernize your code, I suggest exploring Promises, async/await, and the fetch API next.
