import { showMap } from "../components/location/location.js";
import { openFooterMenu } from "../components/footer/footer.js";
import { Burger } from "../components/header/header.js";
import {
  slider,
  modalProductLogic,
} from "../components/modal-our-products/modal-our-products.js";
import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";
import { products } from "../components/data/data.js";
import {
  RequestModallogic,
  showRequestModal,
} from "../../src/components/modal-send-request/modal-our-request.js";
let userAg = navigator.userAgent.match(/iPhone|iPad|iPod/i);
const productLinks = document.querySelector(".who-we-list-links");
const productLinks2 = document.querySelector(".layout-2-columns");
const logo = document.querySelectorAll(".logo");

// let event = userAg != null ? "touchstart" : "click";
let event = "touchstart";

showMap(24.781375, 59.439932);
openFooterMenu();

const burger = new Burger();
burger.openBurger();

window.addEventListener("mouseup", (e) => {
  if (e.target.classList.contains("link")) {
    burger.closeBurger();
  }
});

logo.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(1);
    window.location.href = "/";
  });
});

productLinks.addEventListener(event, (e) => {
  e.preventDefault();
  if (e.target.classList.contains("who-we-text-link")) {
    modalProductLogic(
      products[e.target.id].title,
      products[e.target.id].description
    );
    console.log(e.target.id);
    slider(products[e.target.id].img);
  }
});

productLinks2.addEventListener(event, (e) => {
  e.preventDefault();
  if (e.target.classList.contains("our-product-item-link")) {
    modalProductLogic(
      products[e.target.id].title,
      products[e.target.id].description
    );
    console.log(e.target.id);
    slider(products[e.target.id].img);
  }
});

RequestModallogic();

console.log(userAg);
console.log(event);
console.log(navigator.userAgent);
