var inquirer = require('inquirer');
var fs = require('fs');
inquirer.prompt([
    {
        type: 'input',
        name: 'first',
        message: 'Project Name: '
    },
    {
        type: 'input',
        name: 'second',
        message: 'Description: '
    },
    {
        type: 'input',
        name: 'third',
        message: 'Table of Contents: '
    },
    {
        type: 'input',
        name: 'fourth',
        message: 'Installation: '
    },
    {
        type: 'input',
        name: 'fifth',
        message: 'Usage: '
    },
    {
        type: 'input',
        name: 'sixth',
        message: 'License: '
    },
    {
        type: 'input',
        name: 'seventh',
        message: 'Contributing: '
    },
    {
        type: 'input',
        name: 'eigth',
        message: 'Tests: '
    },
    {
        type: 'input',
        name: 'ninth',
        message: 'Questions: '
    }
])
.then(function(answer) {
    console.log('', answer);
    var readMeString = `

    Title: ${answer.first}
    Description: ${answer.second}
    Table of Contents: ${answer.third}
    Installation: ${answer.fourth}
    Usage: ${answer.fifth}
    License: ${answer.sixth}
    Contributing: ${answer.seventh}
    Tests: ${answer.eigth}
    Questions: ${answer.ninth}
    `
    fs.writeFile('README.md', readMeString, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
})
