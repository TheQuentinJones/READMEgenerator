// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license != null) {

    var badgeLink = `![GitHub](https://img.shields.io/github/license/TheQuentinJones/${license.fileName})`

    return badgeLink
  }

  return ""

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderTechBadge(license) {

  var techBadge = []

  license.technologies.forEach(element => {

    switch (element) {

      case 'React':
        techBadge.push("[![REACT Shield](https://img.shields.io/badge/React-222222?&style=for-the-badge&logo=react)](https://reactjs.org/)")
        break
      case 'GraphQL':
        techBadge.push("[![GraphQl Shield](https://img.shields.io/badge/GraphQl-E10098?&style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)")
        break
      case 'Mongoose':
        techBadge.push("[![Mongoose Shield](https://img.shields.io/badge/Mongoose-AA2929?&style=for-the-badge&logo=matrix&logoColor=white)](https://mongoosejs.com/)")
      case 'MongoDB':
        techBadge.push("[![MongoDB Shield](https://img.shields.io/badge/MongoDB-47A248?&style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)")
        break
      case 'Express':
        techBadge.push("[![Express Shield](https://img.shields.io/badge/Express-000000?&style=for-the-badge&logo=express&logoColor=white)](http://expressjs.com/)")
        break
      case 'Heroku':
        techBadge.push("[![Heroku Shield](https://img.shields.io/badge/Heroku-430098?&style=for-the-badge&logo=heroku&logoColor=white)](https://www.heroku.com/what)")
        break
      case 'Node':
        techBadge.push("[![Node.js Shield](https://img.shields.io/badge/Node.js-339933?&style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)")
        break
      case 'NPM':
        techBadge.push("[![NPM Shield](https://img.shields.io/badge/NPM-333333?&style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)")
        break
      case 'JavaScript':
        techBadge.push("[![JavaScript Shield](https://img.shields.io/badge/JavaScript-F7DF1E?&style=for-the-badge&logo=javascript&logoColor=272727)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)")
      case 'HTML':
        techBadge.push("[![HTML Shield](https://img.shields.io/badge/HTML5-E34F26?&style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)")
        break
      case 'CSS':
        techBadge.push("[![CSS Shield](https://img.shields.io/badge/CSS-1572B6?&style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)")
        break
      case 'Bootstrap':
        techBadge.push("[![Bootstrap CSS Shield](https://img.shields.io/badge/Bootstrap_CSS-7952B3?&style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)")
        break
    }   

  });

  return techBadge.join(" ")


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data, 'this is in the generate markdown file')

  if (data.licenses != null) {

    var badgeLink = renderLicenseBadge(data)

  }

  if (data.technologies != null) {

    var techBadgeRendering = renderTechBadge(data)


  }



  return `# <h1 align="center">${data.fileName}</h1>

  ${badgeLink}

  ## Description
          
  ${data.description}

  ## Built With:

  ${techBadgeRendering}

  ![](https://i.imgur.com/waxVImv.png)
         
  ## Table of Contents

 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  Take a look at the deployed application here: ${data.deployLink}

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

