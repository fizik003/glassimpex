import { showMap } from "../components/location/location.js";
import { openMenu } from "../components/footer/footer.js";
import { Burger } from "../components/header/header.js";

showMap(24.781375, 59.439932);

const burger = new Burger();
burger.openBurger();

window.addEventListener("mouseup", (e) => {
  if (e.target.classList.contains("link")) {
    burger.closeBurger();
  }
});
