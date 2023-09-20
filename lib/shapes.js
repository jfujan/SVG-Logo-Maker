class Shapes {
    constructor(characters, color, characterColor) {
        this.characters = characters;
        this.color = color;
        this.characterColor = characterColor;
    }
    setColor(color) {
        this.color = color
    }
}

// const waffle = new Shapes('JSF', 'purple', 'white')
// console.table(waffle)

module.exports = Shapes