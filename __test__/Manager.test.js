const Manager = require('../lib/Manager');
//test for manager object creation
test('Creates a Manager object', () => {
    //instatiates new Manager object with respective values
    const manager = new Manager('Jason', 1, 'email@email.com', 101);
    //test to see if appropriate attributes are assigned and if methods work
    expect(manager.getName()).toBe('Jason');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('email@email.com');
    expect(manager.office).toBe(101);
    expect(manager.getRole()).toBe('Manager');
}) 