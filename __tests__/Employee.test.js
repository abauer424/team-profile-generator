//name, id, email, getname(), getId(), getEmail(), getRole(),
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
   expect(typeof(employee)).toBe("object")

})

test('can set name', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
   expect(employee.name).toBe("Amber")

})

test('can set ID', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
   expect(employee.id).toBe(1)

})

test('can set email', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
   expect(employee.email).toBe("amber@yahoo.com")

})

test('can get name', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
   expect(employee.getName()).toBe("Amber")

})

test('can get id', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
   expect(employee.getId()).toBe(1)

})

test('can get email', () => {
    const employee = new Employee('Amber', 1, 'amber@yahoo.com');
   expect(employee.getEmail()).toBe("amber@yahoo.com")

})








