console.log("javascript is connected");
// Variables
const hamburger = document.querySelector(".hamburger");
const dropDownNav = document.querySelector(".mobile-nav");
const projectBtn = document.getElementById("project-btn");
const designBtn = document.getElementById("design-btn");
const slider = document.getElementById("slider");
const loader = document.querySelector(".loader");
const heroPage = document.querySelector(".hero");
const nav = document.querySelector("#desktopNav");
const projOverlay = document.querySelector(".main-proj-img");

document.addEventListener("touchstart", function () {}, true);

// Loader
window.addEventListener("load", function () {
  loader.classList.add("loader-hidden");
});

// Work section slider menu

// projectBtn.addEventListener("click", function () {
//   this.classList.add("proj-active");
//   designBtn.classList.remove("proj-active");
//   slider.classList.remove("slider-active");
// });

// designBtn.addEventListener("click", function () {
//   projectBtn.classList.remove("proj-active");
//   this.classList.add("proj-active");
//   slider.classList.add("slider-active");
// });

// Mobile Nav

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  dropDownNav.classList.toggle("active-nav");
});

// Mobile & Tablet Projects

projOverlay.addEventListener("click", function () {
  alert("ive been clicked");
});
