export class Character {
    constructor(characterName, characterClass, characterLevel, characterHP) {
        this.characterName = characterName;
        this.characterClass = characterClass;
        this.characterLevel = characterLevel;
        this.characterHP = characterHP;
    }

    attacked(hitpoints) {
        try {
            this.characterHP -= 20;
            console.log(this.characterHP);
        } catch (error) {
            console.log(error)
        }
    }

    levelUp(levels) {
        this.characterLevel += levels;
        console.log(this.characterLevel);
    }
}