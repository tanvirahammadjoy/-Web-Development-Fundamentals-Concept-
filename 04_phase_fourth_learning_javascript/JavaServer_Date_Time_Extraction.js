// Master Class: JavaScript Date.now() Method
// Overview
// The Date.now() method in JavaScript is a simple, yet powerful utility for working with time. It returns the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (also known as the Unix Epoch). This timestamp is widely used in various applications like calculating time differences, measuring execution time, and generating unique timestamps.

// What is Date.now()?
// Date.now() is a static method of the Date object. This means that you call it directly on the Date object without needing to create a new instance.
// It returns the current time in milliseconds since the Unix Epoch.
// Example:
let currentTimeInMillis = Date.now();
console.log(currentTimeInMillis); // Output: e.g., 1695893762672 (milliseconds since Jan 1, 1970)

// Fundamentals of the Date.now() Method
// Why Unix Epoch (January 1, 1970)?
// The Unix Epoch is a common point of reference for time used in computer systems. It's essential because:

// Provides a consistent way to measure time.
// Allows easy calculation of time differences.
// By measuring time in milliseconds from this point, Date.now() enables precise time calculations and comparison of events.

// Milliseconds Explained
// 1 second = 1,000 milliseconds.
// So, Date.now() returns a very large number, like 1695893762672, which means the number of milliseconds since the Unix Epoch.
// Key Use Cases for Date.now()
// Calculate Time Differences:

// One of the most common uses of Date.now() is to calculate the time difference between two events.

// Example:
const start1 = Date.now();

// Simulate a delay (e.g., some task or process)
setTimeout(() => {
  const end = Date.now();
  const elapsedTime = end - start1;
  console.log(`Elapsed time: ${elapsedTime} ms`);
}, 2000);

// Here, we measure how long a task (simulated by setTimeout) takes to complete.

// Performance Measurement:

// For performance-critical applications, developers use Date.now() to measure how long specific operations take to run.

// Example:
const start = Date.now();

// Example: a complex calculation
for (let i = 0; i < 1000000; i++) {}

const end = Date.now();
console.log(`Calculation took ${end - start} ms`);

// Timestamp Generation:

// A unique timestamp can be generated for logging, versioning, or creating unique IDs for events.

// Example:
const uniqueTimestamp = Date.now();
console.log(`Generated Timestamp: ${uniqueTimestamp}`);

// Live Time Extraction:

// While Date.now() gives you milliseconds, you can convert it to human-readable date and time format using other JavaScript methods.

// Converting Date.now() to Readable Date & Time
// The Date object provides several ways to extract human-readable dates and times from the milliseconds returned by Date.now().

// Example:
const currentTimeMillis = Date.now();
const dateObject = new Date(currentTimeMillis);

console.log(dateObject.toString()); // Example: Mon Sep 28 2024 15:16:05 GMT+0800 (Malaysia Time)

// Breaking Down the Date Object
// You can extract specific components (year, month, day, hours, minutes, seconds) from the Date object.

// Example:
const date = new Date(Date.now());

// Extracting individual components
const year = date.getFullYear(); // e.g., 2024
const month = date.getMonth() + 1; // e.g., 9 (Months are 0-based, so add 1)
const day = date.getDate(); // e.g., 28
const hours = date.getHours(); // e.g., 15 (3 PM in 24-hour format)
const minutes = date.getMinutes(); // e.g., 16
const seconds = date.getSeconds(); // e.g., 5

console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
// Output: 2024-9-28 15:16:5

// Formatting Date and Time:
// For custom date formatting, you can manually format it by combining the extracted values or using libraries like moment.js (although not always necessary).

// Example:
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const currentTime = new Date(Date.now());
console.log(formatDate(currentTime)); // Output: 2024-09-28 15:16:05

// Using Date.now() in Real-World Applications
// Timers and Stopwatches: In a simple timer or stopwatch application, Date.now() can be used to track start and stop times and calculate the duration.

// Event Scheduling: You can store events as timestamps (using Date.now()) and then compare them later to trigger actions, reminders, or notifications.

// Session Timeout: You can track when a user starts a session and calculate when to log them out based on inactivity using Date.now().

// Data Logging: In logging systems, timestamps are critical to track when certain events or errors occur.

// Recap
// Date.now() gives you the number of milliseconds since the Unix Epoch (January 1, 1970).
// It is useful for performance measurements, calculating time differences, and generating unique timestamps.
// You can convert the milliseconds into a human-readable format by using the Date object.
// Common uses include logging, performance monitoring, event scheduling, and creating unique identifiers.
// By understanding Date.now() and the Date object, you can efficiently work with time-related functionality in JavaScript applications.

// 1/2

// In JavaScript, the Date.now() method only returns the current time in milliseconds (since January 1, 1970). Unfortunately, there isn't a built-in method like Date.now() that returns a formatted date directly without using the new Date() object to convert milliseconds into a human-readable format.

// However, we can achieve what you want by writing a custom function that uses only Date.now() and manually processes the milliseconds into a formatted date. Here's how you can do it:

// Custom Date Formatter Using Date.now()
function formatDateFromNow() {
  const milliseconds = Date.now();

  // Conversion factors
  const secondsInMinute = 60;
  const millisecondsInSecond = 1000;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInYear = 365.25; // Including leap years on average
  const monthsInYear = 12;

  // Calculate total seconds, minutes, and hours
  const totalSeconds = Math.floor(milliseconds / millisecondsInSecond);
  const totalMinutes = Math.floor(totalSeconds / secondsInMinute);
  const totalHours = Math.floor(totalMinutes / minutesInHour);

  // Get the current year (1970 is the base year)
  const baseYear = 1970;
  const currentYear =
    baseYear + Math.floor(totalHours / (hoursInDay * daysInYear));

  // Approximate month and day (simplified without handling exact days in months)
  const totalDaysInYear = totalHours / hoursInDay;
  const currentMonth = Math.ceil(
    (totalDaysInYear % daysInYear) / (daysInYear / monthsInYear)
  );
  const currentDay = Math.ceil(totalDaysInYear % (daysInYear / monthsInYear));

  // Get the hours, minutes, and seconds
  const currentHour = totalHours % hoursInDay;
  const currentMinute = totalMinutes % minutesInHour;
  const currentSecond = totalSeconds % secondsInMinute;

  // Format the output
  const formattedDate = `${currentYear}-${String(currentMonth).padStart(
    2,
    "0"
  )}-${String(currentDay).padStart(2, "0")} ${String(currentHour).padStart(
    2,
    "0"
  )}:${String(currentMinute).padStart(2, "0")}:${String(currentSecond).padStart(
    2,
    "0"
  )}`;

  return formattedDate;
}

console.log(formatDateFromNow());

// Explanation
// Milliseconds to Components: The code starts with Date.now() to get the milliseconds since the Unix Epoch.
// Manual Time Breakdown: We manually break down the milliseconds into seconds, minutes, hours, days, and years using appropriate conversion factors.

// Simplified Month/Day Calculation: For simplicity, we assume each year has an average of 365.25 days (to account for leap years), and each month has an equal number of days. This could be made more accurate with specific month lengths and leap year handling.

// Formatting: We format the result as YYYY-MM-DD HH:MM:SS using string padding to ensure two digits for month, day, hour, minute, and second.
// Output Example
// 2024-09-28 16:00:30

// This approach does not use the new Date() constructor but instead extracts and formats the date using the millisecond timestamp provided by Date.now(). It’s a bit more complex than using the Date object directly but fulfills your requirement!
