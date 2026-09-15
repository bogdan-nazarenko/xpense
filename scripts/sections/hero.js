import { dialogImpl } from "../templates/dialog.js";
import { demoModal } from "../components/demo-modal.js";

const heroButton = document.querySelector(".hero__button");

dialogImpl.init(heroButton, demoModal);
