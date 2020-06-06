const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'Project Name: '
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please write a short description'
    },
    {
        type: 'input',
        name: 'Contents',
        message: 'Table of Contents: '
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What type of Installation is this?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Usage: '
    },
    {
        type: 'list',
        name: 'License',
        message: 'License: ',
        choices: ["Creative Commons", "Eclipse", "IBM", "Mozilla", ]
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Contributing: '
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Tests: '
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Questions: '
    }
])

.then(function(answer) {
    console.log('', answer);

    let badgeUrl = ''
    if (answer.License === "Creative Commons") {
        badgeUrl = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    } else if (answer.License === "Eclipse") {
        badgeUrl = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    } else if (answer.License === "IBM") {
        badgeUrl = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    } else if (answer.License === "Mozilla") {
        badgeUrl = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }

    const readMeString = `
    Title: ${answer.Title}
    Description: ${answer.Description}
    Table of Contents: ${answer.Contents}
    Installation: ${answer.Installation}
    Usage: ${answer.Usage}
    ${badgeUrl}
    Contributing: ${answer.Contributing}
    Tests: ${answer.Tests}
    Questions: ${answer.Questions}
    `

    fs.writeFile('README.md', readMeString, function(err) {
        if (err) throw err;
        console.log('Saved!');
    });

});
