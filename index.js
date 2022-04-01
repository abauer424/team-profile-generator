//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');


// Created an array of questions for user input
const questions = [

    //Add team member
    {
        type: 'input',
        name: 'getRole',
        message: 'Which type of team member would you like to add?',
    },
    //1. Engineer Name
    {
        type: 'input',
        name: 'getName',
        message: 'What is your engineers name?'
    },
    //2. Engineer ID
    {
        type: 'input',
        name: 'getId',
        message: 'What is your engineers ID?'
    },

    //3. Engineer Email
    {
        type: 'input',
        name: 'getEmail',
        message: 'What is your engineers email?'
    },

    //4. Engineer GitHub username
    {
        type: 'input',
        name: 'getGithub',
        message: 'What is your engineers github?'
    },
 
];

//Created a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, './dist/' + fileName), data)
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile('index.html', generateMarkdown(answers));

    })
}

// Function call to initialize app
init();

