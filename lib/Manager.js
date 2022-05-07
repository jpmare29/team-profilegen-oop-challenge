const Employee = require('./Employee');
//requires super class and makes new Manager class extended from it
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        //new attribute
        this.office = office;
    }
    //overwrites super class method of same name
    getRole() {
        return 'Manager';
    }
}
//allows export of the above object
module.exports = Manager;