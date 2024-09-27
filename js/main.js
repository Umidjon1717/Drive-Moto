document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const lowerMenu = document.querySelector(".header_lower_menu");
  const headerMenu = document.querySelector(".header_menu_nav");

  menuToggle.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    lowerMenu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200,
    once: true,
  });
});
