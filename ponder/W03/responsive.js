let menuBar = document.getElementById("menu-btn");

let nav = document.querySelector("nav");

menuBar.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBar.classList.toggle("change");
})