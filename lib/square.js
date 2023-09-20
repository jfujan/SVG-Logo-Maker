const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(characters, color, characterColor) {
        super(characters, color, characterColor);
    }
    render() {
        return `<svg width="300" height="200">
        <rect width="200" length="200" fill="${this.color}" />
        <text fill="${this.characterColor}" font-size="45" font-family="Verdana" x="50" y="86">${this.characters}</text>
      </svg>`
    }
} 

// const waffle = new Square('JSF', 'purple', 'white')
// console.log(waffle.render())

module.exports = Square;