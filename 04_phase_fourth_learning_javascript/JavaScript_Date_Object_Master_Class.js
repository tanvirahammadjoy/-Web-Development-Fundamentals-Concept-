// Master Class on JavaScript Date Object
// The JavaScript Date object is a built-in object that provides functionality for managing and manipulating dates and times. It's versatile, offering methods to get and set date values, format dates, and handle time zones.

// 1. Creating a Date Object
// You can create a Date object in several ways:

// 1.1 Without Arguments
// When no arguments are passed, it creates a Date object for the current date and time.

let currentDate = new Date();
console.log(currentDate); // Outputs the current date and time

// 1.2 Using a Date String
// You can pass a date string, which is then parsed into a date.

let specificDate = new Date("2024-09-28");
console.log(specificDate); // Sat Sep 28 2024 00:00:00 GMT+0000 (UTC)

// 1.3 Using Year, Month, Day, etc.
// You can also create a date using specific values for the year, month (0-indexed), day, hours, minutes, seconds, and milliseconds.

let preciseDate = new Date(2024, 8, 28, 14, 30, 0); // Sep 28, 2024, 14:30:00
console.log(preciseDate);

// 1.4 Using Timestamp
// The Date object can be created using the number of milliseconds that have passed since January 1, 1970 (Unix Epoch).

let dateFromTimestamp = new Date(0);
console.log(dateFromTimestamp); // Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)

// 2. Retrieving Date and Time
// The Date object provides several methods to retrieve various components of a date.

// 2.1 Getting the Year, Month, and Day
// getFullYear() – Returns the 4-digit year.
// getMonth() – Returns the month (0-11, where 0 is January).
// getDate() – Returns the day of the month (1-31).
let today = new Date();
console.log(today.getFullYear());  // 2024
console.log(today.getMonth());     // 8 (September)
console.log(today.getDate());      // 28

// 2.2 Getting the Time
// getHours() – Returns the hour (0-23).
// getMinutes() – Returns the minutes (0-59).
// getSeconds() – Returns the seconds (0-59).
// getMilliseconds() – Returns the milliseconds (0-999).
console.log(today.getHours());      // Current hour
console.log(today.getMinutes());    // Current minutes
console.log(today.getSeconds());    // Current seconds

// 2.3 Getting Day of the Week
// getDay() – Returns the day of the week (0-6, where 0 is Sunday).
console.log(today.getDay());  // 6 (Saturday)

// 2.4 Getting the Timestamp
// getTime() – Returns the number of milliseconds since January 1, 1970 (Unix Epoch).
console.log(today.getTime()); // Timestamp for the current date

// 2.5 UTC Versions of Methods
// JavaScript also provides UTC-specific methods that return the time in the UTC time zone, such as getUTCFullYear(), getUTCHours(), etc.

// 3. Setting Date and Time
// You can also modify the components of a Date object using setter methods.

// 3.1 Setting the Year, Month, and Day
// setFullYear(year, [month], [day]) – Sets the year (and optionally, the month and day).
// setMonth(month, [day]) – Sets the month (0-11) and optionally the day.
// setDate(day) – Sets the day of the month (1-31).
let date = new Date();
date.setFullYear(2025);
date.setMonth(11); // December (month is 0-indexed)
date.setDate(25);  // Christmas day
console.log(date);

// 3.2 Setting the Time
// setHours(hours, [minutes], [seconds], [milliseconds])
// setMinutes(minutes, [seconds], [milliseconds])
// setSeconds(seconds, [milliseconds])
// setMilliseconds(milliseconds)
let newDate = new Date();
newDate.setHours(14, 45, 0);  // Set to 14:45:00
console.log(newDate);

// 4. Formatting Dates
// JavaScript Date objects are formatted in ISO 8601 format by default, but you may need custom formats for your project.

// 4.1 Converting to ISO String
// The toISOString() method returns the date in the ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).

let isoString = new Date().toISOString();
console.log(isoString); // Example: "2024-09-28T13:45:30.123Z"

// 4.2 Converting to Locale String
// toLocaleDateString() – Returns a string with only the date, in the locale format.
// toLocaleTimeString() – Returns a string with only the time, in the locale format.
// toLocaleString() – Returns both the date and time in the locale format.
console.log(new Date().toLocaleDateString());  // Example: "9/28/2024" in US format
console.log(new Date().toLocaleTimeString());  // Example: "2:45:00 PM"
console.log(new Date().toLocaleString());      // Example: "9/28/2024, 2:45:00 PM"

// 5. Date Comparisons and Arithmetic
// 5.1 Comparing Dates
// Dates can be compared using standard comparison operators (>, <, ===, etc.).
let date1 = new Date("2024-09-28");
let date2 = new Date("2025-09-28");

console.log(date1 < date2);  // true
console.log(date1 === date2); // false

// 5.2 Adding and Subtracting Time
// Date arithmetic can be done using timestamps.

let now = new Date();
let tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Add 24 hours (1 day)
console.log(tomorrow);
// You can similarly subtract or manipulate date values.

// 6. Time Zones and Date Parsing
// 6.1 Handling Time Zones
// When working with dates, be mindful of time zones. JavaScript usually works in the user's local time zone, but you can handle UTC separately.

let utcNow = new Date().toUTCString();
console.log(utcNow);  // Outputs in UTC format

// 6.2 Parsing Dates
// The Date.parse() method converts a date string into a timestamp. Invalid dates return NaN.

let timestamp = Date.parse("2024-09-28T14:00:00Z");
console.log(timestamp);  // Outputs timestamp in milliseconds

// 7. Performance and Optimization Tips
// Avoid excessive date creation in loops or repetitive functions by storing a reusable instance.
// Use timestamps (milliseconds) for high-performance operations like sorting or comparisons.
// Avoid manipulating date strings directly; always use Date methods.

// 8. Examples of Common Use Cases
// 8.1 Countdown Timer
let futureDate = new Date("2024-12-31T00:00:00");
let now1 = new Date();
let timeLeft = futureDate - now1;  // Milliseconds left until New Year
console.log(timeLeft / (1000 * 60 * 60 * 24)); // Convert to days left

// 8.2 Formatting a Date to YYYY-MM-DD
let today1 = new Date();
let formattedDate = today1.getFullYear() + "-" +
  String(today1.getMonth() + 1).padStart(2, '0') + "-" +
  String(today1.getDate()).padStart(2, '0');
console.log(formattedDate);  // Example: "2024-09-28"

// Conclusion
// The JavaScript Date object is a powerful tool for handling dates and times in web applications. It can be complex due to the variety of time zones and date formats, but understanding the core concepts and functions will help you master it effectively!
