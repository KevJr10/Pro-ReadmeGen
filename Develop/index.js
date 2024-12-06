// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'text',
        name: 'description',
        message: 'Please provide a description and pourpose of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
       {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {   
        type: 'input',
        name: 'test',
        message: 'Please provide examples on how to run tests.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to use?',
        choices: ['MIT','Apache', 'GPLv2','GPLv3','Other', 'None']
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Please provide your GitHub username.'

    },    
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please provide a URL for your project walkthrough video'
    }
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log('....................');
        console.log('Generating Profesional README.md File...');
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
