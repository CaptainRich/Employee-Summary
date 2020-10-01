
// Import the 'Intern' class 
// Import the 'Engineer' class
// Import the 'inquirer' module

const Intern   = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const inquirer = require( 'inquirer' );

/////////////////////////////////////////////////////////////////
// Function to add an 'Intern' object
const addIntern = (staffData) => {


    // Prompt for the intern's information
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
    ])
    .then( (data) => {
        // Create the manager object
        let intern = new Intern( data.internName, data.internId, data.internEmail, data.internSchool );
        staffData.push(intern);           // add this intern to the staff array
    });
};

/////////////////////////////////////////////////////////////////
// Function to add an 'Engineer' object
const addEngineer = (staffData) => {


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
    ])
    .then( (data) => {
        // Create the manager object
        let engineer = new Engineer( data.engName, data.engId, data.engEmail, data.engGitHub );
        staffData.push(engineer);           // add this Engineer to the staff array
    });
};

module.exports = addIntern;
module.exports = addEngineer;