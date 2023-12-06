// Scroll to Change background header
function scrollHeader() {
  const head = document.querySelector(".header");
  this.scrollY >= 50
    ? head.classList.add("scroll__head")
    : head.classList.remove("scroll__head");
}
window.addEventListener("scroll", scrollHeader);

//  swiper product
var swiper = new Swiper(".product_container ", {
  spaceBetween : 32,
  grabCursor : true,
  centeredSlides : true,
  slidesPerView: 3,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0 : {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
    
  },
});

//  SCROLL UP
function scrollUp() {
  const scrollUp = document.querySelector(".scroll__up");
  this.scrollY >= 200
    ? scrollUp.classList.add("scroll__up__show")
    : scrollUp.classList.remove("scroll__up__show");
}
window.addEventListener("scroll", scrollUp);

/* Scroll section active link */

let sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionContent = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionContent) {
      document
        .querySelector(`.nav_menu a[href*= ${sectionId}]`)
        .classList.add("active_link");
    } else {
      document
        .querySelector(`.nav_menu a[href*= ${sectionId}]`)
        .classList.remove("active_link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// DARK LIGHT THEME
const themeBtn = document.getElementById("theme");
const dark = `dark-theme`;
const sun = `ri-sun-line`;

const getCurrentIcon = () =>
  themeBtn.classList.contains(sun) ? `ri-moon-line` : `ri-sun-line`;
const getCurrentTheme = () =>
  document.body.classList.contains(dark) ? `dark` : `light`;

let selectedIcon = localStorage.getItem("selected-icon");
let selectedTheme = localStorage.getItem("selectedTheme");

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](dark);
  themeBtn.classList[selectedIcon === "ri-moon-line" ? "remove" : "add"](sun);
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle(dark);
  themeBtn.classList.toggle(sun);
  localStorage.setItem("selected-icon", getCurrentIcon);
  localStorage.setItem("seclectedTheme", getCurrentTheme);
});



/* SCROLL  Reveal */

const sr = ScrollReveal({
  distance : "60px",
  duration : 2500,
  origin: "top",
  delay : 400,
})
sr.reveal(".home_data,.product_container");
sr.reveal(".home_image img:nth-child(1),.home_image img:nth-child(2)",{origin : "bottom", delay : 600, interval : 100});
sr.reveal(".new_product", {interval : 100, origin: "right"});
sr.reveal(".collection_explore:nth-child(1)", {origin: "right"});
sr.reveal(".collection_explore:nth-child(2)", {origin: "left"});
sr.reveal(".brand_img", {interval : 100, origin: "top"});
sr.reveal(".footer_container", {interval : 100, origin: "top"});
sr.reveal(".footer_information", {origin: "bottom"});
