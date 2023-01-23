// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data, 'this is in the generate markdown file')
  
  return `# ${data.fileName}



  ## Description
          
  ${data.description}
         
  ## Table of Contents

  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.licenses}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions, feel free to send me an email at ${data.email}.
  You can also find me using github link: ${data.questions}`
  

  
}

module.exports = generateMarkdown;

