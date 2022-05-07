//requires inquirer for use in command line app
const inquirer = require('inquirer');
//function for first prompt to get manager info
const managerPrompt = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Enter team manager's name.",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter name.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter team manager's ID number.",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter ID number.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter team manager's email address.",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter email address.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter team manager's office number.",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter office number.')
                return false;
            }
        }
    }
])};
//function called after first prompt will receive the returned object and if it is the
//first time the function is called will create a new attribute on that object
//set to have the value of an empty array which will be used to push additional team members
const userFunction = managerData => {
    if (!managerData.teamArray) {
        managerData.teamArray = [];
    }
    //prompts user if they would like to add any team members
    //if they do the respective choices for either type will be supplied
    //that object will be pushed to the teamArray and the function
    //will be called again until the user selects no or no options
    //at that point the gathered info will be returned to a series of
    //handler functions
    return inquirer
    .prompt([
        {
            type: 'checkbox',
            name: 'addMember',
            message: 'Would you like to add a team member?(Select One)',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    .then(addChoice => {
        const { addMember } = addChoice;
        if (addMember[0] === 'Engineer') {
            return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter engineer's name.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Please enter name.')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter engineer's ID number.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Please enter ID number.')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter engineer's email address.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Please enter email address.')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Enter engineer's github username.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Please enter github username.')
                            return false;
                        }
                    }
                }
            ])
            .then(memberData => {
                memberData.role = 'Engineer'
                managerData.teamArray.push(memberData);
                return userFunction(managerData)
            })
        }
        if (addMember[0] === 'Intern') {
            return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter intern's name.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Please enter name.')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter intern's ID number.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Please enter ID number.')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter intern's email address.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Please enter email address.')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "Enter intern's school.",
                    validate: input => {
                        if (input) {
                            return true;
                        } else {
                            console.log('Please enter school.')
                            return false;
                        }
                    }
                }
            ])
            .then(memberData => {
                memberData.role = 'Intern'
                managerData.teamArray.push(memberData);
                return userFunction(managerData);
            })
        }
        return managerData;
    })
}
//exports above functions
module.exports = { managerPrompt, userFunction }