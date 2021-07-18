//import Employee constructor to extended classes
const Employee = require('./Employee');

//Intern constructor extends Employee parent constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        //call employee constructor
        super(name, id, email);

        this.school = school;
    }
    //return school input
    getSchool() {
        return this.school;
    }
    //override Employee role, change to Intern
    getRole() {
        return 'Intern';
    }
};

//Export
module.exports = Intern;