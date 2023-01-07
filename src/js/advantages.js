const advantages = document.querySelector(".js-advantages");
let index = 0;

export function initAdvantages() {
  if (!advantages) {
    return;
  }

  const prevArrow = advantages.querySelector(".js-advantages-prev");
  const nextArrow = advantages.querySelector(".js-advantages-next");

  if (!nextArrow || !prevArrow) {
    return;
  }

  console.log(1);

  const items = advantages.querySelector(".js-advantages-items");
  const bgs = advantages.querySelector(".js-advantages-bgs");
  const images = advantages.querySelector(".js-advantages-images");

  const current = advantages.querySelector(".js-advantages-current");
  const total = advantages.querySelector(".js-advantages-total");
  const circle = advantages.querySelector(".js-advantages-circle");

  const totalCount = items.children.length;

  total.innerText = String(totalCount).padStart(2, "0");

  prevArrow.addEventListener("click", function () {
    changeSlide(-1);
  });

  nextArrow.addEventListener("click", function () {
    changeSlide(1);
  });

  updateSlides(index, 0);

  setInterval(() => {
    changeSlide(1);
  }, 7000);

  function changeSlide(step) {
    circle.classList.remove("advantages__circleAnimated--active");

    let newIndex = index + step;

    if (newIndex < 0) {
      newIndex = totalCount - 1;
    }

    if (newIndex > totalCount - 1) {
      newIndex = 0;
    }

    index = newIndex;

    current.innerText = String(index + 1).padStart(2, "0");

    for (let i = 0; i < totalCount; i++) {
      updateSlides(index, i);
    }

    setTimeout(() => {
      circle.classList.add("advantages__circleAnimated--active");
    }, 50);
  }

  function updateSlides(index, position) {
    items.children[position].classList.toggle(
      "advantages__textItem--active",
      position === index
    );
    bgs.children[position].classList.toggle(
      "advantages__bgImage--active",
      position === index
    );
    images.children[position].classList.toggle(
      "advantages__item--active",
      position === index
    );
  }
}
