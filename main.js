"use strict";
// To eventListener of Menubar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

const navbarHome = document.querySelector(".navbar__menu__item:first-child");
const navbarAbout = document.querySelector(".navbar__menu__item:nth-child(2)");
const navbarSkills = document.querySelector(".navbar__menu__item:nth-child(3)");
const navbarWork = document.querySelector(".navbar__menu__item:nth-child(4)");
const navbarContact = document.querySelector(".navbar__menu__item:last-child");

const arrowUp = document.querySelector(".arrow-up");
const toggleBtn = document.querySelector(".navbar__toggle-btn");
const navbarMenu = document.querySelector(".navbar__menu");
//
function scrollMenubarBorder() {
  document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    console.log(navbarHeight);
    console.log(window.innerWidth);
    if (window.scrollY > navbarHeight && window.innerWidth > 768) {
      navbar.classList.add("navbar__colorize");
    } else {
      navbar.classList.remove("navbar__colorize");
    }
    if (window.scrollY >= 0 && window.scrollY <= 450) {
      navbarHome.classList.add("active");
      navbarAbout.classList.remove("active");
      navbarSkills.classList.remove("active");
      navbarWork.classList.remove("active");
      navbarContact.classList.remove("active");
      arrowUp.classList.remove("show");
    } else if (window.scrollY >= 451 && window.scrollY <= 1170) {
      navbarHome.classList.remove("active");
      navbarAbout.classList.add("active");
      navbarSkills.classList.remove("active");
      navbarWork.classList.remove("active");
      navbarContact.classList.remove("active");
      arrowUp.classList.add("show");
    } else if (window.scrollY >= 1171 && window.scrollY <= 1670) {
      navbarHome.classList.remove("active");
      navbarAbout.classList.remove("active");
      navbarSkills.classList.add("active");
      navbarWork.classList.remove("active");
      navbarContact.classList.remove("active");
      arrowUp.classList.add("show");
    } else if (window.scrollY >= 1671 && window.scrollY <= 2150) {
      navbarHome.classList.remove("active");
      navbarAbout.classList.remove("active");
      navbarSkills.classList.remove("active");
      navbarWork.classList.add("active");
      navbarContact.classList.remove("active");
      arrowUp.classList.add("show");
    } else {
      navbarHome.classList.remove("active");
      navbarAbout.classList.remove("active");
      navbarSkills.classList.remove("active");
      navbarWork.classList.remove("active");
      navbarContact.classList.add("active");
      arrowUp.classList.add("show");
    }
  });
}
function scrollMenubarClick() {
  navbarHome.addEventListener("click", () => {
    console.log("clicked");
    const scrollTo = document.querySelector("#home");
    scrollTo.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  navbarAbout.addEventListener("click", () => {
    console.log("clicked");
    const scrollTo = document.querySelector("#about");
    scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  navbarSkills.addEventListener("click", () => {
    console.log("clicked");
    const scrollTo = document.querySelector("#skills");
    scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  navbarWork.addEventListener("click", () => {
    console.log("clicked");
    const scrollTo = document.querySelector("#work");
    scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  navbarContact.addEventListener("click", () => {
    console.log("clicked");
    const scrollTo = document.querySelector("#contact");
    scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
// arrowUp Button eventListener
function arrowUpButton() {
  arrowUp.addEventListener("click", () => {
    const scrollTo = document.querySelector("#home");
    scrollTo.scrollIntoView({ behavior: "smooth" });
  });
}

function homeOpacity() {
  const home = document.querySelector(".home__container");
  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  });
}

function showMenubarFromToggle() {
  toggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
  });
}

scrollMenubarBorder();
scrollMenubarClick();
arrowUpButton();
//homeOpacity();
showMenubarFromToggle();
