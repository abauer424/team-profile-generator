const Engineer = require("../lib/Engineer")

test('can set github', () => {
    const engineer = new Engineer('Amber', 1, 'amber@yahoo.com', 'abauer424');
   expect(engineer.gitHub).toBe("abauer424")

})

test('can get github', () => {
    const engineer = new Engineer('Amber', 1, 'amber@yahoo.com', 'abauer424');
    expect(engineer.getGitHub()).toBe("abauer424")

})