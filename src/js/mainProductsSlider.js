import Swiper from "swiper/bundle";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { debounce, isWindowSizeSmallerThen } from "./utils/helpers";
import SimpleBar from "simplebar";
import "simplebar";
import "simplebar/dist/simplebar.css";

const sliderElement = document.querySelector(".js-main-products-swiper");
const galleries = document.querySelectorAll(".js-open-gallery");

export function initMainProductsSlider() {
  if (!sliderElement || !galleries) {
    return;
  }

  let simpleBar, swiper;

  if (isWindowSizeSmallerThen(1022)) {
    zoomItems();
    simpleBar = productSimpleBar();
  } else {
    swiper = productSwiper();
  }

  window.addEventListener(
    "resize",
    debounce(() => {
      if (isWindowSizeSmallerThen(1022)) {
        if (swiper && !simpleBar) {
          swiper.destroy();
          swiper = false;

          simpleBar = productSimpleBar();
        }
      } else {
        if (simpleBar && !swiper) {
          simpleBar.unMount();
          simpleBar = false;

          swiper = productSwiper();
        }
      }
    }, 1000)
  );
}

function zoomItems() {
  galleries.forEach(function (gallery) {
    gallery.gallery = lightGallery(gallery, {
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
      thumbnail: true,
      download: false,
      zoom: true,
      counter: false,
      controls: true,
    });
  });
}

function productSwiper() {
  return new Swiper(sliderElement, {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: ".js-main-product-next",
      prevEl: ".js-main-product-prev",
    },
  });
}

function productSimpleBar() {
  return new SimpleBar(sliderElement, {
    autoHide: false,
    forceVisible: true,
  });
}
