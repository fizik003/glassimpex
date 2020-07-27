class Footer {
  constructor() {
    this.btn_openMenu = document.querySelector(".open-menu");
    this.menu = document.querySelector(".footer-sec-nav-list");
    this.init();
  }

  init() {
    this.openFooterMenu();
  }
  openFooterMenu() {
    this.btn_openMenu.addEventListener("click", (e) => {
      e.preventDefault();
      this.menu.classList.toggle("sec-nav-list-show");
    });
  }
}

const footer = new Footer();
