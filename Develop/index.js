// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title'
    },

    {
        type: 'input',
        message: "Please write a short description of your project",
        name: 'description'
    },

    {
        type: 'list',
        message: "Select the license your project should have?",
        choices: [
            'MIT', 'Open Software License 3.0',
            'GPL 3.0',
            'None'
        ],
        name: 'license'
    },

    {
        type: 'input',
        message: "What command should be run to install dependencies?",
        name: 'install'
    },

    {
        type: 'input',
        message: "what command should be run to run tests?",
        name: 'tests'
    },

    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },

    {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username'
    },

    {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    // use fs to sync, path after to join to current working directory then add file name and data //
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then(function (responses) {
        writeToFile("README.md", generateMarkdown({ ...responses }))
        //inq use prompt (built in) questions - THEN pipe to responses, write a file and data is used to generate markdown git s\
    })
}
// function call to initialize app
init();
