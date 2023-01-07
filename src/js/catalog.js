import { SlideToggle } from "./classes/SlideToggle";
import { isWindowSizeSmallerThen } from "./utils/helpers";
import { Body } from "./classes/Body";

const catalogLinks = document.querySelector(".js-catalog-links");
const subLinks = document.querySelectorAll(".js-catalog-sub-link");
const topLinks = document.querySelectorAll(".js-catalog-top-link");
const openListMenuBtn = document.querySelector(".js-open-list-menu");
const closeListMenuBtn = document.querySelector(".js-close-list-menu");
const catalogListMenu = document.querySelector(".js-catalog-list-menu");

export function initCatalog() {
  // const listItemsWrapper = document.querySelector(".js-catalog-links");
  //
  if (!topLinks) {
    return;
  }

  topLinks.forEach(function (topLink) {
    topLink.slide = new SlideToggle(
      topLink.dataset.container,
      "catalog__pointSublist--active"
    );
    //todo Проблема на планшете и
    // мобилке высота активного саблиста изначально 0
    topLink.addEventListener("click", function (event) {
      event.preventDefault();
      topLink
        .closest(".catalog__pointListItem")
        .classList.toggle("catalog__pointListItem--active");
      topLink.slide.toggle();
    });
  });
  toggleListMenu();

  // listItemsWrapper.addEventListener("click", function (event) {
  //   event.preventDefault();
  //   const target = event.target;
  //   const item = target.closest(".catalog__pointListItemLink");
  //   const subListItem = item.querySelector(".catalog__pointSublistItem");
  //
  //   if (!item) {
  //     return;
  //   }
  //
  //   const SpoilerElement = new SlideToggle(
  //     item.dataset.container,
  //     "catalog__pointSublist--active"
  //   );
  //
  //   item
  //     .closest(".catalog__pointListItem")
  //     .classList.toggle("catalog__pointListItem--active");
  //
  //   SpoilerElement.toggle();
  // });
}

function toggleListMenu() {
  // if (!isWindowSizeSmallerThen(1021)) {
  //   return;
  // }

  if (!openListMenuBtn || !closeListMenuBtn) {
    return;
  }

  openListMenuBtn.addEventListener("click", function () {
    catalogListMenu.classList.add("catalog__left--active");
    Body.fixBody();
  });

  closeListMenuBtn.addEventListener("click", function () {
    catalogListMenu.classList.remove("catalog__left--active");
    Body.releaseBody();
  });
}
