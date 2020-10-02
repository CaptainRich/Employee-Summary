// Reference the other modules needed.

const inquirer    = require( 'inquirer' );
const fs          = require( 'fs' );
const Manager     = require('./lib/Manager');
const Intern      = require('./lib/Intern');
const Engineer    = require('./lib/Engineer');

const {addIntern, addEngineer} = require( './src/staffing' );



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

    getNextAction();

})
.then( ({action}) => {

    // Get the selected action
    const selection = action.split(': ');
    const selected = parseInt(selection[0].trim());
    console.log( 'Selected action is: ' + selected );

    if( selection[0] == 3 ) {
        // Create the HTML Page
        return  writeFile(pageHTML);
    }
    else if( selection[0] == 2 ) {
        // Add an intern
 
        addIntern()
        .then( (data) => {
            // Create the manager object
            let intern = new Intern( data.internName, data.internId, data.internEmail, data.internSchool );
            staffData.push(intern);           // add this intern to the staff array
            console.log( staffData );
            getNextAction();
        });

    }
    else {
        // Add an Engineer
        addEngineer()
        .then( (data) => {
            // Create the manager object
            let engineer = new Engineer( data.engName, data.engId, data.engEmail, data.engGitHub );
            staffData.push(engineer);           // add this Engineer to the staff array
            console.log( staffData );
            getNextAction();
        });

    }
})
.then( (writeFileResponse) => {
    // Write the HTML page to the destination directory/file.

});

///////////////////////////////////////////////////////////////////////////
const getNextAction = () => {
    return inquirer.prompt([
        {   // Prompt the manager for the next action
            type: 'list',
            name: 'action',
            message: 'Add an Engineer, an Intern, or Finish?',
            choices: ['1: Engineer', '2: Intern', '3: Finish']
        }
    ]);
};