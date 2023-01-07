import { Body } from "./classes/Body";
import { isWindowSizeSmallerThen } from "./utils/helpers";
import { SlideToggle } from "./classes/SlideToggle";

const toggleLinkElement = document.querySelector(".js-main-menu-toggle");
const burgerOpen = document.querySelector(".js-burger");
const burgerClose = document.querySelectorAll(".js-main-menu-close");
const headerMenu = document.querySelector(".js-main-menu");
const header = document.querySelector(".js-header");
const leftPanel = document.querySelector(".js-left-panel");

const mainBanner = document.querySelector(".js-main-banner");

export function initHeader() {
  if (!burgerOpen || !burgerClose || !headerMenu || !header || !leftPanel) {
    return;
  }

  toggleLink();

  burgerOpen.addEventListener("click", function () {
    if (window.scrollY > 0) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });

      const handleBurgerScrollTop = () => {
        if (window.scrollY === 0) {
          openBurger();
          window.removeEventListener("scroll", handleBurgerScrollTop);
        }
      };

      window.addEventListener("scroll", handleBurgerScrollTop);
    } else {
      openBurger();
    }
  });

  burgerClose.forEach((button) => {
    button.addEventListener("click", function () {
      headerMenu.classList.remove("mainMenu--active");
      header.classList.remove("header--active");
      leftPanel.classList.remove("leftPanel--hide");

      mainBanner?.classList.remove("mainBanner--active");

      Body.toggleBody();
    });
  });

  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    if (Body.isFixed()) {
      return;
    }

    const halfHeight = window.innerHeight / 2;

    if (window.scrollY > halfHeight && window.scrollY > lastScroll) {
      leftPanel.classList.add("leftPanel--hide");
      burgerOpen.classList.add("header__burger--hide");
    }

    if (window.scrollY < halfHeight || window.scrollY < lastScroll) {
      leftPanel.classList.remove("leftPanel--hide");
      burgerOpen.classList.remove("header__burger--hide");
    }

    lastScroll = window.scrollY;
  });
}

function openBurger() {
  headerMenu.classList.add("mainMenu--active");
  header.classList.add("header--active");
  leftPanel.classList.add("leftPanel--hide");

  mainBanner?.classList.add("mainBanner--active");

  Body.toggleBody();
}

function toggleLink() {
  toggleLinkElement.addEventListener("click", function (e) {
    const SpoilerElement = new SlideToggle(
      toggleLinkElement.dataset.container,
      "mainMenu__linkSubLinks--active"
    );

    toggleLinkElement.classList.toggle("mainMenu__link--active");
    SpoilerElement.toggle();
  });
}
