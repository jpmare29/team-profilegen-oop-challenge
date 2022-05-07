const inquirer = require('inquirer');

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



const userFunction = managerData => {
    if (!managerData.teamArray) {
        managerData.teamArray = [];
    }
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

module.exports = { managerPrompt, userFunction }