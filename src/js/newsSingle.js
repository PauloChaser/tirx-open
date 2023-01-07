import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";
import SimpleBar from "simplebar";

export function initNewsSingle() {
  const otherNewsWrapper = document.querySelector(".js-other-news-wrapper");
  if (!otherNewsWrapper) {
    return;
  }
  if (window.matchMedia("(max-width: 1021px)").matches) {
    new SimpleBar(otherNewsWrapper, {
      autoHide: false,
      forceVisible: true,
    });
  }
}
