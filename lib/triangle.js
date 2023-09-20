const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(characters, color, characterColor) {
        super(characters, color, characterColor);
    }
    render(color) {
        return `<svg width="300" height="200">
        <polygon points="10,200 150,10 300,200" fill="${this.setColor(color)}" />
        <text fill="${this.characterColor}" font-size="45" font-family="Verdana" x="115" y="150">${this.characters}</text>
      </svg>`
    }
} 

// const waffle = new Square('JSF', 'purple', 'white')
// console.log(waffle.render())

module.exports = Triangle;