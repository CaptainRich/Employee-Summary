// Reference the other modules needed.

const inquirer = require( 'inquirer' );
const fs       = require( 'fs' );
const Manager = require('./lib/Manager');


// The main driver for the Employee Summary application.

// Get the team manager's information.
const getMgrInfo = () => {


    return inquirer.prompt([
        {
            type: 'text',
            name: 'mgrName',
            message: 'What is your name?',
            validate: mgrNameInput => {
                if (mgrNameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'mgrId',
            message: 'What is your employee ID?',
            validate: mgrIdInput => {
                if (mgrIdInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'mgrOfficeNum',
            message: 'What is your office number?',
            validate: mgrOfficeNumInput => {
                if (mgrOfficeNumInput) {
                    return true;
                } else {
                    console.log("Please enter your office number!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'mgrEmail',
            message: 'What is your email?',
            validate: mgrEmailInput => {
                if (mgrEmailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'action',
            message: 'Add an Engineer, an Intern, or Finish?',
            choices: ['1 Engineer', '2 Intern', '3 Finish']
        },
    ])
    .then( (data) => {
        let mgr = new Manager( data.mgrName, data.mgrId, data.mgrEmail, data.mgrOfficeNum );
        return (mgr);
    });
};


getMgrInfo()
.then( (mgr) => {
    console.log(mgr);
});

