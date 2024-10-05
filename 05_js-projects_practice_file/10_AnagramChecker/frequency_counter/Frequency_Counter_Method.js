function areAnagrams(str1, str2) {
  // Step 1: Preprocess the strings (remove spaces, convert to lowercase)
  let cleanedStr1 = str1.replace(/\s+/g, "").toLowerCase();
  let cleanedStr2 = str2.replace(/\s+/g, "").toLowerCase();

  // If lengths don't match, they can't be anagrams
  if (cleanedStr1.length !== cleanedStr2.length) {
    return false;
  }

  // Step 2: Create frequency counters for both strings
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of cleanedStr1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of cleanedStr2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // Step 3: Compare the frequency counters
  for (let char in frequencyCounter1) {
    if (frequencyCounter1[char] !== frequencyCounter2[char]) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "Olelh")); // true
console.log(areAnagrams("Hello", "World")); // false
