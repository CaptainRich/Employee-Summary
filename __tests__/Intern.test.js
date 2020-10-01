
// Import the 'Intern' class

const Intern = require('../lib/Intern');

/////////////////////////////////////////////////////
test('Creates an intern object', () => {
    const intern = new Intern('Newbe', 10001, 'newbe@test.com', 'Acme_U');

    expect(intern.name).toBe("Newbe");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe("newbe@test.com");
    expect(intern.school).toBe("Acme_U");
    expect(intern.roll).toBe("Intern");
});