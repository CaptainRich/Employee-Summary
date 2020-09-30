
// Import the 'Employee' class

const Employee = require('../lib/Employee');

/////////////////////////////////////////////////////
test('Creates an employee object', () => {
    const employee = new Employee('Dave', 10001, 'dave@test.com');

    expect(employee.name).toBe("Dave");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("dave@test.com");
    expect(employee.roll).toBe("Employee");
});