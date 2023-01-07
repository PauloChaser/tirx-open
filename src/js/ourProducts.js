import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";
import { debounce, isWindowSizeSmallerThen } from "./utils/helpers";

const ourProductsCards = document.querySelector(".js-cards-items");

export function initOurProducts() {
  let simpleBar;

  if (!ourProductsCards) {
    return;
  }

  if (isWindowSizeSmallerThen(1021)) {
    simpleBar = initSimpleBar();
  }

  window.addEventListener(
    "resize",
    debounce(() => {
      if (isWindowSizeSmallerThen(1022)) {
        if (!simpleBar) {
          simpleBar = initSimpleBar();
        }
      } else {
        if (simpleBar) {
          simpleBar && simpleBar.unMount();
          simpleBar = false;
        }
      }
    }, 1000)
  );
}

function initSimpleBar() {
  return new SimpleBar(ourProductsCards, {
    autoHide: false,
    forceVisible: true,
  });
}
