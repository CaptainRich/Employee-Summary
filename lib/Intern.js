
// Import the 'Employee' class

const Employee = require('../lib/Employee');


class Intern extends Employee {

    constructor( name, id, email, school ) {

        // Call the parent (Employee) constructor
        super( name, id, email );

        // These three properties are inherited from 'Employee'
        // this.name  = name;
        // this.id    = id;
        // this.email = email;
        this.school = school;
        this.roll  = 'Intern';
    };

    getSchool() {
        return this.school;
    };

    // Other functions are inherited from 'Employee'

}

module.exports = Intern;