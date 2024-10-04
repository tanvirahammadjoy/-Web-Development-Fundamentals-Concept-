// In this master class, we will explore how to handle dates in JavaScript without relying on the Date object. This means we’ll focus on manipulating date-like data using strings, numbers, and arrays. The goal is to understand how dates work under the hood and how to manage them in a "pure" JavaScript way.

// Topics Covered:
// Date Format Understanding
// Creating and Representing Dates
// Manipulating Dates
// Performing Date Calculations
// Formatting Dates
// 1. Date Format Understanding
// A date typically consists of:

// Year (e.g., 2023)
// Month (e.g., September or 09)
// Day (e.g., 28)
// Time components include:

// Hours (e.g., 14 for 2 PM)
// Minutes (e.g., 45)
// Seconds (e.g., 32)
// Common date formats:

// YYYY-MM-DD: 2023-09-28
// DD/MM/YYYY: 28/09/2023
// MM-DD-YYYY: 09-28-2023
// 2. Creating and Representing Dates
// Without using the Date object, we need to store dates manually. Let’s represent dates using strings or arrays:

// String Representation:
let dateStr = "2023-09-28"; // YYYY-MM-DD format

// Array Representation:
let dateArr = [2023, 9, 28]; // [Year, Month, Day]

// 3. Manipulating Dates
// To manipulate dates, we’ll write our own functions. Let’s start with basic operations like adding days, months, or years to a date.

// a. Adding Days to a Date:
function addDays(dateArr, daysToAdd) {
  let [year, month, day] = dateArr;

  // Get the total number of days in the current month
  let daysInMonth = getDaysInMonth(month, year);

  // Add days
  day += daysToAdd;

  // Adjust if day exceeds days in the month
  while (day > daysInMonth) {
    day -= daysInMonth;
    month++;

    if (month > 12) {
      month = 1;
      year++;
    }

    daysInMonth = getDaysInMonth(month, year);
  }

  return [year, month, day];
}

function getDaysInMonth(month, year) {
  // Check for leap year
  if (month === 2) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
  }
  return [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

let dateArr1 = [2023, 9, 28];
let newDate = addDays(dateArr1, 10); // [2023, 10, 8]
console.log(newDate);

// b. Adding Months to a Date:
function addMonths(dateArr, monthsToAdd) {
  let [year, month, day] = dateArr;

  // Add months
  month += monthsToAdd;

  // Adjust year and month
  while (month > 12) {
    month -= 12;
    year++;
  }

  // Check if the day exceeds the number of days in the new month
  let daysInMonth = getDaysInMonth(month, year);
  if (day > daysInMonth) {
    day = daysInMonth;
  }

  return [year, month, day];
}

let dateArr2 = [2023, 9, 28];
let newDate1 = addMonths(dateArr2, 5); // [2024, 2, 28]
console.log(newDate1);

// 4. Performing Date Calculations
// You might want to calculate differences between dates (e.g., number of days between two dates). Let’s see how to calculate this manually.

// a. Difference in Days Between Two Dates:
function daysBetween(date1, date2) {
  // Convert each date to days since a reference point (e.g., 0000-01-01)
  return Math.abs(dateToDays(date1) - dateToDays(date2));
}

function dateToDays(dateArr) {
  let [year, month, day] = dateArr;
  let days = 0;

  // Add days for complete years
  for (let y = 0; y < year; y++) {
    days += y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0) ? 366 : 365;
  }

  // Add days for complete months in the current year
  for (let m = 1; m < month; m++) {
    days += getDaysInMonth(m, year);
  }

  // Add remaining days
  days += day;

  return days;
}

let date1 = [2023, 9, 28];
let date2 = [2024, 2, 15];
let diff = daysBetween(date1, date2); // Number of days between the two dates
console.log(diff); // Example output: 140 days

// 5. Formatting Dates
// Finally, we often need to format dates for display. We can convert a date array into a readable string.

