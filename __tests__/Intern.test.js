
// Import the 'Intern' class

const Intern = require('../lib/Intern');

/////////////////////////////////////////////////////
// Create an engineer object
const intern = new Intern('Newbe', 10001, 'newbe@test.com', 'Acme_U');

// Define the specific tests for an employee
test("Checks an intern's name", () => {
    expect(intern.name).toBe("Newbe");
});

test("Checks an intern's ID number", () => {
    expect(intern.id).toEqual(expect.any(Number));
});

test("Checks an intern's email", () => {
    expect(intern.email).toBe("newbe@test.com");
});

test("Checks an intern's school", () => {
    expect(intern.school).toBe("Acme_U");
});

test("Checks an intern's roll", () => {
    expect(intern.roll).toBe("Intern");
});