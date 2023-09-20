const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document.js');

class CLI {
run() {
    return inquirer
        .prompt([
            {
                type: "list",
                message: "What shape would you like your logo?",
                choices: ["Circle", "Triangle", "Square"],
                name: "shapes"
            },
            {
                type: "input",
                message: "Enter up to three characters you'd like rendered",
                name: "characters"
            },
            {
                type: "input",
                message: "What color would you like your logo?",
                name: "color"
            },
            {
                type: "input",
                message: "What color would you like the characters?",
                name: "characterColor"
            }
        ])
        .then((answers) => {
            //console.log(answers)
            return writeFile(
                join(__dirname, '..', 'output', 'logo.html'),
                createDocument(answers.shapes, answers.characters, answers.color, answers.characterColor)
              );
        })
        .then(() => console.log('Created logo.html'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
}
}

module.exports = CLI;