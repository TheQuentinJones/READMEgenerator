// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = 
[
    {
      type: 'input',
      message: 'What inspired you to create this project?',
      name: 'inspiration',
    },
    {
      type: 'input',
      message: 'What problem is this project meant to solve?',
      name: 'problem',
    },
    {
      type: 'input',
      message: 'Who is this project meant for?',
      name: 'audience',
    },
    {
      type: 'input',
      message: 'What licenses does this project have?',
      name: 'licenses',

    },
    {
      type: 'input',
      message: 'What is the name of this project?',
      name: 'fileName',

    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName , data , (error) => {
    if (error) throw new Error('uh oh' , error)
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(info) {
      // console.log(data)
      const createReadMe = generateMarkdown(info)
      console.log(createReadMe)
      writeToFile('./createdReadme/README.md' , createReadMe)
    }) 
  

}

// Function call to initialize app
init();


