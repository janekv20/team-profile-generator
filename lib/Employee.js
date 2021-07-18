//Parent Class, Employee Constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //return name input
    getName() {
        return this.name;
    }
    //return id input
    getId() {
        return this.id;
    }
    //return email input
    getEmail() {
        return this.email;
    }
    // return class name
    getRole() {
        return 'Employee';
    }
};

//Export 
module.exports = Employee;