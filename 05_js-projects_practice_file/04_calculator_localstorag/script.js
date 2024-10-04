let allBtn = document.querySelectorAll(".grid-item");
let display = document.getElementById("display");

// Memory Variables
let memory = 0;

// Event listener for all buttons
allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.textContent;

    // Clear Entry or Screen
    if (value === "C" || value === "CE") {
      display.value = "";
    }

    // Perform calculation when "=" is pressed
    else if (value === "=") {
      try {
        let result = calculate(display.value);
        display.value = result;
      } catch (e) {
        display.value = "Error";
      }
    }

    // Handle memory functions
    else if (value === "MC") {
      memory = 0; // Clear memory
    } else if (value === "MR") {
      display.value = memory; // Recall memory
    } else if (value === "M+") {
      memory += parseFloat(display.value); // Add to memory
    } else if (value === "M-") {
      memory -= parseFloat(display.value); // Subtract from memory
    } else if (value === "MS") {
      memory = parseFloat(display.value); // Store in memory
    }

    // Handle advanced operations
    else if (value === "1/x") {
      let currentVal = parseFloat(display.value);
      if (currentVal !== 0) {
        display.value = 1 / currentVal;
      } else {
        display.value = "Error"; // Handle divide by zero
      }
    } else if (value === "x²") {
      let currentVal = parseFloat(display.value);
      display.value = currentVal * currentVal; // Square the number
    } else if (value === "2x") {
      let currentVal = parseFloat(display.value);
      display.value = Math.pow(2, currentVal); // 2 to the power of x
    } else if (value === "M^") {
      // Exponentiation logic for M^ (use memory as base and user input as exponent)
      let base = memory;
      let exponent = parseFloat(prompt("Enter exponent:"));
      display.value = Math.pow(base, exponent); // Memory to the power of exponent
    } else if (value === "X") {
      display.value += "*";
    }else if (value.className === "wipe") {
        display.value = display.value.slice(0, -1)
    }
    // For all other buttons (numbers and operators), add to display
    else {
      display.value += value;
    }
  });
});

// Function to manually calculate basic arithmetic
function calculate(expression) {
  // Step 1: Tokenize (split numbers and operators)
  let tokens = expression.match(/(\d+|\+|\-|\*|\/|\.)/g);
  if (!tokens) throw new Error("Invalid input");

  // Step 2: Handle multiplication and division first
  let numbers = [];
  let operators = [];

  let i = 0;
  while (i < tokens.length) {
    let token = tokens[i];

    if (/\d/.test(token)) {
      numbers.push(parseFloat(token));
    } else if (token === "*" || token === "/") {
      let left = numbers.pop();
      let right = parseFloat(tokens[++i]);
      if (token === "*") numbers.push(left * right);
      if (token === "/") numbers.push(left / right);
    } else {
      operators.push(token);
    }
    i++;
  }

  // Step 3: Now handle addition and subtraction
  let result = numbers[0];
  for (let j = 0; j < operators.length; j++) {
    if (operators[j] === "+") result += numbers[j + 1];
    if (operators[j] === "-") result -= numbers[j + 1];
  }

  return result;
}
