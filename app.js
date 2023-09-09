/* Created by Tivotal */

let sidebar = document.querySelector(".sidebar");
let btn = document.querySelector(".menu-btn");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  changeIcon();
});

function changeIcon() {
  if (sidebar.classList.contains("open")) {
    btn.className = "menu-btn fas fa-bars-staggered";
  } else {
    btn.className = "menu-btn fas fa-bars";
  }
}
