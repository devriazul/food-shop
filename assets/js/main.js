const menuBtn = document.querySelector("#menu-btn");
const mainNav = document.querySelector(".main-nav");
const headerArea = document.querySelector(".header-area");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  mainNav.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  menuBtn.classList.remove("fa-times");
  mainNav.classList.remove("active");
  if (scrollY > 80) {
    headerArea.classList.add("active");
  } else {
    headerArea.classList.remove("active");
  }
});
