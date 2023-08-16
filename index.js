// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const questions =
  [
    {
      type: 'input',
      message: 'What is the name of this project?',
      name: 'fileName',
    },
    {
      type: 'input',
      message: 'How would you describe your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is the link to your deployed application?',
      name: 'deployLink',
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
      choices: ['None',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2- Clause Simplified License',
        'BSD 3-Clause New or Revised License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense'
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
      message: 'What is the link to your github profile?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (error) => {
    if (error) throw new Error('uh oh', error)
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (info) {
      // console.log(data)
      const createReadMe = generateMarkdown(info)
      // console.log(createReadMe)
      writeToFile('./createdReadme/README.md', createReadMe)
    })


}

// Function call to initialize app
init();


