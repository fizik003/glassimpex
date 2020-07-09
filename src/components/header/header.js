export class Burger {
  navigationBlock = document.querySelector(".navigation");
  burgerBtn = document.querySelector(".burger-btn");
  body = document.querySelector("body");
  btnContact = document.querySelector(".btn-in-header");
  btnLinks = document.querySelector(".nav-item-link.open");

  openBurger = () => {
    this.burgerBtn.addEventListener("click", (e) => {
      this.burgerBtn.classList.toggle("burger-btn-active");
      this.navigationBlock.classList.toggle("navigation-open");
      this.body.classList.toggle("overflow-hidden");
    });
  };

  closeBurger = () => {
    this.navigationBlock.classList.remove("navigation-open");
    this.body.classList.remove("overflow-hidden");
    this.burgerBtn.classList.remove("burger-btn-active");
  };
}
