const toggler = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".container-menu");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("menu-expanded");
});
