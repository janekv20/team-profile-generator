//create Engineer display
const createEngineer = function (engineer) {
    return `
    <div class="row">
        <div class="column">
            <div class="card"
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
                <ul
                <li class="id">Id: ${engineer.id}</li>
                <li class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="git">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a><li>
            </ul>
        </div>
    </div>
    `;
};

//create Intern display

const createIntern = function (intern) {
    return `
    <div class="row">
        <div class="column">
            <div class="card"
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
                <ul>
                <li class="id">Id: ${intern.id}</li>
                <li class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="school">School: ${intern.school}</li>
                </ul>
        </div>
    </div>
    `;
};

//create Manager display
const createManager = function (manager) {
    return `
    <div class="row">
        <div class="column">
            <div class="card"
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
                <ul>
                <li class="id">Id: ${manager.id}</li>
                <li class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="office">Office Number: ${manager.officeNumber}</li>
                </ul>
        </div>
    </div>
    `;
};

//push team array to page

generatePage = data => {
    //array of role displays above
    pageArray = [];

    //for loop to display role cards
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        //engineer function
        if (role === 'Engineer') {
            const engineerDisplay = createEngineer(employee);

            pageArray.push(engineerDisplay);
        }

        //intern function
        if (role === 'Intern') {
            const internDisplay = createIntern(employee);

            pageArray.push(internDisplay);
        }

        //manager function
        if (role === 'Manager') {
            const managerDisplay = createManager(employee);

            pageArray.push(managerDisplay);
        }
    }
}

const employeeDisplays = pageArray.join('')

//create html page with above template
module.exports = pageData => {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./dist/style.css">
  </head>
  <body>
    <header>
      <h1>My Team<h1>
    </header>
    <main class="container">
      ${employeeDisplays}
    </main>
  </body>
  </html>
  `;
}