// Reference the other modules needed.

const inquirer = require( 'inquirer' );
const fs       = require( 'fs' );
const Manager = require('./lib/Manager');

const addIntern = require( './src/staffing' );


// The main driver for the Employee Summary application.

var staffData = [];        // create the array to hold the staff objects

// Get the team manager's information.
const getMgrInfo = () => {

    // Prompt for the manager's information
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
        }
    ])
    .then( (data) => {
        // Create the manager object
        let mgr = new Manager( data.mgrName, data.mgrId, data.mgrEmail, data.mgrOfficeNum );
        return (mgr);
    });
};


getMgrInfo()
.then( (mgr) => {
    console.log(mgr);

    return inquirer.prompt([
        {   // Prompt the manager for the next action
            type: 'list',
            name: 'action',
            message: 'Add an Engineer, an Intern, or Finish?',
            choices: ['1: Engineer', '2: Intern', '3: Finish']
        }
    ]);
})
.then( ({action}) => {

    // Get the selected action
    const selection = action.split(': ');
    const selected = selection[0];
    console.log( 'Selected action is: ' + selected );

    if( selected == 3 ) {
        // Create the HTML Page
        return  writeFile(pageHTML);
    }
    else if( selected == 2 ) {
        // Add an intern
        addIntern( staffData );
        console.log( staffData );
        getMgrInfo();
    }
    else {
        // Add an Engineer
        addEngineer( staffData );
        getMgrInfo();
    }
})
.then( (writeFileResponse) => {
    // Write the HTML page to the destination directory/file.

});


