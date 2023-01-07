import { isWindowSizeSmallerThen } from "./utils/helpers";
import { Body } from "./classes/Body";

import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";

export function initPopup() {
  const cardItems = document.querySelector(".js-cards-items");

  if (!cardItems) {
    return;
  }

  const cardItem = document.querySelector(".js-card-item");
  const closePopUpButton = cardItem.querySelectorAll(".js-popUp-item-close");
  // const header = document.querySelector(".js-header-transparent");
  const overlay = document.querySelector(".js-overlay");

  cardItems.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target;
    if (target.closest(".js-popUp-open")) {
      cardItem.classList.add("popUp--active");

      // if (isWindowSizeSmallerThen(601)) {
      //   header.classList.add("header--transparent");
      // }

      Body.fixBody();
      Body.toggleOverlay(true);
    }
  });

  closePopUpButton.forEach(function (button) {
    button.addEventListener("click", closePopUpCardItem);
  });

  overlay.addEventListener("click", closePopUpCardItem);

  function closePopUpCardItem() {
    cardItem.classList.remove("popUp--active");
    // header.classList.remove("header--transparent");

    Body.releaseBody();
    Body.toggleOverlay(false);
  }

  const imgWrapper = cardItem.querySelector(".js-popup-item-img-wrapper");

  imgWrapper.addEventListener("mousewheel", function (e) {
    imgWrapper.classList.toggle("popUp__imgWrapper--narrow", e.deltaY > 0);
  });

  const popUpContent = cardItem.querySelector(".js-popup-content");
  scrollPopUpContent();

  function scrollPopUpContent() {
    if (!popUpContent) {
      return;
    }
    const simpleBar = new SimpleBar(
      document.querySelector(".js-popUp-content"),
      {
        classNames: {
          content: "simplebar-content",
          scrollContent: "simplebar-scroll-content",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
        },
      }
    );

    simpleBar.getScrollElement().addEventListener("scroll", function () {
      const hasActiveClass = imgWrapper.classList.contains(
        "popUp__imgWrapper--narrow"
      );

      imgWrapper.classList.toggle(
        "popUp__imgWrapper--narrow",
        simpleBar.getScrollElement().scrollTop > 0
      );

      if (
        hasActiveClass !==
        imgWrapper.classList.contains("popUp__imgWrapper--narrow")
      ) {
        simpleBar.recalculate();
      }
    });
  }
}
