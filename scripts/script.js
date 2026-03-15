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
const popupContainer = document.querySelector(".popup__container");
const popupCloseButton = document.querySelector(".popup__close__button");

btnPopupHead.addEventListener("click", () => popupDemo.show());
btnPopupBase.addEventListener("click", () => popupDemo.show());
popupDemo.addEventListener("click", () => popupDemo.close());
popupContainer.addEventListener("click", (event) => event.stopPropagation());
popupCloseButton.addEventListener("click", () => popupDemo.close());

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768 && navHead.classList.contains(openMod)) {
    navHead.classList.remove(openMod);
    btnMenu.classList.remove(openMod);
    document.body.removeAttribute("style");
    wrap.removeAttribute("style");
  }
});
