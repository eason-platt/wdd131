let menuButton = document.querySelector(".menu-btn");

let nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
})