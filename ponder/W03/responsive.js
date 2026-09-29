let menuBar = document.querySelector(".menu-btn");

let nav = document.querySelector("nav");

menuBar.addEventListener("click", () => {
    if (!nav.classList.contains("active")) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
})