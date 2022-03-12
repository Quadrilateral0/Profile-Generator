const inquirer = require('inquirer');
const fs = require('fs');
//const ConfirmPrompt = require('inquirer/lib/prompts/confirm');

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
            if(!answer) {
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
            if(!answer) {
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
            if(!answer) {
                return "You must provide the team member's email address before continuing."
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
              <title>${data.name} - Profile</title>
            </head>
            <body>
            
            </body>
                    
            (https://github.com/${data.github.toLowerCase().split(' ').join('')}) (mailto:${data.email}?subject=[Hello!])
                    
            `

                //Write index.html file
                const filename = `index-${data.name}.html`;

                fs.writeFile(filename, index, (err) =>
                    err ? console.log(err) : console.log('Success!'));
            }
        }
    });
