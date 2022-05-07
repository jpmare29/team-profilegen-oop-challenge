const Employee = require('./Employee');
//requires super class and makes new Intern class extended from it
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        //new attribute
        this.school = school;
    }
    //new method and overrides getRole method from super class
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}
//allows export of the above object
module.exports = Intern;