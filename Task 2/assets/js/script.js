const openButton = document.querySelector(".open__toggle");
const closeButton = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__list");
const list = document.querySelector(".nav__item--inactive");
const bg = document.querySelector(".bg__blur--inactive");

// Function to handle closing the menu with animation
function closeMenu() {
  menu.classList.add("nav__list--closing");

  setTimeout(() => {
    menu.classList.remove("nav__list--active");
    list.classList.remove("nav__item--active");
    bg.classList.remove("bg__blur--active");
    menu.classList.remove("nav__list--closing");
  }, 200);
}

function checkWidthAndCloseMenu() {
  if (window.innerWidth < 769) {
    // Automatically close the menu on resize if needed
    closeMenu();
  }
}

checkWidthAndCloseMenu();

openButton.addEventListener("click", () => {
  menu.classList.add("nav__list--active");
  list.classList.add("nav__item--active");
  bg.classList.add("bg__blur--active");
});

closeButton.addEventListener("click", closeMenu);
bg.addEventListener("click", closeMenu);

window.addEventListener("resize", checkWidthAndCloseMenu);
