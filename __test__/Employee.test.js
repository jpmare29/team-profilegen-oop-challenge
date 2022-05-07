const Employee = require('../lib/Employee');
//test for Employee object creation
test('Creates an Employee object', () => {
    //instantiates new Employee object with respective values
    const employee = new Employee('Jason', 1, 'email@email.com');
    //test to see if appropriate attributes are assigned and if methods work
    expect(employee.getName()).toBe('Jason');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('email@email.com');
    expect(employee.getRole()).toBe('Employee');
})