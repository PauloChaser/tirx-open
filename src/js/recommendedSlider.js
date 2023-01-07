import Swiper from "swiper/bundle";
import { isWindowSizeSmallerThen } from "./utils/helpers";

export function initRecommendedSlider() {
  new Swiper(".js-recommended-slider", {
    slidesPerView: "auto",

    // effect: "fade",
    // loop: true,
    // width: "auto",

    spaceBetween: 20,
    navigation: {
      nextEl: ".js-recommended-next",
      prevEl: ".js-recommended-prev",
    },
    pagination: {
      el: ".js-recommended-slider-progressbar",
      type: "progressbar",
    },

    breakpoints: {
      1022: {
        // slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
}
