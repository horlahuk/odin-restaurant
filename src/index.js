import "./styles.css"; // Importing CSS file
import {
  createHeading,
  createIntroParagraph,
  createSpecialtiesHeading,
  createCookieList,
  createContactHeading,
  createContactParagraph,
} from "./greeting.js";

// Function to build the content of the page
const content = document.getElementById("content");
content.append(
  createHeading(),
  createIntroParagraph(),
  createSpecialtiesHeading(),
  createCookieList(),
  createContactHeading(),
  createContactParagraph()
);
