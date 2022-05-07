const Engineer = require('../lib/Engineer');
//test for Engineer object creation
test('Creates an Engineer object', () => {
    //instantiates new Engineer object with respective values
    const engineer = new Engineer('Jason', 1, 'email@email.com', 'githubuser');
    //test to see if appropriate attributes are assigned and if methods work
    expect(engineer.getName()).toBe('Jason');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('email@email.com');
    expect(engineer.getGithub()).toBe('githubuser');
    expect(engineer.getRole()).toBe('Engineer');
})