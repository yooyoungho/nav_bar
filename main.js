const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_toggleBtn");
const icons = document.querySelector(".navbar_toggleBtn");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
