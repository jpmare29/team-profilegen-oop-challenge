const Intern = require('../lib/Intern');
//test for Intern object creation
test('Create an Intern object', () => {
    //instantiates new Intern object with respective values
    const intern = new Intern('Jason', 1, 'email@email.com', 'internschool');
    //test to see if appropriate attributes are assigned and if methods work
    expect(intern.getName()).toBe('Jason');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe('email@email.com');
    expect(intern.getSchool()).toBe('internschool');
    expect(intern.getRole()).toBe('Intern');
})