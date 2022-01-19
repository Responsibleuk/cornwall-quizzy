/* jshint esversion: 8 */

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-menu");
});