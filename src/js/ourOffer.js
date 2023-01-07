import { isWindowSizeSmallerThen } from "./utils/helpers";

const offer = document.getElementById("offer");
const offerLeft = document.querySelector(".js-main-offer-left");

let scheduledAnimationFrame;

export function initOurOffer() {
  if (!offer || !offerLeft || isWindowSizeSmallerThen(1220)) {
    return;
  }

  window.addEventListener("scroll", onScroll);
}

function onScroll() {
  if (scheduledAnimationFrame) {
    return;
  }

  scheduledAnimationFrame = true;
  requestAnimationFrame(updatePaddingTop);
}

function updatePaddingTop() {
  if (isWindowSizeSmallerThen(1220)) {
    return;
  }

  offerLeft.style.paddingTop = `${offerLeft.offsetTop / 5}px`;
  scheduledAnimationFrame = false;
}
