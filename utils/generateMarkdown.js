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

  Installation\n
  Usage\n
  License\n
  Contributing\n
  Tests\n
  Questions

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

  If you have questions, here is my github link: ${data.questions}

`;

}

module.exports = generateMarkdown;

