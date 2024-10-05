const background = document.querySelector(".main-container");
const colorBtn = document.querySelectorAll(".container");

colorBtn.forEach((btn) => {
    console.log(btn);
    btn.style.backgroundColor = btn.id;

  btn.addEventListener("click", (e) => {
    console.log(e)
    // we can do by one line of code
    // background.style.backgroundColor = btn.id

    // and we can do also by multiple line also like using if else
    // if (e.target.id === "red") {
    //   background.style.backgroundColor = e.target.id;
    // } else if (e.target.id == "green") {
    //   background.style.backgroundColor = e.target.id;
    // } else if (e.target.id == "blue") {
    //   background.style.backgroundColor = e.target.id;
    // } else if (e.target.id == "white") {
    //   background.style.backgroundColor = e.target.id;
    // } else if (e.target.id == "black") {
    //   background.style.backgroundColor = e.target.id;
    // } else if (e.target.id == "purple") {
    //   background.style.backgroundColor = e.target.id;
    // }

    // we can do also by switches
    switch (e.target.id) {
      case "red":
        background.style.backgroundColor = e.target.id;
      case "green":
        background.style.backgroundColor = e.target.id;
      case "blue":
        background.style.backgroundColor = e.target.id;
      case "white":
        background.style.backgroundColor = e.target.id;
      case "black":
        background.style.backgroundColor = e.target.id;
      case "purple":
        background.style.backgroundColor = e.target.id;
        break;
      default:
        console.log("no matching color found");
        break;
    }
  });
});
