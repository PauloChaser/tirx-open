import Swiper from "swiper/bundle";

export function initProductCardSlider() {
  // const asideSwiper = document.querySelector(".js-product-card-slider-aside");
  // const centralSwiper = document.querySelector(".js-product-card-slider");
  //
  // if (!asideSwiper || !centralSwiper) {
  //   return;
  // }

  const asideSlider = new Swiper(".js-product-card-slider-aside", {
    slidesPerView: 3,
    direction: "vertical",
    // effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },

    loop: false,
    slideActiveClass: "product__itemAsideImageWrapper--active",
    slideClass: "product__itemAsideImageWrapper",
  });

  const centralSlider = new Swiper(".js-product-card-slider", {
    slidesPerView: 1,
    direction: "horizontal",
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    pagination: {
      el: ".js-product-card-slider-pagination",
      clickable: true,
    },
    mousewheel: true,
    thumbs: {
      swiper: asideSlider,
      slideThumbActiveClass: "product__itemAsideImageWrapper--active",
    },

    breakpoints: {
      601: {
        slidesPerView: 1,
        direction: "vertical",
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        pagination: false,
        thumbs: {
          swiper: asideSlider,
          slideThumbActiveClass: "product__itemAsideImageWrapper--active",
        },
      },
    },
  });
}
