// Get all the navigation links
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");

// Get all the sections
const homeSection = document.getElementById("homeSection");
const aboutSection = document.getElementById("aboutSection");
const contactSection = document.getElementById("contactSection");

// Function to hide all sections
function hideAllSections() {
  homeSection.classList.remove("active");
  aboutSection.classList.remove("active");
  contactSection.classList.remove("active");
}

// Function to show the selected section
function showSection(section) {
  hideAllSections(); // Hide all other sections
  section.classList.add("active"); // Show the clicked section
}

// Event listeners for each navigation link
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(homeSection); // Show Home section
});

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(aboutSection); // Show About section
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(contactSection); // Show Contact section
});

// Show the home section by default when the page loads
showSection(homeSection);
