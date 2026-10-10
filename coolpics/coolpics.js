let menuButton = document.querySelector(".menu-btn");
let pictureGrid = document.querySelector(".picture-grid");
let modal = document.querySelector("dialog");
let modalImage = modal.querySelector("img");
let closeViewer = document.querySelector(".close-viewer");
let nav = document.querySelector("nav");

pictureGrid.addEventListener("click", (e) => {
    const img = e.target;
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    let full;
    full = src.replace("sm", "full");

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
})

closeViewer.addEventListener("click", () => {
    modal.close();
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
})