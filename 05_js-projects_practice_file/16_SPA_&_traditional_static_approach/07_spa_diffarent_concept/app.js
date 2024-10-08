// Define the content for different "pages"
const pages = {
  home: `
        <h2>Welcome to Home Page</h2>
        <p>This is the home page content. Click the links in the navbar to navigate.</p>
      `,
  about: `
        <h2>About Us</h2>
        <p>This is the about page content. We provide information about our company.</p>
      `,
  contact: `
        <h2>Contact Us</h2>
        <p>This is the contact page content. You can reach us at contact@example.com.</p>
      `,
};

// Function to load content based on the clicked link
const loadPage = (page) => {
  document.getElementById("inner-container").innerHTML = pages[page];
};

// Add event listeners to navbar links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const page = event.target.getAttribute("data-link");
    loadPage(page); // Load the corresponding page content
  });
});

// Optionally, handle hash changes directly via URL
window.addEventListener("hashchange", () => {
  const page = window.location.hash.substring(1) || "home";
  loadPage(page);
});

// Load the initial page based on the URL or default to home
window.addEventListener("load", () => {
  const initialPage = window.location.hash.substring(1) || "home";
  loadPage(initialPage);
});

let virtualDOM = { message: "Hello, World!" };

const render = (vDOM) => {
  const app = document.getElementById("app1");
  if (app.innerText !== vDOM.message) {
    app.innerText = vDOM.message;
  }
};

// Initial render
render(virtualDOM);

// Simulate a state change after 3 seconds
setTimeout(() => {
  virtualDOM.message = "Hello, Dynamic World!";
  render(virtualDOM); // Only update if content changes
}, 3000);

// ********************** content li item

const content = document.getElementById("content");
let itemCount = 2;

const loadMoreContent = () => {
  document.getElementById("loadingMessage").style.display = "block";
  setTimeout(() => {
    itemCount += 2;
    for (let i = itemCount - 1; i <= itemCount; i++) {
      content.innerHTML += `<p>Item ${i}</p>`;
    }
    document.getElementById("loadingMessage").style.display = "none";
  }, 1000);
};

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreContent();
  }
});

// ****************************

const HomeComponent = () => `<h1>Home Page</h1>`;
const AboutComponent = () => `<h1>About Page</h1>`;
const ContactComponent = () => `<h1>Contact Page</h1>`;

const routes = {
  home: HomeComponent,
  about: AboutComponent,
  contact: ContactComponent,
};

const renderComponent = (route) => {
  document.getElementById("app3").innerHTML = routes[route]();
};

// Example: Render Home page initially
renderComponent("home");

// Simulate route change (e.g., user clicking on a link)
setTimeout(() => {
  renderComponent("about"); // Switch to About page after 3 seconds
}, 3000);

// *************************** welcome back

const isLoggedIn = true;

const renderContent = () => {
  if (isLoggedIn) {
    return `<h1>Welcome back, User!</h1>`;
  } else {
    return `<h1>Please log in to continue</h1>`;
  }
};

document.getElementById("app4").innerHTML = renderContent();

// *****************************

document.getElementById("loadUsers").addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const userList = users.map((user) => `<p>${user.name}</p>`).join("");
  document.getElementById("userList").innerHTML = userList;
});

// *****************************

document.getElementById("greetBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const greeting = `Hello, ${name}!`;
  document.getElementById("greeting").innerText = greeting;
});

// ***************** Dynamic Rendering Using Template Literals

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const renderItems = (items) => {
  return `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
};

document.getElementById("app7").innerHTML = renderItems(items);

// ************************  Using Intersection Observer for Lazy Loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.backgroundColor = "lightblue";
    }
  });
});

document.querySelectorAll(".page").forEach((page) => {
  observer.observe(page);
});

// *************************

const loadPage1 = async (url) => {
  const res = await fetch(url);
  const html = await res.text();
  document.getElementById("app8").innerHTML = html;
};

window.addEventListener("hashchange", () => {
  const page = window.location.hash.substring(1) || "home";
  loadPage1(`${page}.html`);
});

window.addEventListener("load", () => {
  const defaultPage = window.location.hash.substring(1) || "home";
  loadPage1(`${defaultPage}.html`);
});

// ******************
const templates = {
  home: `<h1>Home Page</h1>`,
  about: `<h1>About Page</h1>`,
  contact: `<h1>Contact Page</h1>`,
};

const showPage = (page) => {
  document.getElementById("app9").innerHTML =
    templates[page] || `<h1>404 Page</h1>`;
};

window.addEventListener("hashchange", () => {
  showPage(window.location.hash.substring(1));
});

window.addEventListener("load", () => {
  const defaultPage = window.location.hash.substring(1) || "home";
  showPage(defaultPage);
});

// ********************** 
import { router } from "./router.js";

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  router();
});

// router.js
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";

const routes1 = {
  "/": HomePage,
  "/about": AboutPage,
};

export const router = () => {
  const path = window.location.pathname;
  const page = routes1[path] || "404 Page";
  document.getElementById("app10").innerHTML = page();
};

// **************************
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  const routes = {
    "/": "Home Page",
    "/about": "About Page",
    "/contact": "Contact Page",
  };
  const content = routes[window.location.pathname] || "404 Page";
  document.getElementById("content").innerHTML = content;
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
