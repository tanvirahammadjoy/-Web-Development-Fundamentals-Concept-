let searchBtn = document.getElementById("searchBtn");
let input = document.getElementById("input");

let apiKey = "5d7110ee6019b47c48dabc6afe3e1a47";

searchBtn.addEventListener("click", async () => {
  await weatherFetch(input.value.trim());
  input.value = "";
});

// by fetch this also worked simple way
// async function weatherFetch(city) {
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//   let data = await fetch(url);
//   let response = await data.json();
//   document.querySelector(".content1").textContent = response.name;
//   document.querySelector(".content2").textContent = response.main.temp;
//   document.querySelector(".content3").textContent = response.weather[0].main;
//   document.querySelector(".wether-details").classList.remove("hidden");
// }

// by XMLhttpRequest
// function weatherFetch(city) {
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//   let xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

//   xhr.open("GET", url, true); // Initialize the request

  // Log each state change from 0 to 4
//   xhr.onreadystatechange = function () {
//     console.log(`ReadyState: ${xhr.readyState}`);

//     if (xhr.readyState === 4 && xhr.status === 200) { // Check if the request is complete and successful
//       let response = JSON.parse(xhr.responseText); // Parse the response JSON
//       document.querySelector(".content1").textContent = response.name;
//       document.querySelector(".content2").textContent = response.main.temp;
//       document.querySelector(".content3").textContent =
//         response.weather[0].main;
//       document.querySelector(".wether-details").classList.remove("hidden");
//     }
//   };

//   xhr.send(); // Send the request
// }

// by fetch more net clean and err handled
async function weatherFetch(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  // 1. Initiating the fetch request
  console.log("Starting fetch request...");

  try {
    // 2. Sending request and waiting for the response
    let response = await fetch(url);
    console.log("Response received, status:", response.status);

    // 3. Checking if response is ok (status is 200-299)
    if (!response.ok) {
      console.log("Error: Failed to fetch data, status:", response.status);
      return;
    }

    // 4. Processing the JSON body
    let data = await response.json();
    console.log("Processing response data...");

    document.querySelector(".content1").textContent = data.name;
    document.querySelector(".content2").textContent = data.main.temp;
    document.querySelector(".content3").textContent = data.weather[0].main;
    document.querySelector(".wether-details").classList.remove("hidden");

    // 5. Completion of request
    console.log("Fetch request completed.");
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
