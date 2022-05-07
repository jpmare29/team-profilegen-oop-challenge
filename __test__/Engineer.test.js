const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Jason', 1, 'email@email.com', 'githubuser');

    expect(engineer.getName()).toBe('Jason');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('email@email.com');
    expect(engineer.getGithub()).toBe('githubuser');
    expect(engineer.getRole()).toBe('Engineer');
})