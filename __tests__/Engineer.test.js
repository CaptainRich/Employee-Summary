
// Import the 'Employee' class

const Engineer = require('../lib/Engineer');

/////////////////////////////////////////////////////
// Create an engineer object
const engineer = new Engineer('Allen', 10001, 'allen@test.com', 'AllenGitHub');

// Define the specific tests for an employee
test("Checks an engineer's name", () => {
    expect(engineer.name).toBe("Allen");
});

test("Checks an engineer's ID number", () => {
    expect(engineer.id).toEqual(expect.any(Number));
});

test("Checks an engineer's email", () => {
    expect(engineer.email).toBe("allen@test.com");
});

test("Checks an engineer's GitHub name", () => {
    expect(engineer.gitHub).toBe("AllenGitHub");
});

test("Checks an engineer's roll", () => {
    expect(engineer.roll).toBe("Engineer");
});