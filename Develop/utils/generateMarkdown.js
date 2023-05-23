// renders license badge
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return renderLicenseSection(license)
}
// retrieves url to license badge
function renderLicenseLink(license) {
  return license ? `https://img.shields.io/badge/license-${license}-blue` : '';
}
// takes data from user response and formats into a README format
function generateMarkdown(data) {
  licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${licenseBadge}
  ## Description 
  
  \n${data.description}\n

  ## Table of Contents
  * [installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.install}
  \`\`\`
  ## Usage
  \n${data.usage}\n

  ## License
  This project is licensed under the ${data.license}.

  ## Contributing
  \n${data.contribution}\n

  ## Tests
  To run test, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions
 \n If you have any questions about the repo, open an issue or contact me directly at ${data.email}. you can find more of my work at [${data.username}](https://github.com/${data.username})\n
`;
}

module.exports = generateMarkdown;