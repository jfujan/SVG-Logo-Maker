const Triangle = require('../lib/triangle.js');

const shape = new Triangle();
shape.setColor("blue");
console.log(shape)
expect(shape.render()).toEqual('<polygon points="10,200 150,10 300,200 fill="blue" />');
