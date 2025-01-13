"use strict";

import "./index.css";
import "./carousel/carousel.css";
import { carousel } from "./carousel/carousel.js";

// js relating to drop down hamburger menu;

// handle drop menu clicks;
const dropDownButton = document.querySelector(".drop-down-button");
const menu = document.getElementById("menu");

menu.style.width = dropDownButton.offsetWidth + "px";

const toggleMenu = function collapseMenuAndMakeInactive() {
  dropDownButton.classList.toggle("active");
  menu.style.maxHeight = dropDownButton.classList.contains("active")
    ? (menu.style.maxHeight = menu.scrollHeight + "px")
    : null;
};

dropDownButton.addEventListener("click", (event) => {
  toggleMenu();
});

// JS relating to click events for menu items in drop down menu;
// link to Carousel logic;

const menuItems = document.querySelectorAll(".menu-item");

const carouselContainer = document.getElementById("carousel-div");

const handleMenuClick = function handleClickAndReturnCarousel(event) {
  if (event.target.classList.contains("menu-item")) {
    const carouselIndex = event.target.dataset.val;
    toggleMenu();
    new carousel(carouselContainer, carouselIndex);
  }
};

menuItems.forEach((item) => addEventListener("click", handleMenuClick));

// end hamburger menu JS;
