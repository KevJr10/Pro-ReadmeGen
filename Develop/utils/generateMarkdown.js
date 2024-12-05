// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license === 'GPLv2') {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  } else if (license === 'GPLv3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === 'Other') {
    return `![License](https://img.shields.io/badge/License-Other-blue.svg)`
  } else if (license === 'None') {
    return `![License](https://img.shields.io/badge/License-None-blue.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'GPLv2') {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  } else if (license === 'GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license === 'Other') {
    return `https://opensource.org/licenses`
  } else if (license === 'None') {
    return `##`
  }

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under the MIT license.`
  } else if (license === 'Apache') {
    return `This project is licensed under the Apache license.`
  } else if (license === 'GPLv2') {
    return `This project is licensed under the GPL v2 license.`
  } else if (license === 'GPLv3') {
    return `This project is licensed under the GPL v3 license.`
  } else if (license === 'Other') {
    return `This project is licensed under the Other license.`
  } else if (license === 'None') {
    return `This project is not licensed.`
  }

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  
   ## Description
    ${data.description}

   ## Table of Contents
   1. [Installation](#installation)
   2. [Usage](#usage)
   3. [License](#license)
   4. [Credits](#credits)
   5. [Tests](#tests)
   6. [Questions](#questions)
   7. [Walkthrough](#walkthrough)
  
   ## Installation
    ${data.installation}

   ## Usage
    ${data.usage}

   ## License
    ${data.license}
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
    

   ## Credits
    ${data.credits}

   ## Tests
    ${data.test}

   ## Questions
    Please email your questions to ${data.email}.
    You can visit my GitHub profile at (https://github.com/${data.creator}).

   ## Walkthrough
    Visit this link to view a walkthrough of the project: ${data.link}.
 `;




}

export default generateMarkdown;
