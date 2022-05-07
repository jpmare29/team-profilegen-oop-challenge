const { managerPrompt, userFunction } = require('./src/userPrompt');
const { objectGen, templateGen, generateUserCards } = require('./src/template');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');



managerPrompt()
    .then(userFunction)
    .then(stuff => {
        const userArray = objectGen(stuff);
        console.log(userArray);
        const htmlArray = [];
        userArray.forEach(element => {
            
        })
    })