import "./styles.css"; // Import the main CSS stylesheet
import {
  createHeading,
  createIntroParagraph,
  createSpecialtiesHeading,
  createCookieList,
  createContactHeading,
  createContactParagraph,
} from "./greeting.js";

// Get references to navigation buttons
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const home = document.getElementById("home");

// Get the main content container
const content = document.getElementById("content");
// Initialize the content with the home page
content.append(
  createHeading(),
  createIntroParagraph(),
  createSpecialtiesHeading(),
  createCookieList(),
  createContactHeading(),
  createContactParagraph()
);

// Handle click event for the Home button
home.addEventListener("click", () => {
  content.innerHTML = ""; // Clear existing content
  content.append(
    createHeading(),
    createIntroParagraph(),
    createSpecialtiesHeading(),
    createCookieList(),
    createContactHeading(),
    createContactParagraph()
  );
});

// Utility function to clear the content container
function clearContent() {
  content.innerHTML = "";
}

// Handle click event for the Menu button
menu.addEventListener("click", () => {
  clearContent(); // Clear existing content
  content.append(createSpecialtiesHeading(), createCookieList());
});

// Handle click event for the Contact button
contact.addEventListener("click", () => {
  clearContent(); // Clear existing content
  content.append(createContactHeading(), createContactParagraph());
});
