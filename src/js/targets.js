const target = document.querySelector(".js-target");
const mission = document.querySelector(".js-mission");

export function initTargets() {
  if (!target) {
    return;
  }

  function targetScrollListener() {
    if (window.scrollY < target.offsetTop) {
      return;
    }

    mission.classList.add("mission--shown");

    window.removeEventListener("scroll", targetScrollListener);
  }

  setTimeout(() => {
    window.addEventListener("scroll", targetScrollListener);
  }, 1000);
}
