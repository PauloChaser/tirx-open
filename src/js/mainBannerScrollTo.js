export function initMainBannerScrollTo() {
  const scrollDownBtn = document.querySelector(".js-scroll-down");
  if (!scrollDownBtn) {
    return;
  }

  scrollDownBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const id = scrollDownBtn.getAttribute("href");

    if (!id.includes("#")) {
      return;
    }

    const element = document.querySelector(id);

    if (!element) {
      return;
    }

    window.scrollTo({
      behavior: "smooth",
      // duration: 200,
      top: element.getBoundingClientRect().top + window.scrollY ,
    });
  });

}