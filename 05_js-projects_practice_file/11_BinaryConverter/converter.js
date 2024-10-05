// Function to convert decimal to binary
function convertToBinary() {
  const inputNumber = document.getElementById("inputNumber").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(inputNumber) || inputNumber === "") {
    resultDiv.innerHTML =
      "<p class='error'>Please enter a valid decimal number.</p>";
    return;
  }

  let decimal = parseInt(inputNumber);
  let binary = decimalToBinary(decimal);
  resultDiv.innerHTML = `Binary equivalent: <strong>${binary}</strong>`;
}

// Function to convert binary to decimal
function convertToDecimal() {
  const inputNumber = document.getElementById("inputNumber").value;
  const resultDiv = document.getElementById("result");

  if (!/^[01]+$/.test(inputNumber)) {
    resultDiv.innerHTML =
      "<p class='error'>Please enter a valid binary number.</p>";
    return;
  }

  let binary = inputNumber;
  let decimal = binaryToDecimal(binary);
  resultDiv.innerHTML = `Decimal equivalent: <strong>${decimal}</strong>`;
}

// Helper functions (same logic as before)
function decimalToBinary(decimal) {
  let binary = "";
  while (decimal > 0) {
    let remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary || "0";
}

function binaryToDecimal(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += parseInt(binary[binary.length - 1 - i]) * Math.pow(2, i);
  }
  return decimal;
}

// Function to reset the form
function resetForm() {
  document.getElementById("inputNumber").value = "";
  document.getElementById("result").innerHTML = "";
}
