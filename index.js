//Included packages needed for this application
const inquirer = require('inquirer');
const jest  = require('jest');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');


//user adds input
//generates an html file

// Created an array of questions for user input
const questions = [

    //1. Project Title
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title?'
          },
    //2. Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },    
    
    ];
    //Created a function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(__dirname,'./dist/'+ fileName),data)
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
    
