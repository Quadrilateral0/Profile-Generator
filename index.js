const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: "list",
        name: "role",
        message: "What is the role of this team member?",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: "input",
        name: "name",
        message: "Provide the name of the team member:",
        validate(answer) {
            if (!answer) {
                return "You must provide the name of the team member before continuing."
            }
            return true
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the team member's GitHub profile name?",
        validate(answer) {
            if (!answer) {
                return "You must provide the team member's GitHub profile name before continuing."
            }
            return true
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the team member's email address?",
        validate(answer) {
            if (!answer) {
                return "You must provide the team member's email address before continuing."
            }
            return true
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the team member's employee ID?",
        validate(answer) {
            if (!answer) {
                return "You must provide the team member's ID before continuing."
            }
            return true
        }
    },
    {
        type: "input",
        name: "office",
        message: "What is the team member's office number?",
        validate(answer) {
            if (!answer) {
                return "You must provide the team member's office number before continuing."
            }
            return true
        }
    },
    {
        type: "confirm",
        name: "teamadd",
        message: "Do you have another team member to add?",
    },
])

    .then((answers) => {
        if (answers.teamadd === true) {
            return inquirer.prompt();
        } else if (answers.teamadd === false) {
            (data) => {
                //Creating index.html content
                const index =
                    `<!DOCTYPE html>
                    <html lang="en">
                    
                    <head>
                      <meta charset="UTF-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
                      <title>Techful - Team Profiles</title>
                    </head>
                    <body>
                      <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                          <h1 class="display-4">My Team</h1>
                          <p class="lead">Check out the current members of Techful's engineering team!</p>
                        </div>
                      </div>
                      
                      <div class="card-deck justify-content-center">
                        <div class="row row-cols-2 d-flex" id="populate">                    
                       
                        </div>
                      </div>

                    </body>`

                //Write index.html file
                const filename = `index-${data.name.toLowerCase().split(' ').join('')}.html`;

                fs.writeFile(filename, index, (err) =>
                    err ? console.log(err) : console.log('Success!'));
            }
        }
    });

const populate = document.querySelector("#populate");
populate.append(
    `<div class="card bg-light mb-3">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle">${data.role}</h6>
            <p class="card-text">ID#: ${data.id}</p>
            <p class="card-text">Email: <a href="mailto:${data.email}?subject=[Hello!]">${data.email}</a></p>
            <a href="https://github.com/${data.github}" target="_blank" class="btn btn-primary">GitHub</a>
        </div>
    </div>`
);