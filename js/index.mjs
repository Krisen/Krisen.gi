$(document).ready(function () {
  $(".main__title-spoiler").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
/*uhdsfuoiyhdsoifyhoisdufiodsuoifujdsoifudsiu fjidsjufoidsju fi */
const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu__icon");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
  menu.querySelectorAll(".link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}
/*pdsofjsipoujfiposdujfoiudsiopfujpisdufpoisjkdpofi*/
let lastscroll = 0;
const defaultOffset = 100;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastscroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    // scrol down
    console.log("down");
    header.classList.add("hide");
  } else if (scrollPosition() < lastscroll && containHide()) {
    // scroll up
    console.log("up");
    header.classList.remove("hide");
  }
  lastscroll = scrollPosition();
});
// const anchors = document.querySelectorAll('a[href*="#"]');
// anchors.forEach((anchor) => {
//   anchor.addEventListene("click", (event) => {
//     event.preventDefault;

//     const blockID = anchor.getAttribute("href").substring(1);
//     document.getElementById(blockID).scrollIntoView({
//       behavior:"smooth"
//       block:"start"
//     });
//   });
// });
