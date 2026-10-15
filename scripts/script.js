import "./layout/header.js";

import "./sections/hero.js";
import "./sections/support.js";

import "./layout/footer.js";

new WOW({ offset: 500 }).init();
AOS.init({ offset: 500, delay: 200, duration: 500, once: true });
