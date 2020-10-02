
// Import the 'Employee' class

const Manager = require('../lib/Manager');

/////////////////////////////////////////////////////
// Create an manager object
const manager = new Manager('ElJefe', 10001, 'eljefe@test.com', 'B107');

// Define the specific tests for an employee
test("Checks an manager's name", () => {
    expect(manager.name).toBe("ElJefe");
});

test("Checks an manager's ID number", () => {
    expect(manager.id).toEqual(expect.any(Number));
});

test("Checks an manager's email", () => {
    expect(manager.email).toBe("eljefe@test.com");
});

test("Checks an manager's office number", () => {
    expect(manager.officeNumber).toBe("B107");
});

test("Checks an manager's roll", () => {
    expect(manager.roll).toBe("Manager");
});