const Employee = require('../lib/Employee');

test('Creates an Employee object', () => {
    const employee = new Employee('Jason', 1, 'email@email.com');

    expect(employee.getName()).toBe('Jason');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('email@email.com');
    expect(employee.getRole()).toBe('Employee');
})