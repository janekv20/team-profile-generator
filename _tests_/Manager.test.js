const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', 12345);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});
//get name
test('gets manager name', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', 12345);

    expect(manager.getName()).toEqual(expect.any(String));
})
//get id
test('gets manager id', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', 12345);

    expect(manager.getId()).toEqual(expect.any(Number));
})
//get email
test('gets manager email', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', 12345);

    expect(manager.getEmail()).toEqual(expect.any(String));
})
//get role
test('gets manager role', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', 12345);

    expect(manager.getRole()).toEqual(expect.any(String));
})
//get office number
test('get manager office number', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', 12345);

    expect(manager.getOfficenumber()).toEqual(expect.any(Number));
});