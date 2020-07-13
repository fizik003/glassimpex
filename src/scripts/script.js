import { showMap } from "../components/location/location.js";
import { openFooterMenu } from "../components/footer/footer.js";
import { Burger } from "../components/header/header.js";
import {
  slider,
  modalProductLogic,
} from "../components/modal-our-products/modal-our-products.js";
import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";
import { products } from "../components/data/data.js";
import { RequestModallogic } from "../../src/components/modal-send-request/modal-our-request.js";

const productLinks = document.querySelector(".who-we-list-links");
const productLinks2 = document.querySelector(".layout-2-columns");

showMap(24.781375, 59.439932);
openFooterMenu();

const burger = new Burger();
burger.openBurger();

window.addEventListener("mouseup", (e) => {
  if (e.target.classList.contains("link")) {
    burger.closeBurger();
  }
});

productLinks.addEventListener("click", (e) => {
  if (e.target.classList.contains("who-we-text-link")) {
    modalProductLogic(
      products[e.target.id].title,
      products[e.target.id].description
    );
    console.log(e.target.id);
    slider(products[e.target.id].img);
  }
});

productLinks2.addEventListener("click", (e) => {
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
