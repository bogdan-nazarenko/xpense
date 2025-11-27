typeof WOW !== "undefined" && new WOW().init();
typeof AOS !== "undefined" && AOS.init();

const wrap = document.querySelector(".wrapper");
const btnMenu = document.querySelector(".btn__head__menu");
const navs = document.querySelector(".navs");
const openMod = "open";

btnMenu.addEventListener("click", function () {
  const isOpen = btnMenu.classList.contains(openMod);

  btnMenu.classList.toggle(openMod);
  navs.classList.toggle(openMod);
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
const active = "active";

function ppWindow(btnOpen, pp) {
  btnOpen.addEventListener("click", () => {
    pp.classList.add(active);
    document.body.style.overflowY = "hidden";
  });

  function closeWindow() {
    pp.classList.remove(active);

    if (!navs.classList.contains(openMod)) {
      document.body.removeAttribute("style");
    }
  }

  pp.addEventListener("click", closeWindow);
  btnPopupClose.addEventListener("click", closeWindow);
  popupIn.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

ppWindow(btnPopupHead, popupDemo);
ppWindow(btnPopupBase, popupDemo);
