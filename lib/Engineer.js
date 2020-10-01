
// Import the 'Employee' class

const Employee = require('../lib/Employee');


class Engineer extends Employee {

    constructor( name, id, email, gitHub ) {

        // Call the parent (Employee) constructor
        super( name, id, email );

        // These three properties are inherited from 'Employee'
        // this.name  = name;
        // this.id    = id;
        // this.email = email;
        this.gitHub = gitHub;
        this.roll  = 'Engineer';
    };

    getGitHub() {
        return this.gitHub;
    };

    // Other functions are inherited from 'Employee'

}

module.exports = Engineer;