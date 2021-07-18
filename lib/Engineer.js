//import Employee constructor to extended classes
const Employee = require('./Employee');

//Engineer constructor extends Employee parent constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //call employee constructor
        super(name, id, email);

        this.github = github;
    }
    //return github input
    getGithub() {
        return this.github;
    }
    //override Employee role, change to Engineer
    getRole() {
        return 'Engineer';
    }
};

//Export
module.exports = Engineer;