const backgroundContainer = document.querySelector(".main-container");
const buttons = document.querySelectorAll(".colorButton");
console.log(buttons);
buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    if (e.target.id === "black") {
      btn.style.color = "white";
      btn.style.backgroundColor = e.target.id;
    } else {
      btn.style.backgroundColor = e.target.id;
    }
  });
});
