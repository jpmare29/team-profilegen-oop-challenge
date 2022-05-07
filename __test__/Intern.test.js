const Intern = require('../lib/Intern');

test('Create an Intern object', () => {
    const intern = new Intern('Jason', 1, 'email@email.com', 'internschool');

    expect(intern.getName()).toBe('Jason');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe('email@email.com');
    expect(intern.getSchool()).toBe('internschool');
    expect(intern.getRole()).toBe('Intern');
})