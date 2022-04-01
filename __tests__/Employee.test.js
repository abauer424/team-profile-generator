//name, id, email, getname(), getId(), getEmail(), getRole(),
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
    expect(employee.name).toBe('Amber');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('amber@yahoo.com');
    expect(employee.role).toBe('Employee');

})

test('get name of employee as object', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
    expect(employee.getName()).toHaveProperty('name');
})

test('get id as object', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
    expect(employee.getId()).toHaveProperty(1);
})

test('get email as object', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
    expect(employee.getEmail()).toHaveProperty('amber@yahoo.com');
})

test('get role as object', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
    expect(employee.getRole()).toHaveProperty('role');
})




