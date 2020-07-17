const click1 = document.querySelector(".click1");
const click2 = document.querySelector(".click2");
const click3 = document.querySelector(".click3");
const click4 = document.querySelector(".click4");
const click5 = document.querySelector(".click5");

click1.addEventListener("touchstart", () => {
  alert("touchstart");
});
click2.addEventListener("touchend", () => {
  alert("touchend");
});
click3.addEventListener("touchcancel", () => {
  alert("touchcancel");
});
click4.addEventListener("click", () => {
  alert("click");
});

click5.onclick = () => {
  alert(5);
};

alert("123");
