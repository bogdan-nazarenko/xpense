new WOW({ offset: 500 }).init();
AOS.init({ offset: 500, delay: 200, duration: 500, once: true });

const ACTIVE = "active";
const OPEN = "open";
const NON_SCROLLABLE = "non-scrollable";
const PADDING_TOP_RESET = "padding-top--reset";

const wrapper = document.querySelector(".wrapper");
const headerMenu = document.querySelector(".header__menu");
const headerMenuButton = document.querySelector(".header__menu-button");

headerMenuButton.addEventListener("click", function () {
  document.body.classList.toggle(NON_SCROLLABLE);
  wrapper.classList.toggle(PADDING_TOP_RESET);
  headerMenu.classList.toggle(OPEN);
  this.classList.toggle(ACTIVE);
});

const mqlMinWidth768 = window.matchMedia("(width >= 768px)");

mqlMinWidth768.addEventListener("change", function () {
  if (this.matches) {
    document.body.classList.remove(NON_SCROLLABLE);
    wrapper.classList.remove(PADDING_TOP_RESET);
    headerMenu.classList.remove(OPEN);
    headerMenuButton.classList.remove(ACTIVE);
  }
});

const forms = document.querySelectorAll(".support__form, .footer__form");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => event.preventDefault());
});

const headerButton = document.querySelector(".header__button");
const heroButton = document.querySelector(".hero__button");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close-button");

headerButton.addEventListener("click", () => modal.showModal());
heroButton.addEventListener("click", () => modal.showModal());
modal.addEventListener("click", function (event) {
  if (event.target === this) this.close();
});
modalCloseButton.addEventListener("click", () => modal.close());
