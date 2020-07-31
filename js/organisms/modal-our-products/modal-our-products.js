class ModalProducts {
  constructor() {
    this.productLinks = document.querySelectorAll(".product-link");
    this.modalWindows = document.querySelectorAll(".modal-our-products");
    this.btnExit = document.querySelectorAll(".btn-exit");
    this.init();
  }

  initSlider(product) {
    document.body.classList.add("overflow-hidden");
    const galleryThumbs = new Swiper(`.gallery-thumbs-${product}`, {
      spaceBetween: 30,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    const galleryTop = new Swiper(`.gallery-top-${product}`, {
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    galleryThumbs.update();
    galleryTop.update();
  }

  exitFromModal() {
    this.btnExit.forEach((el) => {
      el.addEventListener("click", () => {
        this.modalWindows.forEach((el) => {
          el.classList.remove("modal-show");
        });
        document.body.classList.remove("overflow-hidden");
      });
    });
  }

  linksOpenModal() {
    console.log("fun open");
    this.productLinks.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(`.${e.target.id}`).classList.add("modal-show");
        document.body.classList.add("overflow-hidden");
        document.querySelector(`.${e.target.id}`).classList.add("modal-show");
        this.initSlider(e.target.id);
      });
    });
  }

  init() {
    console.log("init");
    this.exitFromModal();
    this.linksOpenModal();
  }
}

const modalProducts = new ModalProducts();
