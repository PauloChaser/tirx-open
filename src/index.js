import "./css/style.css";
import "swiper/css/bundle";

import "simplebar";
import "simplebar/dist/simplebar.css";
import "lightgallery/css/lightgallery-bundle.css";
import { initHeader } from "./js/header";
import { initModals } from "./js/modals";
import { initPopup } from "./js/popUp";
import { initMainBannerScrollTo } from "./js/mainBannerScrollTo";
import { initMainProductsSlider } from "./js/mainProductsSlider";
import { initImageSlider } from "./js/imageSlider";
import { initForm } from "./js/form";
import { initOurProducts } from "./js/ourProducts";
import { initNewsSingle } from "./js/newsSingle";
import { initMap } from "./js/map";
import { initCatalog } from "./js/catalog";

import { initAdvantages } from "./js/advantages";
import { initOurOffer } from "./js/ourOffer";
import { initTargets } from "./js/targets";

import { initRecommendedSlider } from "./js/recommendedSlider";
import { initProjectBannerSlider } from "./js/projectBannerSlider";
import { initCookie } from "./js/cookie";
import { initPreloader } from "./js/preloader";
import { initConstructor } from "./js/constructor";
import { initProductCardSlider } from "./js/productCardSlider";

document.addEventListener("DOMContentLoaded", function () {
  initSlideUp();
  initHeader();
  initModals();
  initPopup();
  initMainProductsSlider();
  initMainBannerScrollTo();
  initImageSlider();
  initForm();
  initOurProducts();
  initNewsSingle();
  initMap();
  initCatalog();

  initAdvantages();
  initOurOffer();
  initTargets();

  initRecommendedSlider();
  initProjectBannerSlider();
  initCookie();
  initPreloader();
  initConstructor();

  initProductCardSlider();
});

function initSlideUp() {
  const slideUpButton = document.querySelector(".js-slide-up");

  if (!slideUpButton) {
    return;
  }

  slideUpButton.addEventListener("click", function () {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
}
