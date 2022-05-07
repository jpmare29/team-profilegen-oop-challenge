const Manager = require('../lib/Manager');

test('Creates a Manager object', () => {
    const manager = new Manager('Jason', 1, 'email@email.com', 101);

    expect(manager.getName()).toBe('Jason');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('email@email.com');
    expect(manager.office).toBe(101);
    expect(manager.getRole()).toBe('Manager');
}) 