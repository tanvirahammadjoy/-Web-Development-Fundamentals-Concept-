// Function to convert decimal to binary
function decimalToBinary(decimal) {
  let binary = "";
  while (decimal > 0) {
    let remainder = decimal % 2;
    binary = remainder + binary; // Add remainder to the front
    decimal = Math.floor(decimal / 2); // Update decimal
  }
  return binary || "0"; // Return "0" if input is 0
}

// Function to convert binary to decimal
function binaryToDecimal(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += parseInt(binary[binary.length - 1 - i]) * Math.pow(2, i);
  }
  return decimal;
}

// Main function to take user input and perform conversions
function binaryConverter() {
  const choice = prompt(
    "Enter 1 to convert Decimal to Binary, 2 to convert Binary to Decimal:"
  );
  if (choice === "1") {
    const decimal = parseInt(prompt("Enter a decimal number:"));
    if (isNaN(decimal)) {
      console.log("Invalid decimal number.");
    } else {
      console.log("Binary equivalent:", decimalToBinary(decimal));
    }
  } else if (choice === "2") {
    const binary = prompt("Enter a binary number:");
    if (!/^[01]+$/.test(binary)) {
      // Check if input is valid binary
      console.log("Invalid binary number.");
    } else {
      console.log("Decimal equivalent:", binaryToDecimal(binary));
    }
  } else {
    console.log("Invalid choice. Please enter 1 or 2.");
  }
}

// Call the main function
binaryConverter();

// Explanation:
// decimalToBinary(decimal):

// Takes a decimal number, repeatedly divides it by 2, and stores the remainders in reverse order to get the binary number.
// Example:
// Input: 10
// Process: 10 ÷ 2 = 5 remainder 0, 5 ÷ 2 = 2 remainder 1, 2 ÷ 2 = 1 remainder 0, 1 ÷ 2 = 0 remainder 1
// Output: 1010

// binaryToDecimal(binary):
// Takes a binary number (as a string) and converts it into a decimal using the formula:
// decimal = digit * 2^position
// Example:
// Input: 1010
// Process: 1 * 2^3 + 0 * 2^2 + 1 * 2^1 + 0 * 2^0 = 8 + 0 + 2 + 0 = 10
// Output: 10

// binaryConverter():
// The main function that takes user input and decides which conversion to perform.
// Prompts the user to choose between decimal-to-binary or binary-to-decimal conversions.
// Validates the input and calls the appropriate function.
