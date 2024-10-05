// Function to convert decimal to binary and display graphical representation
function convertToBinary() {
  // Get the decimal number input
  const decimal = document.getElementById("decimalInput").value;

  // Convert decimal to binary
  const binary = decimalToBinary(decimal);

  // Get the output container
  const binaryOutput = document.getElementById("binaryOutput");

  // Clear the previous output
  binaryOutput.innerHTML = "";

  // Loop through the binary digits and create blocks
  for (let i = 0; i < binary.length; i++) {
    const bit = binary[i];

    // Create a new div element for each bit
    const block = document.createElement("div");
    block.classList.add("bit-block");
    block.textContent = bit;

    // Apply different styles for 1 and 0
    if (bit === "1") {
      block.classList.add("block-1");
    } else {
      block.classList.add("block-0");
    }

    // Append the block to the output container
    binaryOutput.appendChild(block);
  }
}

// Helper function to convert decimal to binary
function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}
