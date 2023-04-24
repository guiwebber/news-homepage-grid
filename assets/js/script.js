let blackout = document.querySelector(".blackout");
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".closeMenu");
let menuOpen = document.querySelector(".menuOpen");

menu.addEventListener("click", () => {
  blackout.style.display = "block";
  menuOpen.style.display = "block";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  blackout.style.display = "none";
  menuOpen.style.display = "none";
  closeMenu.style.display = "none";
});
