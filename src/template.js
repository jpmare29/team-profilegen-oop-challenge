const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const Manager = require("../lib/Manager")

function objectGen(obj) {
    const newArray = [];
    const manager = new Manager(obj.name, obj.id, obj.email, obj.office)
    newArray.push(manager);
    obj.teamArray.forEach(element => {
        if (element.role === 'Engineer') {
            const engineer = new Engineer(element.name, element.id, element.email, element.github);
            newArray.push(engineer);
        } else if (element.role === 'Intern') {
            const intern = new Intern(element.name, element.id, element.email, element.school);
            newArray.push(intern);
        }
    })
    return newArray;
}
function templateGen(array) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
        <body>
            <div class="d-flex container">
                ${array}
            </div>
        </body>
    </html>
    `
}

function generateUserCards(obj) {
    if (obj.getRole() === 'Manager') {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">${obj.getName()}</h3>
            <h5 class="card-title">${obj.getRole()}</h5>
                <div class="card-body">
                    ID: ${obj.getId()}
                </div>
                <div class="card-body">
                    Email: <a href = 'mailto: ${obj.getEmail()}'>${obj.getEmail()}</a>
                </div>
                <div class="card-body">
                    Office number: ${obj.office}
                </div>
        </div>
    </div>
    `} else if (obj.getRole() === 'Engineer') {
        return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">${obj.getName()}</h3>
            <h5 class="card-title">${obj.getRole()}</h5>
            <div class="card-body">
                ID: ${obj.getId()}
            </div>
            <div class="card-body">
                Email: <a href = 'mailto: ${obj.getEmail()}'>${obj.getEmail()}</a>
            </div>
            <div class="card-body">
                Github: <a href = 'https://github.com/${obj.getGithub()}'>${obj.getGithub()}</a>
            </div>
        </div>
    </div>
    `} else if (obj.getRole() === 'Intern') {
        return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">${obj.getName()}</h3>
            <h5 class="card-title">${obj.getRole()}</h5>
            <div class="card-body">
                ID: ${obj.getId()}
            </div>
            <div class="card-body">
                Email: <a href = 'mailto: ${obj.getEmail()}'>${obj.getEmail()}</a>
            </div>
            <div class="card-body">
                School: ${obj.getSchool()}
            </div>
        </div>
    </div>
    `}
} 

module.exports = { objectGen, templateGen, generateUserCards };