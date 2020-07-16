export function RequestModallogic() {
  const link = document.querySelector(".btn-send-request");
  const modalRequest = document.querySelector(".modal-send-request");
  const modalProduct = document.querySelector(".modal-our-products");
  const btnBackRequest = document.querySelector(".btn-request-back");
  const btnExit = document.querySelector(".exit");
  const body = document.querySelector("body");
  link.addEventListener("click", (e) => {
    e.preventDefault();
    modalRequest.classList.add("modal-show-req");
  });
  btnBackRequest.addEventListener("click", () => {
    modalRequest.classList.remove("modal-show-req");
  });

  btnExit.addEventListener("click", () => {
    modalRequest.classList.remove("modal-show-req");
    modalProduct.classList.remove("modal-show");
    body.classList.remove("overflow-hidden");
  });
}

export function showRequestModal() {
  const modalRequest = document.querySelector(".modal-send-request");
  modalRequest.classList.add("modal-show");
}
