import { isWindowSizeSmallerThen } from "./utils/helpers";
import Swiper from "swiper/bundle";

export function initProjectBannerSlider() {
  // if (isWindowSizeSmallerThen(1022)) {
  new Swiper(".js-banner-swiper", {
    // slidesPerView: 2.2,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoHeight: true,
    loop: true,

    navigation: {
      nextEl: ".js-banner-project-next",
      prevEl: ".js-banner-project-prev",
    },
  });
  // }
}
