
// Import the 'Employee' class

const Manager = require('../lib/Manager');

/////////////////////////////////////////////////////
test('Creates a manager object', () => {
    const manager = new Manager('ElJefe', 10001, 'eljefe@test.com', 'B107');

    expect(manager.name).toBe("ElJefe");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("eljefe@test.com");
    expect(manager.officeNumber).toBe("B107");
    expect(manager.roll).toBe("Manager");
});