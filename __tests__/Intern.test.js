const Intern = require("../lib/Intern")

test('can set school', () => {
    const intern = new Intern('Amber', 1, 'amber@yahoo.com', 'abauer424');
   expect(intern.school).toBe("abauer424")

})

test('can get school', () => {
    const intern = new Intern('Amber', 1, 'amber@yahoo.com', 'abauer424');
    expect(intern.getSchool()).toBe("abauer424")

})