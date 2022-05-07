//requires all of the created functions and the fs module
const { managerPrompt, userFunction } = require('./src/userPrompt');
const { objectGen, templateGen, generateUserCards } = require('./src/template');
const fs = require('fs');

//first function to obtain manager info
managerPrompt()
//subsequent function call to get optional team members
    .then(userFunction)
//takes the entered info returned as an object and processes it via handler functions
    .then(stuff => {
        const userArray = objectGen(stuff);
        const htmlArray = [];
        userArray.forEach(element => {
            const newString = generateUserCards(element);
            htmlArray.push(newString);
        })
        //takes the created array of HTML cards and joins it to remove commas
        //before passing it into the template generator function
        const page = templateGen(htmlArray.join(''));
        //writes the HTML page into an index.html file in the dist directory with error handling
        fs.writeFile('./dist/index.html', page, err => {
            if (err) throw new Error(err);
            console.log('Page Created! Check dist directory in this file.')
        })
    })