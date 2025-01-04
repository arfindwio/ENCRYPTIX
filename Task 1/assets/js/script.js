// deklarasi tombol dan menu
const button = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".nav__menu");

button.addEventListener("click", () => {
  menu.classList.toggle("nav__menu--active");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    prevEl: ".button-left",
    nextEl: ".button-right",
  },
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 4,
    },
  },
});
