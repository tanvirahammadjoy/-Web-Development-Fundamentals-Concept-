# Binary Converter

Challenge: Write a program that converts a given decimal number to binary and vice versa.
Objective: Practice loops, conditionals, and binary operations.

Project Overview: Binary Converter
A binary converter is a simple yet powerful tool that takes a decimal (base 10) number and converts it into its binary (base 2) equivalent, and vice versa. This type of project is excellent for practicing loops, conditionals, and binary operations.

Concepts involved:
Decimal to Binary Conversion:

Decimal numbers are in base 10, meaning each digit represents powers of 10.
Binary numbers are in base 2, using only two digits: 0 and 1.
To convert a decimal number to binary, repeatedly divide the number by 2, noting the remainder. The remainders, when read in reverse order, give the binary equivalent.
Binary to Decimal Conversion:

For binary to decimal, use the positional notation of binary numbers (i.e., powers of 2).
Sum the product of each binary digit and its respective power of 2.
Steps for the Project:
Take user input: Allow the user to choose between converting from decimal to binary or binary to decimal.
Conversion Functions:
One function for decimal to binary conversion.
Another function for binary to decimal conversion.
Validation: Make sure the user inputs a valid decimal or binary number.
Display Result: Show the output of the conversion.
Coding Explanation:
Let's start by breaking down the decimal to binary and binary to decimal conversions with loops, conditionals, and basic input/output handling.

1. Decimal to Binary Conversion Logic:
Keep dividing the decimal number by 2.
Keep track of the remainders.
Store the remainders in reverse order for the binary number.
2. Binary to Decimal Conversion Logic:
Each digit of the binary number represents a power of 2.
Starting from the right (least significant bit), multiply each bit by 2 raised to its position and sum them up.
Coding Part:

Let's break down each of the lines in depth:

1. !/^[01]+$/.test(binary)
This is a regular expression (regex) check that ensures the input is a valid binary number (i.e., it only contains the digits 0 and 1).

^: The caret ^ marks the start of the string. This ensures that the match must start from the beginning of the input string.

[01]: The square brackets [] define a character set. It means any character inside the brackets is acceptable. In this case, it allows only 0 and 1. So, the expression [01] matches either a 0 or 1 at any position in the input.

+: The plus + means one or more occurrences of the previous character set. In this case, [01]+ means the string can contain one or more 0s or 1s.

$: The dollar sign $ marks the end of the string. This ensures that the match extends to the end of the input string, preventing extra characters after the 0s and 1s.

!: The exclamation mark ! is the logical NOT operator. It negates the condition. So, !/^[01]+$/.test(binary) checks if the binary string does not match the pattern defined in the regular expression.

/^[01]+$/: This is the entire regular expression pattern, which says, "The input must only contain 0s and 1s from start (^) to end ($)."

.test(binary): The .test() method is a JavaScript function for regular expressions. It tests if the binary string matches the regex pattern.

Overall meaning: This line checks whether the binary input string contains only 0s and 1s, and if it doesn't, the condition evaluates to true. If the input is invalid (contains characters other than 0 or 1), this line will trigger an error message.
2. binary[binary.length - 1 - i]
This line is part of the logic to convert a binary number to a decimal number. It accesses individual characters in the binary string.

binary: This is the string (or array-like structure) representing the binary number. For example, for the binary number 1011, binary would be "1011".

binary.length: The .length property returns the number of characters in the binary string. For example, "1011".length would return 4.

binary.length - 1: Since arrays and strings in JavaScript are zero-indexed (i.e., the first element is at index 0), this expression calculates the index of the last character in the binary string. For example, if binary = "1011", binary.length - 1 would be 4 - 1 = 3, which is the index of the last character (1).

binary.length - 1 - i: The i represents the current position in the loop (from left to right in the string). By subtracting i, we are essentially accessing the characters from right to left. This is important because binary numbers are read from the least significant bit (on the right) to the most significant bit (on the left) when converting to decimal.

For example:
When i = 0, binary[binary.length - 1 - i] accesses the last character.
When i = 1, it accesses the second-last character.
And so on, until we’ve processed every character in the binary string.
Example:
Let’s say we have binary = "1011":

Iteration 0 (i = 0):
binary.length = 4
binary.length - 1 = 3 (index of last character)
binary.length - 1 - i = 3 - 0 = 3 → binary[3] is '1'
Iteration 1 (i = 1):
binary.length - 1 - i = 3 - 1 = 2 → binary[2] is '1'
Iteration 2 (i = 2):
binary.length - 1 - i = 3 - 2 = 1 → binary[1] is '0'
Iteration 3 (i = 3):
binary.length - 1 - i = 3 - 3 = 0 → binary[0] is '1'
This loop accesses each character in the binary string starting from the rightmost character (least significant bit) and moving to the leftmost character (most significant bit). This is essential when converting a binary number to a decimal because we need to process the bits in order of increasing powers of 2.

To summarize:
!/^[01]+$/.test(binary) ensures that the input is a valid binary number by checking if it contains only 0s and 1s.
binary[binary.length - 1 - i] allows us to iterate through the binary string from right to left, which is necessary for converting binary to decimal (since the rightmost digit represents the lowest power of 2).
