import { mobileMql } from "../utils/responsive.js";
import { dialogImpl } from "../templates/dialog.js";
import { demoModal } from "../components/demo-modal.js";

const headerButton = document.querySelector(".header__button");

dialogImpl.init(headerButton, demoModal);

const headerLinks = document.querySelectorAll(".header a");
const pageMenu = document.getElementById("page-menu");
const headerMenuButton = document.querySelector(".header__menu-button");

const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

function menuButtonHandler() {
  const isExpanded = headerMenuButton.ariaExpanded === "false";

  headerMenuButton.ariaExpanded = isExpanded ? "true" : "false";
  headerMenuButton.ariaLabel = isExpanded ? "Close menu" : "Open menu";

  pageMenu.classList.toggle("header__nav_open", isExpanded);

  main.inert = isExpanded;
  footer.inert = isExpanded;
}

headerMenuButton.addEventListener("click", menuButtonHandler);

const menuLinkOrButton = pageMenu.querySelector("a, button");

function setMenuFocus(event) {
  if (
    headerMenuButton.ariaExpanded === "true" &&
    event.propertyName === "visibility" &&
    event.target === event.currentTarget
  ) {
    menuLinkOrButton.focus();
  }
}

pageMenu.addEventListener("transitionend", setMenuFocus);

function closeMobileMenu() {
  if (headerMenuButton.ariaExpanded === "false") return;

  headerMenuButton.ariaExpanded = "false";
  headerMenuButton.ariaLabel = "Open menu";

  pageMenu.classList.remove("header__nav_open");

  main.inert = false;
  footer.inert = false;
}

headerLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));
mobileMql.addEventListener("change", closeMobileMenu);
window.addEventListener("popstate", closeMobileMenu);
