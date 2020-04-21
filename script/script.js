$(function () {
  $(".slider").slick({
    // autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      ' <button class="slick__arrow slick-prev"><img src="img/slider/Left.png" alt="prev" /></button>',
    nextArrow:
      '<button class="slick__arrow slick-next"><img src="img/slider/Right.png" alt="next" /></button>',
  });
});

const menu = document.querySelector("#menu");
const menuBlock = document.querySelector("#menublock");

menu.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  menuBlock.classList.toggle("menu-block-active");
});
