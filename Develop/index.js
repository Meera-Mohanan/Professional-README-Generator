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

   // {
    //    type: 'input',
     //   message: "What command should be run to install dependencies?",
    //    name: 'install'
   // },

   // {
   //     type: 'input',
    //    message: "what command should be run to run tests?",
    //    name: 'tests'
   //  },

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

// function to write README file,returns success string or an error message
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ?  err : 'Success!'
    );
}
//function to start the prompt and convert data into markdown syntax and write to file
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        data = generateMarkdown(response);
        writeToFile('README.md', data);
    });
}
// function call to initialize app
init();
