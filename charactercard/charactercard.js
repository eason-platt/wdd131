class Character {
    constructor(characterName, characterClass, characterLevel, characterHP) {
        this.characterName = characterName;
        this.characterClass = characterClass;
        this.characterLevel = characterLevel;
        this.characterHP = characterHP;
    }

    attacked(hitpoints) {
            this.characterHP -= hitpoints;
            console.log(this.characterHP);
    }

    levelUp(levels) {
        this.characterLevel += levels;
        this.characterHP = 100;
        console.log(this.characterLevel);
    }
}

let samAltman = new Character(
    "Sam Altman",
    "Comically Evil Billionaire",
    1,
    100
);

let attributes = {
    characterName: document.querySelector(".character-name"),
    characterClass: document.querySelector(".character-class"),
    characterLevel: document.querySelector(".level"),
    characterHP: document.querySelector(".HP")
};

renderStats(samAltman, attributes);

let attackButton = document.querySelector(".attack-button")
let levelUpButton = document.querySelector(".level-button")

attackButton.addEventListener("click", () => {
    samAltman.attacked(20);
    renderStats(samAltman, attributes);
})

levelUpButton.addEventListener("click", () => {
    samAltman.levelUp(1);
    renderStats(samAltman, attributes);
})

function renderStats(character, attributes) {
    Object.keys(attributes).forEach((key) => {
        console.log(key, attributes[key]);
        attributes[key].textContent = character[key];
    })
}

