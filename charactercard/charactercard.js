import { Character } from "./characterclass.js";

let samAltman = new Character(
    "Sam Altman",
    "Evil Ram-Eating Billionaire",
    1,
    100
);

let attributes = {
    characterName: document.querySelector(".character-name"),
    characterClass: document.querySelector(".character-class"),
    characterLevel: document.querySelector(".level"),
    characterHP: document.querySelector(".HP"),
};

renderStats(samAltman);

let attackButton = document.querySelector(".attack-button")
let levelUpButton = document.querySelector(".level-button")

attackButton.addEventListener("click", () => {
    samAltman.attacked(20);
    renderStats(samAltman);
})

levelUpButton.addEventListener("click", () => {
    samAltman.levelUp(1);
    renderStats(samAltman);
})

function renderStats(character) {
    Object.keys(attributes).forEach((key) => {
        attributes[key].textContent = character[key];
    })
}

