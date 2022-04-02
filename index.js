//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const team = []

function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'getRole',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Manager', 'Intern', 'Done'],
    })
        .then(answer => {
            console.log(answer)
            if (answer.getRole === "Engineer") {
                inquirer.prompt(engQuestions).then(answers => {
                    const engineer = new Engineer(answers.getName, answers.getId, answers.getEmail, answers.getGitHub)
                    team.push(engineer)
                    console.log(team)
                    mainMenu()
                })

            }
            if (answer.getRole === "Manager") {
                inquirer.prompt(manQuestions).then(answers => {
                    const manager = new Manager(answers.getName, answers.getId, answers.getEmail, answers.getOfficeNum)
                    team.push(manager)
                    console.log(team)
                    mainMenu()
                })

            }
            if (answer.getRole === "Intern") {
                inquirer.prompt(intQuestions).then(answers => {
                    const intern = new Intern(answers.getName, answers.getId, answers.getEmail, answers.getSchool)
                    team.push(intern)
                    console.log(team)
                    mainMenu()
                })

            }
            if (answer.getRole === "Done") {
            writeToFile("./index.html")
                process.exit()
            }
        })
}
// Created an array of questions for user input
const engQuestions = [


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
        name: 'getGitHub',
        message: 'What is your engineers github?'
    },

];
const manQuestions = [
    //1. manager Name
    {
        type: 'input',
        name: 'getName',
        message: 'What is your managers name?'
    },
    //2. manager ID
    {
        type: 'input',
        name: 'getId',
        message: 'What is your managers ID?'
    },

    //3. manager Email
    {
        type: 'input',
        name: 'getEmail',
        message: 'What is your managers email?'
    },

    //4. manager officeNum username
    {
        type: 'input',
        name: 'getOfficeNum',
        message: 'What is your managers office number?'
    },
]
const intQuestions = [
    //1. intern Name
    {
        type: 'input',
        name: 'getName',
        message: 'What is your interns name?'
    },
    //2. intern ID
    {
        type: 'input',
        name: 'getId',
        message: 'What is your interns ID?'
    },

    //3. intern Email
    {
        type: 'input',
        name: 'getEmail',
        message: 'What is your interns email?'
    },

    //4. intern schools name
    {
        type: 'input',
        name: 'getSchool',
        message: 'What is your interns school name?'
    },
]

//Created a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, './dist/' + fileName),generateMarkdown(team))
}


// TODO: Create a function to initialize app
function init() {
    mainMenu()
    // inquirer.prompt(questions).then(answers => {
    //     console.log(answers);
    //     writeToFile('index.html', generateMarkdown(answers));

    // })
}

// Function call to initialize app
init();