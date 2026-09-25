let body = document.querySelector('body');

let logo = document.querySelector("img");

let modeSwitcher = document.getElementById("mode-switcher");
modeSwitcher.addEventListener("change", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        logo.src = "";
    } else {
        logo.src = "./images/byui-logo-blue.webp";
    }
})