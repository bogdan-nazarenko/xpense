typeof AOS !== "undefined" && AOS.init();
typeof WOW !== "undefined" && new WOW().init();

const wrap = document.querySelector(".wrapper");
const btnMenu = document.querySelector(".btn__head__menu");
const navHead = document.querySelector(".nav__head");
const openMod = "open";

btnMenu.addEventListener("click", function () {
  const isOpen = navHead.classList.contains(openMod);

  btnMenu.classList.toggle(openMod);
  navHead.classList.toggle(openMod);
  document.body.style.overflowY = !isOpen
    ? "hidden"
    : document.body.removeAttribute("style");
  wrap.style.paddingTop = !isOpen ? "initial" : wrap.removeAttribute("style");
});

const btnPopupHead = document.querySelector(".btn__head");
const btnPopupBase = document.querySelector(".btn__base");
const popupDemo = document.querySelector(".popup_demo");
const popupIn = document.querySelector(".popup__in");
const btnPopupClose = document.querySelector(".popup__close");

function openWindow() {
  popupDemo.classList.add(openMod);
}

function closeWindow() {
  popupDemo.classList.remove(openMod);
}

btnPopupHead.addEventListener("click", openWindow);
btnPopupBase.addEventListener("click", openWindow);
popupDemo.addEventListener("click", closeWindow);
btnPopupClose.addEventListener("click", closeWindow);
popupIn.addEventListener("click", (event) => event.stopPropagation());

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768 && btnMenu.classList.contains(openMod)) {
    btnMenu.classList.remove(openMod);
    navHead.classList.remove(openMod);
    document.body.removeAttribute("style");
    wrap.removeAttribute("style");
  }
});
