let input = document.getElementById("input");
let searchBtn = document.getElementById("searchBtn");
let cityNameListStorageBox = document.getElementById(
  "city-name-list-storage-box"
);
let weatherDetails = document.querySelector(".weather-details");
let apiKey = "5d7110ee6019b47c48dabc6afe3e1a47";

let cityArrList = JSON.parse(localStorage.getItem("cities")) || []; // Get from local storage

// Load cities from local storage on page load
window.onload = function () {
  loadCitiesFromStorage();
};

// Search button event listener
searchBtn.addEventListener("click", () => {
  let cityName = input.value.trim();
  if (cityName && !cityArrList.includes(cityName)) {
    cityArrList.push(cityName);
    localStorage.setItem("cities", JSON.stringify(cityArrList)); // Save to local storage
    addCityToList(cityName);
    fetchWeatherData(cityName);
  }
  input.value = ""; // Clear the input field
});

// Function to fetch weather data
async function fetchWeatherData(cityName) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  let data = await fetch(url);

  if (!data.ok) {
    alert("City not found!");
    return;
  }

  let response = await data.json();

  displayWeather(response);
}

// Function to display weather data
function displayWeather(response) {
  weatherDetails.innerHTML = ""; // Clear previous details
  let weatherDiv = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  let li4 = document.createElement("li");
  let li5 = document.createElement("li");
  let li6 = document.createElement("li");
  li1.textContent = `City: ${response.name}`;
  li2.textContent = `Weather Code: ${response.cod}`;
  li3.textContent = `Weather Type: ${response.weather[0].main}`;
  li4.textContent = `Temp : ${response.main.temp}`;
  li5.textContent = `Wind Speed: ${response.wind.speed}`;
  li6.textContent = `Country: ${response.sys.country}`;

  weatherDiv.appendChild(li1);
  weatherDiv.appendChild(li2);
  weatherDiv.appendChild(li3);
  weatherDiv.appendChild(li4);
  weatherDiv.appendChild(li5);
  weatherDiv.appendChild(li6);
  weatherDetails.appendChild(weatherDiv);
}

// Load cities from local storage and display them
function loadCitiesFromStorage() {
  cityArrList.forEach((cityName) => {
    addCityToList(cityName);
  });
}

// Add city to the city list box
function addCityToList(cityName) {
  let cityItem = document.createElement("li");
  cityItem.textContent = cityName;
  cityItem.addEventListener("click", () => {
    fetchWeatherData(cityName); // Fetch and display weather on click
  });
  cityNameListStorageBox.appendChild(cityItem);
}
