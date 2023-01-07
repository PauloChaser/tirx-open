import { isWindowSizeSmallerThen } from "./utils/helpers";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

export function initMap() {
  const mapPoint = document.querySelector(".js-map-point");
  if (!mapPoint) {
    return;
  }

  setTimeout(() => {
    mapPoint.classList.remove("contacts__mapPoint--hidden");
  }, 2000);

  if (!isWindowSizeSmallerThen(1021)) {
    return;
  }
  const map = document.querySelector(".js-open-map");
  const openButton = document.querySelector(".js-open-button");

  if (!map || !openButton) {
    return;
  }

  openButton.addEventListener("click", function () {
    map.querySelector("img").click();
  });

  lightGallery(map, {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    thumbnail: false,
    download: false,
    zoom: true,
    counter: false,
    controls: true,
  });
}
