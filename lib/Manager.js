//import Employee constructor to extended classes
const Employee = require('./Employee');

//Manager constructor extends Employee parent constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //call employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    //return Office Number input
    getOfficenumber() {
        return this.officeNumber;
    }
    //override Employee role, change to Manager
    getRole() {
        return 'Manager';
    }
};

//Export
module.exports = Manager;