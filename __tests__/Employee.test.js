//name, id, email, getname(), getId(), getEmail(), getRole(),
const Employee = require('../lib/Employee');

test('creates employee onject', () => {
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
