
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jane', 12345, 'jane.h.vo@gmail.com', 'janekv20');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});
//get name
test('gets engineer name', () => {
    const engineer = new Engineer('Jane', 12345, 'jane.h.vo@gmail.com', 'janekv20');

    expect(engineer.getName()).toEqual(expect.any(String));
})
//get id
test('gets engineer id', () => {
    const engineer = new Engineer('Jane', 12345, 'jane.h.vo@gmail.com', 'janekv20');

    expect(engineer.getId()).toEqual(expect.any(Number));
})
//get email
test('gets engineer email', () => {
    const engineer = new Engineer('Jane', 12345, 'jane.h.vo@gmail.com', 'janekv20');

    expect(engineer.getEmail()).toEqual(expect.any(String));
})
//get role
test('gets engineer role', () => {
    const engineer = new Engineer('Jane', 12345, 'jane.h.vo@gmail.com', 'janekv20');

    expect(engineer.getRole()).toEqual(expect.any(String));
})
//get github
test('get engineer github', () => {
    const engineer = new Engineer('Jane', 12345, 'jane.h.vo@gmail.com', 'janekv20');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});