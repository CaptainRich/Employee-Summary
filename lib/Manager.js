
// Import the 'Employee' class

const Employee = require('../lib/Employee');


class Manager extends Employee {

    constructor( name, id, email, officeNumber ) {

        // Call the parent (Employee) constructor
        super( name, id, email );

        // These three properties are inherited from 'Employee'
        // this.name  = name;
        // this.id    = id;
        // this.email = email;
        this.officeNumber = officeNumber;
        this.roll  = 'Manager';
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    // Other functions are inherited from 'Employee'

}

module.exports = Manager;