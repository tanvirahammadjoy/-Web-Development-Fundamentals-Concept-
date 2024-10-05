# Anagram Checker

Challenge: Develop a function that checks if two given strings are anagrams of each other (contain the same characters in a different order).
Objective: Work on string manipulation, sorting, and comparison logic.

Anagram Checker Project Overview
An anagram is when two strings contain the exact same characters in the same frequency but arranged in a different order. For example, "listen" and "silent" are anagrams because they both contain the same characters, but in different orders.

Key Features of the Project:
Input:

Two strings are given as input (for example: "listen" and "silent").
Logic:

You need to compare both strings to see if they contain the exact same characters with the same frequency, even if the order is different.
Output:

The function returns true if the two strings are anagrams, otherwise it returns false.
How to Build It:
Steps to Implement the Anagram Checker:
Preprocessing:
First, remove any extra spaces from both strings and convert all characters to the same case (lowercase or uppercase) to handle case insensitivity.
Sort the Strings:
Convert both strings into arrays of characters and sort them. If two strings are anagrams, their sorted versions will be identical.
Compare:
Compare the sorted versions of the two strings. If they match, the two strings are anagrams; otherwise, they are not.

Additional Considerations:
Edge Cases:
The two strings should have the same length, otherwise, they cannot be anagrams.
You may need to handle special characters (e.g., punctuation) depending on the problem requirements.
Example of an Edge Case:

console.log(areAnagrams("Listen!", "Silent!")); // true (after removing punctuation)

If you want to ignore special characters like punctuation, you can modify the preprocessing step to remove them using a regular expression that keeps only letters:
cleanedStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
cleanedStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

Project Enhancement Ideas:
Interactive Input:

Create a simple form on a webpage where users can input two strings, and your function will display if they are anagrams.
Efficiency:

Instead of sorting the strings, you can use a frequency counter (hash map) to track the number of times each character appears in both strings and then compare the frequency counts.

If you'd like to explore the frequency counter approach, I can help you with that as well!

Let's break them down:

1. /\s+/g
Explanation:
/ ... /: This is the syntax to define a regular expression in JavaScript.
\s: This matches any whitespace character. It includes spaces, tabs, newlines, etc.
+: This means one or more occurrences of the preceding character (in this case, one or more whitespace characters).
g: The global flag. This ensures that the regular expression will search for all occurrences of the pattern, not just the first one.
Usage in Code:
In the code str.replace(/\s+/g, ''), it replaces all sequences of one or more whitespace characters (spaces, tabs, newlines) with an empty string (i.e., removes all the whitespace).

Example:
let str = "Hello   World  !";
let cleanedStr = str.replace(/\s+/g, ''); // Removes all spaces
console.log(cleanedStr); // Output: "HelloWorld!"
2. /[^a-zA-Z]/
Explanation:
/ ... /: Defines the regular expression.
[^ ... ]: This is a negated character class. It matches any character that is not inside the brackets. The ^ inside the square brackets means "not".
a-z: Matches any lowercase letter from 'a' to 'z'.
A-Z: Matches any uppercase letter from 'A' to 'Z'.
Meaning:
[^a-zA-Z]: This will match any character that is not a lowercase or uppercase letter (i.e., it matches digits, punctuation, spaces, etc.).

Usage in Code:
In the code str.replace(/[^a-zA-Z]/g, ''), it removes anything that is not a letter (i.e., it removes numbers, spaces, punctuation, etc.).
Example:
let str = "Hello, World! 123";
let cleanedStr = str.replace(/[^a-zA-Z]/g, ''); // Removes all non-letter characters
console.log(cleanedStr); // Output: "HelloWorld"

Summary:
/\s+/g: Finds all sequences of one or more whitespace characters and removes them (or replaces them with something else).
/[^a-zA-Z]/g: Finds all characters that are not letters (including spaces, punctuation, numbers, etc.) and removes them (or replaces them with something else).
