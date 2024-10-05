const form = document.querySelector(".content");
const heightInput = form.querySelector(".height input");
const weightInput = form.querySelector(".weight input");
const resultSpan = document.querySelector(".result");
const underWeightSpan = document.querySelector(".under-weight");
const normalRangSpan = document.querySelector(".normal-rang");
const overWeightSpan = document.querySelector(".over-weight");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const heightInCm = parseFloat(heightInput.value);
  const weightInKg = parseFloat(weightInput.value);

  if (isNaN(heightInCm) || isNaN(weightInKg) || "") {
    resultSpan.style.color = "blue";
    resultSpan.textContent = "Pleas enter valid numbers!";
    return;
  }

  const heightInMeters = heightInCm / 100;
  const bmi = weightInKg / (heightInMeters * heightInMeters);
  const roundBmi = bmi.toFixed(2);

  resultSpan.style.color = "red";
  resultSpan.textContent = roundBmi;

  // BMI ranges
  underWeightSpan.textContent = "BMI less then 18.5 skinny";
  normalRangSpan.textContent = "BMI 18.5 - 24.9 ok";
  overWeightSpan.textContent = "BMI more then 25 obis";

  if (bmi < 18.5) {
    underWeightSpan.style.color = "red";
    normalRangSpan.style.color = "black";
    overWeightSpan.style.color = "black";
    resultSpan.textContent += " (Underweight skinny)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    normalRangSpan.style.color = "red";
    overWeightSpan.style.color = "black";
    underWeightSpan.style.color = "black";
    resultSpan.textContent += " (Normal range ok)";
  } else if (bmi >= 25) {
    overWeightSpan.style.color = "red";
    normalRangSpan.style.color = "black";
    underWeightSpan.style.color = "black";
    resultSpan.textContent += " (Overweight obis)";
  }
});
