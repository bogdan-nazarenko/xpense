typeof WOW !== "undefined" && new WOW().init();
typeof AOS !== "undefined" && AOS.init();

const wrap = document.querySelector(".wrapper");
const mobile = document.querySelector(".mobile");
const btnMenu = document.querySelector(".btn__head__menu");
const navs = document.querySelector(".navs");
const openMod = "open";

btnMenu.addEventListener("click", function () {
  if (!btnMenu.classList.contains(openMod)) {
    btnMenu.classList.add(openMod);
    navs.classList.add(openMod);
    mobile.classList.add(openMod);
    document.body.style.overflowY = "hidden";
    wrap.style.paddingTop = "unset";
  } else if (btnMenu.classList.contains(openMod)) {
    btnMenu.classList.remove(openMod);
    navs.classList.remove(openMod);
    mobile.classList.remove(openMod);
    document.body.removeAttribute("style");
    wrap.removeAttribute("style");
  }
});

const btnPopupHead = document.querySelector(".btn__head");
const btnPopupBase = document.querySelector(".btn__base");
const popupDemo = document.querySelector(".popup_demo");
const popupIn = document.querySelector(".popup__in");
const btnPopupClose = document.querySelector(".popup__close");

function ppWindow(btnOpen, pp) {
  btnOpen.addEventListener("click", function () {
    pp.classList.add("active");
    document.body.style.overflowY = "hidden";
  });

  function closeWindow() {
    pp.classList.remove("active");

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
