const Employee = require('./Employee');
//requires super class and makes new Engineer class extended from it
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        //new attribute
        this.github = github;
    }
    //new method and overrides getRole method from super class
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}
//allows export of the above object
module.exports = Engineer;