export function RequestModallogic() {
  const link = document.querySelector(".link-send-request");
  const modalRequest = document.querySelector(".modal-send-request");
  const modalProduct = document.querySelector(".modal-our-products");
  const btnBackRequest = document.querySelector(".btn-request-back");
  const btnExit = document.querySelector(".exit");
  const body = document.querySelector("body");
  link.addEventListener("click", (e) => {
    modalRequest.classList.add("modal-show");
  });
  btnBackRequest.addEventListener("click", () => {
    modalRequest.classList.remove("modal-show");
  });

  btnExit.addEventListener("click", () => {
    modalRequest.classList.remove("modal-show");
    modalProduct.classList.remove("modal-show");
    body.classList.remove("overflow-hidden");
  });
}
