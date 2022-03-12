# Profile Generator
## Description
For this project, I created a command-line application that dynamically generates a Engineer profile from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Each profile includes an HTML webpage that displays summaries for each user. Additionally, I wrote a unit test for each part of my code and ensured that it passed each test.

## Table of Contents
- [Usage](#usage)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Credits](#credits)
- [License](#license)

## Usage
Visit my [repo here](https://github.com/Quadrilateral0/Profile-Generator) and see below for a video demo.

The application requires [Node.js](https://nodejs.dev/learn/introduction-to-nodejs). Install the necessary dependencies in your terminal using the following command:
```bash
npm i
```
and invoke the program by using:

```bash
node index.js
```

[![Video demo of completed project](images/readme-demo.png)](xxx)


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Credits
A thanks to my resources:
- [Inquirer package](https://www.npmjs.com/package/inquirer)
- [Node.js](https://nodejs.dev/learn/introduction-to-nodejs) 
- [Screencastify](https://chrome.google.com/webstore/detail/screencastify-screen-vide/mmeijimgabbpbgpdklnllpncmdofkcpn?hl=en)
- [Visual Studio Code](https://code.visualstudio.com/download)

And thanks to these tutorials:
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3 Schools](https://www.w3schools.com/)

## License
![MIT License](https://img.shields.io/badge/license-MIT-green)