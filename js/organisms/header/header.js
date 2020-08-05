class Header {
  constructor() {
    this.navigationBlock = document.querySelector(".navigation");
    this.burgerBtn = document.querySelector(".burger-btn");
    this.btnContact = document.querySelector(".btn-in-header");
    this.btnLinks = document.querySelector(".nav-item-link.open");
    this.anchors = document.querySelectorAll('a[href*="#"]');
    this.hederLinks = document.querySelector(".heder-links");
    this.init();
  }

  init() {
    this.toggleBurgerBtn();
    this.closeBurgerOnclick();
    this.smoothScrolling();
  }

  toggleBurgerBtn() {
    this.burgerBtn.addEventListener("click", () => {
      this.burgerBtn.classList.toggle("burger-btn-active");
      this.navigationBlock.classList.toggle("navigation-open");
      document.body.classList.toggle("overflow-hidden");
    });
    this.hederLinks.addEventListener("click", (e) => {
      console.log(12);
      if (window.innerWidth < 993) {
        e.preventDefault();
        console.log("ggg");
      }
    });
  }

  closeBurgerOnclick() {
    window.addEventListener("mouseup", (e) => {
      if (e.target.classList.contains("link")) {
        this.navigationBlock.classList.remove("navigation-open");
        document.body.classList.remove("overflow-hidden");
        this.burgerBtn.classList.remove("burger-btn-active");
      }
    });
  }

  smoothScrolling() {
    this.anchors.forEach((el) => {
      el.addEventListener("click", (event) => {
        event.preventDefault();
        const blockId = el.getAttribute("href");
        window.scrollTo({
          top: document.querySelector(blockId).offsetTop - 50,
          behavior: "smooth",
        });
      });
    });
  }
}

let header = new Header();
