// modal-products

const modalWindows = document.querySelectorAll(".modal-our-products");
const btnExit = document.querySelectorAll(".btn-exit");
const prodTitle = document.querySelector(".modal-text-title");
const prodDescription = document.querySelector(".modal-text-description");

function slider(product) {
  document.body.classList.add("overflow-hidden");

  const galleryThumbs = new Swiper(`.gallery-thumbs-${product}`, {
    spaceBetween: 10,
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
}

btnExit.forEach((el) => {
  el.addEventListener("click", () => {
    modalWindows.forEach((el) => {
      el.classList.remove("modal-show");
    });
    document.body.classList.remove("overflow-hidden");
  });
});

const productLinks = document.querySelector(".who-we-list-links");
productLinks.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("who-we-text-link")) {
    document.querySelector(`.${e.target.id}`).classList.add("modal-show");
    document.body.classList.add("overflow-hidden");
    document.querySelector(`.${e.target.id}`).classList.add("modal-show");
    slider(e.target.id);
  }
});
const productLinks2 = document.querySelector(".layout-2-columns");
productLinks2.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("our-product-item-link")) {
    document.querySelector(`.${e.target.id}`).classList.add("modal-show");
    document.body.classList.add("overflow-hidden");
    slider(e.target.id);
  }
});

// modal-request
const links = document.querySelectorAll(".btn-send-request");
const modalRequest = document.querySelector(".modal-send-request");
const btnBackRequest = document.querySelector(".btn-request-back");
const btnEx = document.querySelector(".exit");

links.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    modalRequest.classList.add("modal-show-req");
  });
});
btnBackRequest.addEventListener("click", () => {
  modalRequest.classList.remove("modal-show-req");
});

btnEx.addEventListener("click", () => {
  modalRequest.classList.remove("modal-show-req");
  modalWindows.forEach((el) => {
    el.classList.remove("modal-show");
  });
  document.body.classList.remove("overflow-hidden");
});

// header
// const navigationBlock = document.querySelector(".navigation");
// const burgerBtn = document.querySelector(".burger-btn");
// const btnContact = document.querySelector(".btn-in-header");
// const btnLinks = document.querySelector(".nav-item-link.open");

// burgerBtn.addEventListener("click", (event) => {
//   burgerBtn.classList.toggle("burger-btn-active");
//   navigationBlock.classList.toggle("navigation-open");
//   document.body.classList.toggle("overflow-hidden");
// });

// window.addEventListener("mouseup", (e) => {
//   if (e.target.classList.contains("link")) {
//     navigationBlock.classList.remove("navigation-open");
//     document.body.classList.remove("overflow-hidden");
//     burgerBtn.classList.remove("burger-btn-active");
//   }
// });

// const anchors = document.querySelectorAll('a[href*="#"]');
// anchors.forEach((el) => {
//   el.addEventListener("click", (event) => {
//     event.preventDefault();
//     const blockId = el.getAttribute("href");
//     // document.querySelector(" " + blockId).scrollIntoView({
//     //   behavior: "smooth",
//     //   block: "start",
//     // });
//     window.scrollTo({
//       top: document.querySelector(blockId).offsetTop - 50,
//       behavior: "smooth",
//     });
//   });
// });

// document.addEventListener("dblclick", () => {
//   console.log(pageYOffset);
// });

// footer

// const btn_openMenu = document.querySelector(".open-menu");
// const menu = document.querySelector(".footer-sec-nav-list");
// btn_openMenu.addEventListener("click", () => {
//   menu.classList.toggle("sec-nav-list-show");
// });
