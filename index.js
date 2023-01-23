// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = 
[
    {
      type: 'input',
      message: 'How would you describe your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What sections does this project have?',
      name: 'contents',
    },
    {
      type: 'input',
      message: 'How does one install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How is your project used?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What licenses does this project have?',
      choices: [   'MIT' ,  
                   'none' ,
                   'Apache License 2.0' ,
                   'GNU General Public License v3.0'
                ],
      name: 'licenses',

    },
    {
      type: 'input',
      message: 'How can one contribute to this project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'How does one test this project?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is the name of this project?',
      name: 'fileName',
    },
    {
      type: 'input',
      message: 'What is the link to your github profile?',
      name: 'questions',
    },
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


