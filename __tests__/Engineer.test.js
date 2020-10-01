
// Import the 'Employee' class

const Engineer = require('../lib/Engineer');

/////////////////////////////////////////////////////
test('Creates an engineer object', () => {
    const engineer = new Engineer('Allen', 10001, 'allen@test.com', 'AllenGitHub');

    expect(engineer.name).toBe("Allen");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("allen@test.com");
    expect(engineer.gitHub).toBe("AllenGitHub");
    expect(engineer.roll).toBe("Engineer");
});