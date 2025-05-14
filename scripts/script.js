const wrap = document.querySelector(".wrapper");
const mobile = document.querySelector(".mobile");
const btnMenu = document.querySelector(".btn__head__menu");
const navs = document.querySelector(".navs");

btnMenu.addEventListener("click", function () {
  if (!btnMenu.classList.contains("rotate--open")) {
    btnMenu.classList.add("rotate--open");
    navs.classList.add("open--head");
    mobile.classList.add("mob--menu");
    document.body.style.overflowY = "hidden";
    wrap.style.paddingTop = "unset";
  } else if (btnMenu.classList.contains("rotate--open")) {
    btnMenu.classList.remove("rotate--open");
    navs.classList.remove("open--head");
    mobile.classList.remove("mob--menu");
    document.body.removeAttribute("style");
    wrap.removeAttribute("style");
  }
});

const btnPopupHead = document.querySelector(".btn__head");
const btnPopupBase = document.querySelector(".btn__base");
const popupDemo = document.querySelector(".popup_demo");
const btnPopupClose = document.querySelector(".popup__close");

function ppWindow(btnOpen, pp) {
  btnOpen.addEventListener("click", function () {
    pp.classList.add("active");
    document.body.style.overflowY = "hidden";
  });

  btnPopupClose.addEventListener("click", function () {
    if (navs.classList.contains("open--head")) {
      pp.classList.remove("active");
      return;
    } else if (!navs.classList.contains("open--head")) {
      pp.classList.remove("active");
      document.body.removeAttribute("style");
    }
  });
}

ppWindow(btnPopupHead, popupDemo);
ppWindow(btnPopupBase, popupDemo);