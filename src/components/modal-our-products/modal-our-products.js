import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

export function modalProductLogic(title, text) {
  const modalWindow = document.querySelector(".modal-our-products");
  const prodTitle = document.querySelector(".modal-text-title");
  const prodDescription = document.querySelector(".modal-text-description");
  const body = document.querySelector("body");
  const btnExit = document.querySelector(".btn-exit");
  prodTitle.textContent = title;
  prodDescription.innerHTML = text;
  modalWindow.classList.add("modal-show");
  body.classList.add("overflow-hidden");
  btnExit.addEventListener("click", (e) => {
    modalWindow.classList.remove("modal-show");
    body.classList.remove("overflow-hidden");
  });
}

var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

galleryThumbs.a;
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

export function slider(arrImg) {
  galleryTop.removeAllSlides();
  galleryThumbs.removeAllSlides();

  function addToSlider(el, slider) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.style.backgroundImage = `url(${el})`;
    slider.appendSlide(slide);
  }
  arrImg.map((el) => {
    addToSlider(el, galleryThumbs);
  });
  arrImg.map((el) => {
    addToSlider(el, galleryTop);
  });

  galleryThumbs.update();
  galleryTop.update();
}
