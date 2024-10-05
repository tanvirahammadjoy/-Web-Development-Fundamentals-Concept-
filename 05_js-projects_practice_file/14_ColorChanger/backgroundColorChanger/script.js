let btnColor = document.querySelectorAll(".color-btn");
let background = document.querySelector(".color-container");

btnColor.forEach((button) => {
  button.addEventListener("click", () => {
    btnColor.forEach((btn) => {
      // remove the "active" class from all buttons
      btn.classList.remove("active", "black-active", "white-active");
    });

    // get the buttons color
    let color = button.textContent.toLowerCase();

    // add the appropriate 'active' based on the button's color
    if (color === "yellow" || color === "white") {
      button.classList.add("black-active"); // different class for yellow and white
    } else {
      button.classList.add("active"); // Regular class for other colors
    }

    // Change the background color of container
    background.style.backgroundColor = color;
  });
});
