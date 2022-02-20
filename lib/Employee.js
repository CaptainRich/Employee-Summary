


class Employee {

    // This (super) class contains all of the methods and properties the various types
    // of employees share.
    
    constructor( name, id, email ) {
        this.name  = name;
        this.id    = id;
        this.email = email;
        this.roll  = 'Employee';
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRoll() {
        return this.roll;
    }
}

module.exports = Employee;