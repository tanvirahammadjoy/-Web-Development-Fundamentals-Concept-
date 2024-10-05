// Function to convert decimal to binary and display graphical representation
function convertToBinary() {
  const decimal = document.getElementById("decimalInput").value;
  const binary = decimalToBinary(decimal);
  const binaryOutput = document.getElementById("binaryOutput");
  binaryOutput.innerHTML = "";

  for (let i = 0; i < binary.length; i++) {
    const bit = binary[i];
    const block = document.createElement("div");
    block.classList.add("bit-block");
    block.textContent = bit;
    if (bit === "1") {
      block.classList.add("block-1");
    } else {
      block.classList.add("block-0");
    }
    binaryOutput.appendChild(block);
  }
}

// Helper function to convert decimal to binary
function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

// Function to save the binary representation as an image
function saveAsImage() {
  const binaryOutput = document.getElementById("binaryOutput");

  html2canvas(binaryOutput).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "binary_representation.png";
    link.click();
  });
}
