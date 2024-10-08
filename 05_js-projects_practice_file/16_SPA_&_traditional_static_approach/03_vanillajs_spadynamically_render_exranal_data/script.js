// we can use JavaScript to fetch content from external HTML files and inject it into the page. This is done using the Fetch API.

// Get the navigation links
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");

// Get the main content area where we'll dynamically render content
const contentArea = document.getElementById("content");

// Function to fetch and render content from an external source
async function renderContent(page) {
  // Apply fade-out effect before changing content
  contentArea.style.opacity = "0"; // Fade-out effect for smooth transition

  try {
    const response = await fetch(`${page}.html`); // Fetch content from corresponding file (e.g. about.html)
    const content = await response.text(); // Get the content as text

    // Add a short delay for the fade-out effect to complete
    setTimeout(() => {
      contentArea.innerHTML = content; // Insert the fetched content into the main area
      contentArea.style.opacity = "1"; // Fade back in
    }, 300); // 300ms delay for smooth transition
  } catch (error) {
    console.error("Error fetching content:", error);
  }
}

// Event listeners for navigation links
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  renderContent("home"); // Load Home content (static or default)
});

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  renderContent("about"); // Fetch and display content from about.html
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  renderContent("contact"); // Fetch and display content from contact.html
});

// Load the home page content by default when the page loads
renderContent("home");

// ******************* How It Works: ********************** //
// fetch() API: This function is used to fetch the external HTML files (about.html, contact.html, etc.). It sends a request to the server and retrieves the HTML content.
// Content Rendering: Once the content is fetched, it is inserted into the main section of the page using contentArea.innerHTML = content;.

// Event Listeners: JavaScript listens for clicks on the navigation links (e.g., "Home", "About", "Contact"). When clicked, it calls the renderContent() function with the corresponding page name (about, contact, etc.).

// Smooth Transition: A fade-out and fade-in effect makes the content load smoothly.
// Default Load: The renderContent('home') call ensures that when the page first loads, the Home section is shown by default.

// 4. Content Files (about.html, contact.html, etc.)
// These files should contain just the section-specific content.
// For example, about.html contains only the About page content, and contact.html contains only the Contact page content.

// Recap:
// index.html: This is the main file that loads a basic structure (header, nav, main). It has no content in the main tag at first.

// Content files (about.html, contact.html): These are separate files where the actual content for the different sections lives.
// script.js: Handles dynamically loading the content from those separate files using JavaScript and displaying it in the main tag of index.html.

// Why Use Dynamic Content Rendering:
// Performance: You don't load all the content at once, only when needed.
// Maintainability: The content for each section is stored in its own file, which is easier to manage and update.
// Modularity: You can reuse this approach to load content from other sources, like databases or APIs.
