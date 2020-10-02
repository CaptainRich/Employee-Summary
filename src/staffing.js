
// Import the 'Intern' class 
// Import the 'Engineer' class
// Import the 'inquirer' module

// const Intern   = require('../lib/Intern');
// const Engineer = require('../lib/Engineer');
const inquirer = require( 'inquirer' );

/////////////////////////////////////////////////////////////////
// Function to add an 'Intern' object
const addIntern = () => {
    
    // Prompt for the intern's in formation
    return inquirer.prompt([
        {
            type: 'text',
            name: 'internName',
            message: "What is the intern's name?",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'internId',
            message: "What is the intern's employee ID?",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'internEmail',
            message: "What is the intern's email?",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email address!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'internSchool',
            message: "What is the intern's school?",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    ]);

};

/////////////////////////////////////////////////////////////////
// Function to add an 'Engineer' object
const addEngineer = () => {
   
    // Prompt for the Engineer's information
    return inquirer.prompt([
        {
            type: 'text',
            name: 'engName',
            message: "What is the Engineer's name?",
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'engId',
            message: "What is the Engineer's employee ID?",
            validate: engIdInput => {
                if (engIdInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'engEmail',
            message: "What is the Engineer's email?",
            validate: engEmailInput => {
                if (engEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's email address!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'engGitHub',
            message: "What is the Engineer's GitHub user Name?",
            validate: engGitHubInput => {
                if (engGitHubInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's school!");
                    return false;
                }
            }
        }
    ]);

};

module.exports = {
    addIntern:    addIntern,
    addEngineer:  addEngineer
};