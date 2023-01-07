import Swiper from "swiper/bundle";

export function initImageSlider() {

  new Swiper(".js-image-slider", {
    slidesPerView: 1,

    effect: "fade",
    loop: true,

    navigation: {
      nextEl: ".js-image-slider-next",
      prevEl: ".js-image-slider-prev",
    },
  });
}