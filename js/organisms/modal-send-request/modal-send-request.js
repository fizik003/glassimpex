class RequestModal {
  constructor() {
    this.links = document.querySelectorAll(".btn-send-request");
    this.modalRequest = document.querySelector(".modal-send-request");
    this.btnBackRequest = document.querySelector(".btn-request-back");
    this.btnEx = document.querySelector(".exit");
    this.modalWindows = document.querySelectorAll(".modal-our-products");
    this.init();
  }

  showmodal() {
    this.links.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        this.modalRequest.classList.add("modal-show-req");
      });
    });
  }

  backModal() {
    this.btnBackRequest.addEventListener("click", () => {
      this.modalRequest.classList.remove("modal-show-req");
    });
  }

  glogalExit() {
    this.btnEx.addEventListener("click", () => {
      this.modalRequest.classList.remove("modal-show-req");
      this.modalWindows.forEach((el) => {
        el.classList.remove("modal-show");
      });
      document.body.classList.remove("overflow-hidden");
    });
  }

  init() {
    this.showmodal();
    this.backModal();
    this.glogalExit();
  }
}

const requestModal = new RequestModal();
