// Get all the navigation links
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");
const teamLink = document.getElementById("team");

// Get the main content area where we'll dynamically render content
const contentArea = document.getElementById("content");

// Define the content for each section
const pages = {
  home: `
        <section id="homeSection">
            <h1>Home Page</h1>
            <p>Welcome to our single-page website! This is the Home section.</p>
        </section>
    `,
  about: `
        <section id="aboutSection">
            <h1>About Us</h1>
            <p>Learn more about us in this About section. We are a small company specializing in web development.</p>
        </section>
    `,
  contact: `
        <section id="contactSection">
            <h1>Contact Us</h1>
            <p>Reach out to us via email or phone for any inquiries!</p>
        </section>
    `,
  team: `
        <section id="contactSection">
            <h1>Our team member</h1>
            <p>Reach out to us via email or phone for any inquiries!</p>
        </section>
    `,
};

// Function to render content dynamically
function renderContent(page) {
  // Apply fade-out effect before changing content
  contentArea.style.opacity = "0";

  // Add a short delay for the fade-out effect to complete
  setTimeout(() => {
    contentArea.innerHTML = pages[page]; // Insert the content into the main area
    contentArea.style.opacity = "1"; // Fade back in
  }, 300);
}

// Event listeners for each navigation link
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  renderContent("home"); // Render Home content dynamically
});

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  renderContent("about"); // Render About content dynamically
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  renderContent("contact"); // Render Contact content dynamically
});

teamLink.addEventListener("click", (e) => {
  e.preventDefault();
  renderContent("team");
});

// Load the home page content by default when the page loads
renderContent("home");
