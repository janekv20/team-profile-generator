console.log('I am running!')

const { template } = require('@babel/core');
//node modules
const fs = require('fs');
const inquirer = require('inquirer');

//Extended Classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//team array
const teamArray = [];
// function to add employee name, id, email, role and role specific questions
function addEmployee() {
    inquirer.prompt([{
        //add employee name
        type: 'input',
        name: 'employee',
        message: 'What is the name of the employee?',
        //validate employee name input, else display message
        validate: employeeInput => {
            if (employeeInput) {
                return true;
            } else {
                console.log('Please enter employee name!');
                return false;
            }
        },
        //add employee id
        type: 'input',
        name: 'id',
        message: 'What is the id of the employee?',
        //validate employee id input, else display message
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter employee id!');
                return false;
            }
        },
        //add employee email
        type: 'input',
        name: 'email',
        message: 'What is the email of the employee?',
        //validate employee email input, else display message
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter employee email!');
                return false;
            }
        },
        //add role checkbox
        type: 'checkbox',
        name: 'role',
        message: 'Select the role of the employee.',
        choices: ['Engineer', 'Intern', 'Manager'],
        //validate employee role checkbox, else display message
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('Please select the employee role!');
                return false;
            }
        }
    }])
        //function that checks selected role to display role specific questions
        .then(function ({ name, id, email, role }) {
            let roleData = "";
            //Engineer role, ask for Github username
            if (role === 'Engineer') {
                roleData = 'Github username';
                //Intern role, ask for School
            } else if (role === 'Intern') {
                roleData = 'School';
                //If not engineer or intern, ask for office number.
            } else {
                roleData = 'Office number';
            }
            //prompt asking for role specific data
            inquirer.prompt([{
                message: `Enter employee's ${roleData}`,
                name: 'roleData',
                //validate if appropriate answer is inputted
                validate: roleData => {
                    if (roleData) {
                        return true;
                    } else {
                        console.log('Please enter the ${roleData} for the employee!');
                        return false;
                    }
                }
            },
            {//question asking if user would like to add more employees
                type: 'checkbox',
                message: 'Do you want to add more employees?',
                name: moreEmployees,
                choices: [
                    'yes',
                    'no'
                ],
                //validate that user selected a choice
                validate: moreEmployeesInput => {
                    if (moreEmployeesInput) {
                        return true;
                    } else {
                        console.log('Please select an option!');
                        return false;
                    }
                }
            }])
                //if user selected yes, then function will run that asks for employee data again and role specific data
                .then(function ({ roleData, moreEmployees }) {
                    let newEmployee;
                    if (role === 'Engineer') {
                        newEmployee = new Engineer(name, id, email, roleData);
                    } else if (role === 'Intern') {
                        newEmployee = new Intern(name, id, email, roleData);
                    } else {
                        newEmployee = new Manager(name, id, email, roleData);
                    }
                    teamArray.push(newEmployee);
                    if (moreEmployees === 'yes') {
                        return addEmployee(team);
                    } else {
                        return teamArray;
                    }
                })
        })
};
//function to write Team profile 
function writeToFile(team, data) {
    fs.writeFile('./dist/index.html', team, data, (err) => {
        if (err)
            throw (err);
        console.log('Your team profile has been succesfully created! Please review the index.html')
    });
};

//Create a function to initialize app
const init = () => {
    return inquirer.prompt()
        .then(data => {
            return data;
        })
}

//Function call to initialize app

init()
    .then(data => {
        console.log(data);
        return pageTemplate(data);
    })
    .then(page => {
        return writeToFile(page);
    })
    .then(writerFileResponse => {
        console.log(writerFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    })