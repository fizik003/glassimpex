// modal-products
// import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

const modalWindow = document.querySelector(".modal-our-products");
const body = document.querySelector("body");
const btnExit = document.querySelector(".btn-exit");
const prodTitle = document.querySelector(".modal-text-title");
const prodDescription = document.querySelector(".modal-text-description");
// slider
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

function slider(arrImg, title, text) {
  modalWindow.classList.add("modal-show");
  body.classList.add("overflow-hidden");
  galleryTop.removeAllSlides();
  galleryThumbs.removeAllSlides();
  prodTitle.textContent = title;
  prodDescription.innerHTML = text;

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

btnExit.addEventListener("click", (e) => {
  modalWindow.classList.remove("modal-show");
  body.classList.remove("overflow-hidden");
});

// modal-request
const link = document.querySelector(".btn-send-request");
const modalRequest = document.querySelector(".modal-send-request");
const modalProduct = document.querySelector(".modal-our-products");
const btnBackRequest = document.querySelector(".btn-request-back");
const btnEx = document.querySelector(".exit");
// const body = document.querySelector("body");
link.addEventListener("click", (e) => {
  e.preventDefault();
  modalRequest.classList.add("modal-show-req");
});
btnBackRequest.addEventListener("click", () => {
  modalRequest.classList.remove("modal-show-req");
});

btnEx.addEventListener("click", () => {
  modalRequest.classList.remove("modal-show-req");
  modalProduct.classList.remove("modal-show");
  body.classList.remove("overflow-hidden");
});

// header
const navigationBlock = document.querySelector(".navigation");
const burgerBtn = document.querySelector(".burger-btn");
const btnContact = document.querySelector(".btn-in-header");
const btnLinks = document.querySelector(".nav-item-link.open");

burgerBtn.addEventListener("click", (event) => {
  burgerBtn.classList.toggle("burger-btn-active");
  navigationBlock.classList.toggle("navigation-open");
  body.classList.toggle("overflow-hidden");
});

window.addEventListener("mouseup", (e) => {
  if (e.target.classList.contains("link")) {
    navigationBlock.classList.remove("navigation-open");
    body.classList.remove("overflow-hidden");
    burgerBtn.classList.remove("burger-btn-active");
  }
});

// who-we
const productLinks = document.querySelector(".who-we-list-links");
productLinks.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("who-we-text-link")) {
    console.log(e.target.id);
    slider(
      products[e.target.id].img,
      products[e.target.id].title,
      products[e.target.id].description
    );
  }
});
const productLinks2 = document.querySelector(".layout-2-columns");
productLinks2.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("our-product-item-link")) {
    slider(
      products[e.target.id].img,
      products[e.target.id].title,
      products[e.target.id].description
    );
  }
});

// map
function showMap(lat, lng) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZml6aWsiLCJhIjoiY2thdTloZjJhMDk3NTJ5bzlqdmpuZXpzZSJ9.VRtOSj5RqTBn56KIVI1q6g";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [lat, lng],
    zoom: 15,
    scrollZoom: {
      ctrl: true,
    },
  });
  map.scrollZoom.disable();

  const marker = new mapboxgl.Marker().setLngLat([lat, lng]).addTo(map);
}

showMap(24.781375, 59.439932);
// footer

const btn_openMenu = document.querySelector(".open-menu");
const menu = document.querySelector(".footer-sec-nav-list");
btn_openMenu.addEventListener("click", () => {
  menu.classList.toggle("sec-nav-list-show");
});

// data
const products = {
  product1: {
    title: "Строительное листовое стекло",
    description: `В ассортимент входят все виды стекла 
                  PILKINTGTON, поставки осуществляются полными 
                  грузовиками клиентам напрямую с заводов России, 
                  Польши и Германии, а так же через наш склад 
                  хранения стекла «Jumbo». Возможны поставки 
                  стекла от других производителей со всего мира.`,
    img: [
      "./src/img/modal/window/1.jpg",
      "./src/img/modal/window/2.jpg",
      "./src/img/modal/window/3.jpg",
      "./src/img/modal/window/4.jpg",
      "./src/img/modal/window/5.jpg",
    ],
  },
  product2: {
    title: "Стекло для картинных рамок",
    description: `<ul class="more-details-list">
                    <li class="more-details-prod"> 
                      Нерезанное и резанное нешлифованное 
                      sheet-стекло Российского производства, 
                      изготовленное по технологии горизонтального 
                      вытягивания «Colburn». Доступные толщины 
                      (мм): 2,0; 1,8; 1,5.
                    </li> 
                    <li class="more-details-prod">
                      Нерезанное и резанное шлифованное
                      float-стекло от других производителей.
                      Доступные толщины (мм): 2,10; 2,0. 
                    </li> 
                    <li class="more-details-prod">
                      Резанное стекло хранится на нашем 
                      складе в Таллинне, в деревянных ящиках, 
                      разных стандартных размеров, и каждый 
                      лист в ящике упакован отдельно. 
                      Закупки возможны как полными грузами прямо
                      с завода, так и поящично с нашего склада.
                    </li> 
                  </ul>`,

    img: [
      "./src/img/modal/product2/1.jpg",
      "./src/img/modal/product2/2.jpg",
      "./src/img/modal/product2/3.jpg",
      "./src/img/modal/product2/4.jpg",
      "./src/img/modal/product2/5.jpg",
    ],
  },
  product3: {
    title: "Стекло-керамика для каминов",
    description: `Керамическое стекло с высокой 
                  степенью сопротивления огню для каминов 
                  японского бренда Nippon Electronic Glass 
                  NEOCERAM N-0. Cтекло доступно поящично 
                  с доставкой до клиента. Размер стекла 1266х2100 мм`,
    img: [
      "./src/img/modal/product3/1.jpg",
      "./src/img/modal/product3/2.jpg",
      "./src/img/modal/product3/3.jpg",
      "./src/img/modal/product3/4.jpg",
      "./src/img/modal/product3/5.jpg",
    ],
  },
};
