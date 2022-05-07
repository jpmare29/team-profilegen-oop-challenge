const { managerPrompt, userFunction } = require('./src/userPrompt');
const { objectGen, templateGen, generateUserCards } = require('./src/template');
const fs = require('fs');


managerPrompt()
    .then(userFunction)
    .then(stuff => {
        const userArray = objectGen(stuff);
        const htmlArray = [];
        userArray.forEach(element => {
            const newString = generateUserCards(element);
            htmlArray.push(newString);
        })
        const page = templateGen(htmlArray.join(''));
        console.log(page);
        fs.writeFile('./dist/index.html', page, err => {
            if (err) throw new Error(err);
            console.log('Page Created!')
        })
    })