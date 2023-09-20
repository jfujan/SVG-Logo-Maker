const Shapes = require('./shapes.js');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require("./square.js")

function createDocument(shapes, characters, color, characterColor) {
  //console.log(shapes)
    if(shapes === 'Triangle'){
      //console.log('Triangle')
      const userTriangle = new Triangle(characters, color, characterColor);
      //console.log(userTriangle)
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>SVG Logo</title>
        </head>
        <body>
          <div>
            ${userTriangle.render()}
          </div>
        </body>
      </html>
      `;
    }else if(shapes === 'Circle'){
      const userCircle = new Circle(characters, color, characterColor);
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>SVG Logo</title>
        </head>
        <body>
          <div>
            ${userCircle.render()}
          </div>
        </body>
      </html>
      `;
    }else if(shapes === 'Square'){
      const userSquare = new Square(characters, color, characterColor);
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>SVG Logo</title>
        </head>
        <body>
          <div>
            ${userSquare.render()}
          </div>
        </body>
      </html>
      `;
    }else{console.log("ERROR")}
}

module.exports = { createDocument };