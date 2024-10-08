// Select links and content container
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");
const content = document.getElementById("content");

// Content for different sections
const homeContent = `<section class="active">
<h1>Home Page</h1><p>Welcome to our single-page website!</p>
<div class="first-cart"></div>
</section>`;
const aboutContent = `<section><h1>About Us</h1><p>We are a small company focused on web development.</p></section>`;
const contactContent = `<section><h1>Contact Us</h1><p>Email us at info@example.com</p></section>`;

// Load default home page
content.innerHTML = homeContent;

// Event listeners for navigation
homeLink.addEventListener("click", () => {
  content.innerHTML = homeContent;
});

aboutLink.addEventListener("click", () => {
  content.innerHTML = aboutContent;
});

contactLink.addEventListener("click", () => {
  content.innerHTML = contactContent;
});
