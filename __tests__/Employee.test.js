
// Import the 'Employee' class

const Employee = require('../lib/Employee');

/////////////////////////////////////////////////////
// Create an employee object
const employee = new Employee('Dave', 10001, 'dave@test.com');

// Define the specific tests for an employee
test("Checks an employee's name", () => {
    expect(employee.name).toBe("Dave");
});

test("Checks an employee's ID number", () => {
    expect(employee.id).toEqual(expect.any(Number));
});

test("Checks an employee's email", () => {
    expect(employee.email).toBe("dave@test.com");
});

test("Checks an employee's roll", () => {
    expect(employee.roll).toBe("Employee");
});
