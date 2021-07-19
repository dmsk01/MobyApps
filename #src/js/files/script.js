const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (
    menuLink.dataset.goto &&
    document.querySelectorAll(menuLink.dataset.goto)
  ) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector(".header").offsetHeight;
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}