// a. Formatting Date as YYYY-MM-DD:
function formatDate(dateArr) {
  let [year, month, day] = dateArr;

  // Ensure two digits for month and day
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
}

let dateArr3 = [2023, 9, 28];
let formattedDate = formatDate(dateArr3); // "2023-09-28"

console.log(formattedDate);

// b. Formatting Date as DD/MM/YYYY:
function formatDateUK(dateArr) {
  let [year, month, day] = dateArr;

  // Ensure two digits for month and day
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${day}/${month}/${year}`;
}

let dateArr4 = [2023, 9, 28];
let formattedDateUK = formatDateUK(dateArr4); // "28/09/2023"
console.log(formattedDateUK);

// Final Thoughts
// By breaking down date manipulation into basic building blocks like arrays and strings, you can achieve complex date operations without relying on the Date object. This exercise also reinforces important concepts like leap years, month boundaries, and date arithmetic, which are essential for any developer dealing with time-sensitive data.

// Would you like to explore specific challenges using these concepts?

// I meant date.now?
// Ah, I see! You meant creating a date timestamp like Date.now() but without using the Date object. Let’s break down how we can manually calculate the number of milliseconds since January 1, 1970, 00:00:00 UTC—which is what Date.now() gives you.

// Steps to Manually Calculate Unix Timestamp
// Understand the Unix Epoch:

// The Unix timestamp is the number of milliseconds that have passed since January 1, 1970 (UTC).
// So, to calculate the current timestamp manually, we need:
// The current year, month, day, hour, minute, second, and millisecond.
// The total milliseconds passed since January 1, 1970.
// Calculate the Time Passed Since 1970:

// Add up the milliseconds for all the years, months, days, etc., that have passed since the Unix epoch.
// Consider leap years (a year is a leap year if it is divisible by 4, except for years divisible by 100 but not by 400).
// Convert Time Components into Milliseconds:

// 1 second = 1000 milliseconds
// 1 minute = 60 seconds
// 1 hour = 60 minutes
// 1 day = 24 hours
// And so on…
// Example Implementation
// Here’s how you could manually calculate the current timestamp without Date.now():

function getCurrentTimestamp() {
  // 1. Get the current year, month, day, hour, minute, second, and millisecond
  let currentDate = [2024, 9, 28, 14, 35, 20, 500]; // [Year, Month, Day, Hour, Minute, Second, Millisecond]
  // let currentDate = date.now(); // [Year, Month, Day, Hour, Minute, Second, Millisecond]
  
  // 2. Calculate the number of milliseconds between 1970 and the current year
  let milliseconds = calculateMillisecondsFromEpoch(currentDate);

  return milliseconds;
}

function calculateMillisecondsFromEpoch([
  year,
  month,
  day,
  hour,
  minute,
  second,
  millisecond,
]) {
  let totalMilliseconds = 0;

  // 3. Add milliseconds for each year passed since 1970
  for (let y = 1970; y < year; y++) {
    totalMilliseconds += isLeapYear(y)
      ? 366 * 24 * 60 * 60 * 1000
      : 365 * 24 * 60 * 60 * 1000;
  }

  // 4. Add milliseconds for months in the current year
  for (let m = 1; m < month; m++) {
    totalMilliseconds += getDaysInMonth(m, year) * 24 * 60 * 60 * 1000;
  }

  // 5. Add milliseconds for days in the current month
  totalMilliseconds += (day - 1) * 24 * 60 * 60 * 1000;

  // 6. Add milliseconds for hours, minutes, seconds, and milliseconds
  totalMilliseconds += hour * 60 * 60 * 1000;
  totalMilliseconds += minute * 60 * 1000;
  totalMilliseconds += second * 1000;
  totalMilliseconds += millisecond;

  return totalMilliseconds;
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function getDaysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

// Usage:
let timestamp = getCurrentTimestamp();
console.log("Manual Timestamp:", timestamp); // Manual Timestamp: 1727534120500

// Key Points:
// Years: The script adds the total number of days in each year between 1970 and the current year. It accounts for leap years.

// Months: The function adds days for the months leading up to the current month.
// Days, Hours, Minutes, Seconds: Finally, it adds the exact number of milliseconds based on the current time.
// This function will give you a manual calculation of the Unix timestamp. Though using Date.now() is much simpler, this approach helps you understand how the timestamp is derived!

// how to get read able time and date from here?

// To convert the manually calculated Unix timestamp (milliseconds since January 1, 1970) into a readable date and time, you need to reverse the process. Instead of calculating milliseconds from a date, you’ll extract years, months, days, hours, minutes, and seconds from the total milliseconds.

// Here’s how to do it:

// Steps to Convert Unix Timestamp to Readable Date and Time
// Extract the year: Subtract the milliseconds equivalent of each year starting from 1970 until the total milliseconds left is less than the milliseconds in one year.
// Extract the month: Subtract the milliseconds of each month within the extracted year.
// Extract the day: Subtract the milliseconds for each day in the extracted month.
// Extract hours, minutes, and seconds: Handle hours, minutes, seconds, and milliseconds similarly.
// Code to Convert Unix Timestamp to Readable Date
// Let’s create a function that takes the timestamp and converts it to a readable date:

function timestampToReadable(milliseconds) {
  let year = 1970;
  let month = 1;
  let day = 1;
  let hour = 0;
  let minute = 0;
  let second = 0;

  // 1. Extract years
  while (milliseconds >= (isLeapYear(year) ? 366 : 365) * 24 * 60 * 60 * 1000) {
    milliseconds -= (isLeapYear(year) ? 366 : 365) * 24 * 60 * 60 * 1000;
    year++;
  }

  // 2. Extract months
  while (milliseconds >= getDaysInMonth(month, year) * 24 * 60 * 60 * 1000) {
    milliseconds -= getDaysInMonth(month, year) * 24 * 60 * 60 * 1000;
    month++;
  }

  // 3. Extract days
  while (milliseconds >= 24 * 60 * 60 * 1000) {
    milliseconds -= 24 * 60 * 60 * 1000;
    day++;
  }

  // 4. Extract hours
  hour = Math.floor(milliseconds / (60 * 60 * 1000));
  milliseconds -= hour * 60 * 60 * 1000;

  // 5. Extract minutes
  minute = Math.floor(milliseconds / (60 * 1000));
  milliseconds -= minute * 60 * 1000;

  // 6. Extract seconds
  second = Math.floor(milliseconds / 1000);
  milliseconds -= second * 1000;

  // Resulting readable date
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisecond: milliseconds,
  };
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function getDaysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

// Example Usage:
let currentTimestamp = getCurrentTimestamp(); // Suppose this is the timestamp from the previous code
let readableDate = timestampToReadable(currentTimestamp);
console.log(readableDate);

// Expected Output:
// {
//    year: 2024,
//    month: 9,
//    day: 28,
//    hour: 14,
//    minute: 35,
//    second: 20,
//    millisecond: 500
// }

// Output Breakdown:
// year: The year extracted from the total milliseconds.
// month: The month (1 for January, 2 for February, and so on).
// day: The day of the month.
// hour: The hour (24-hour format).
// minute: The minute.
// second: The second.
// millisecond: The leftover milliseconds.

// Formatting the Date as a Readable String
// To make the date even more readable, you can format it into a string:

function formatReadableDate(dateObj) {
  let { year, month, day, hour, minute, second } = dateObj;

  // Ensure two digits for month, day, hour, minute, and second
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// Example usage:
let formattedDate1 = formatReadableDate(readableDate);
console.log(formattedDate1); // Output: "2024-09-28 14:35:20"

// Key Points:
// Milliseconds to Years: Subtract the number of milliseconds for each full year until you can’t subtract a full year anymore.

// Months and Days: Similar approach for months and days.
// Hours, Minutes, Seconds: These are calculated from the remaining milliseconds.
// This gives you a readable date and time that you can format however you like!
