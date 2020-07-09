export function openMenu() {
  const btn_openMenu = document.querySelector(".open-menu");
  const menu = document.querySelector(".footer-sec-nav-list");
  btn_openMenu.addEventListener("click", () => {
    menu.classList.toggle("sec-nav-list-show");
  });
}
