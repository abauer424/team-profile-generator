const Manager = require("../lib/Manager")

test('can set officeNum', () => {
    const manager = new Manager('Amber', 1, 'amber@yahoo.com', 'abauer424');
   expect(manager.officeNum).toBe("abauer424")

})

test('can get officeNum', () => {
    const manager = new Manager('Amber', 1, 'amber@yahoo.com', 'abauer424');
    expect(manager.getOfficeNum()).toBe("abauer424")

})