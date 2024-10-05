function areAnagrams(str1, str2) {
  // Step 1: Preprocess the strings (remove spaces, convert to lowercase)
  let cleanedStr1 = str1.replace(/\s+/g, "").toLowerCase();
  console.log(cleanedStr1);
  let cleanedStr2 = str2.replace(/\s+/g, "").toLowerCase();
  console.log(cleanedStr2);

  // Step 2: Sort the characters of both strings
  let sortedStr1 = cleanedStr1.split("").sort().join("");
  console.log(sortedStr1);
  let sortedStr2 = cleanedStr2.split("").sort().join("");
  console.log(sortedStr2);

  // Step 3: Compare the sorted versions of the strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "Olelh")); // true
console.log(areAnagrams("Hello", "World")); // false

// Explanation of the Code:

// Step 1: Preprocessing
// str.replace(/\s+/g, ''): This removes all whitespace characters from the strings.
// toLowerCase(): Converts the string to lowercase to ensure case-insensitivity.

// Step 2: Sorting
// split(''): Converts the string into an array of characters.
// sort(): Sorts the array of characters alphabetically.
// join(''): Joins the array of sorted characters back into a string.

// Step 3: Comparison
// The two sorted strings are compared. If they are equal, the original strings are anagrams.
