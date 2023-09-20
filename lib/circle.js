const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(characters, color, characterColor) {
        super(characters, color, characterColor);
    }
    render() {
        return `<svg width="300" height="200">
        <circle cx="100" cy="100" r="100" fill="${this.color}" />
        <text fill="${this.characterColor}" font-size="45" font-family="Verdana" x="65" y="110">${this.characters}</text>
      </svg>`
    }
} 

// const waffle = new Circle('JSF', 'purple', 'white')
// console.log(waffle.render())

module.exports = Circle;