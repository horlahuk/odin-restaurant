// contentBuilder.js

export function createHeading() {
  const h1 = document.createElement("h1");
  h1.textContent = "Tasty Cookies";
  return h1;
}

export function createIntroParagraph() {
  const p = document.createElement("p");
  p.textContent =
    "Welcome to our cookie shop! We offer a variety of delicious cookies made with love.";
  return p;
}

export function createSpecialtiesHeading() {
  const h2 = document.createElement("h2");
  h2.textContent = "Our Specialties";
  return h2;
}

export function createCookieList() {
  const ul = document.createElement("ul");
  const items = [
    "Chocolate Chip Cookies",
    "Oatmeal Raisin Cookies",
    "Peanut Butter Cookies",
    "Snickerdoodles",
  ];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  return ul;
}

export function createContactHeading() {
  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";
  return h2;
}

export function createContactParagraph() {
  const p = document.createElement("p");
  p.append(
    "If you have any questions or would like to place an order, please contact us at: "
  );

  const a = document.createElement("a");
  a.href = "mailto:info@tastycookies.com";
  a.textContent = "info@tastycookies.com";

  p.appendChild(a);
  p.append(".");
  return p;
}
