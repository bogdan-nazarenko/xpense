typeof AOS !== "undefined" && AOS.init();
typeof WOW !== "undefined" && new WOW().init();

const ACTIVE = "active";
const OPEN = "open";

const wrapper = document.querySelector(".wrapper");
const headerNav = document.querySelector(".header__nav");
const headerMenuButton = document.querySelector(".header__menu-button");

headerMenuButton.addEventListener("click", function () {
  const isOpen = headerNav.classList.contains(OPEN);

  document.body.style.overflowY = !isOpen
    ? "hidden"
    : document.body.removeAttribute("style");
  wrapper.style.paddingTop = !isOpen
    ? "initial"
    : wrapper.removeAttribute("style");
  headerNav.classList.toggle(OPEN);
  headerMenuButton.classList.toggle(ACTIVE);
});

const headerNavButton = document.querySelector(".header__nav-button");
const heroButton = document.querySelector(".hero__button");
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const popupCloseButton = document.querySelector(".popup__close-button");

headerNavButton.addEventListener("click", () => popup.show());
heroButton.addEventListener("click", () => popup.show());
popup.addEventListener("click", () => popup.close());
popupContainer.addEventListener("click", (event) => event.stopPropagation());
popupCloseButton.addEventListener("click", () => popup.close());

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768 && headerNav.classList.contains(OPEN)) {
    document.body.removeAttribute("style");
    wrapper.removeAttribute("style");
    headerNav.classList.remove(OPEN);
    headerMenuButton.classList.remove(OPEN);
  }
});
