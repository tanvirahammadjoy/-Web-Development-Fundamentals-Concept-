// Routes definition
const routes = {
  "/": "Welcome to the Home Page!",
  "/about": "Learn more about us on the About Page.",
  "/contact": "Feel free to contact us on this page.",
};

// Function to handle navigation without page reload
function navigateTo(url) {
  history.pushState(null, null, url); // Add new entry to the history stack
  handleRouting(); // Load the appropriate content
}

// Function to handle which content to display based on the current route
function handleRouting() {
  const currentPath = window.location.pathname;
  const appDiv = document.getElementById("app");

  // If the route exists, load the corresponding content; else, show a 404 page
  if (routes[currentPath]) {
    appDiv.innerHTML = `<h1>${routes[currentPath]}</h1>`;
  } else {
    appDiv.innerHTML = "<h1>404 - Page Not Found</h1>";
  }
}

// Handle back/forward navigation with popstate event
window.addEventListener("popstate", handleRouting);

// Intercept navigation link clicks
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); // Prevent default link behavior
      navigateTo(e.target.href); // Handle navigation without reloading
    }
  });

  // Handle initial page load
  handleRouting();
});
