// Select DOM elements
let navMenu = document.querySelector("#nav-menu");
let navToggle = document.querySelector("#nav-toggle");
let navClose = document.querySelector("#nav-close");

// Show menu when navToggle is clicked
if (navToggle) {
  navToggle.addEventListener("click", () => {
    console.log("Menu opened");
    navMenu.classList.add("show-menu");
  });
}

// Hide menu when navClose is clicked
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Close the menu when a navLink is clicked
let navLink = document.querySelectorAll(".nav-link");
let linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((e) => e.addEventListener("click", linkAction));

// Add shadow to header when scrolled
const shadowHeader = () => {
  const header = document.querySelector("#header");
  window.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

// Show scroll up button when scrolled down
const scrollUp = () => {
  const scrolUp = document.querySelector("#scroll-up");
  window.scrollY >= 350
    ? scrolUp.classList.add("show-scroll")
    : scrolUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Activate section links on scroll
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  // console.log("Scroll position:", scrollDown);

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav_menu a[href*=" + sectionId + "]"
    );

    // console.log("Section ID:", sectionId, "Top:", sectionTop, "Height:", sectionHeight);

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scroll reveal animation using ScrollReveal library
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
});
sr.reveal(".home-data, .footer");
sr.reveal(".home-dish", { delay: 500, distance: "100px", origin: "bottom" });
sr.reveal(".home-vadapav", { delay: 1200, distance: "100px", duration: 1500 });
sr.reveal(".home-ingredient", { delay: 1600, interval: 100 });
sr.reveal(".recipe-img, .delivery-img, .contact-img, .video-container", {
  origin: "left",
});
sr.reveal(".recipe-data, .delivery-data, .contact-data", { origin: "right" });
sr.reveal(".popular-card", { interval: 100 });
