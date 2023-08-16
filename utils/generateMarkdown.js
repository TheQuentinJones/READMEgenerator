// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if ( license != null) {

    var badgeLink = `![GitHub](https://img.shields.io/github/license/TheQuentinJones/${license.fileName})`

    return badgeLink
  }

  return ""

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data, 'this is in the generate markdown file')

  if ( data.licenses != null ) {

    var badgeLink = renderLicenseBadge(data)

  }


  
  return `# ${data.fileName}

  ${badgeLink}

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
  You can also follow my github: ${data.github}
  

  [![LinkedIn Shield](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/therealtorque/) [![Email Shield](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:quentin.mcc.jones@gmail.com) [![Twitter Shield](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/QueTheRealtor) [![Instagram Shield](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/realtor.que/)
  
  
  `

  
}

module.exports = generateMarkdown;

