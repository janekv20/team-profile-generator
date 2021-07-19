const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', '12345');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});
//get name
test('gets manager name', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', '12345');

    expect(manager.getName()).toHaveProperty('name');
})
//get id
test('gets manager id', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', '12345');

    expect(manager.getId()).toHaveProperty('id');
})
//get email
test('gets manager email', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', '12345');

    expect(manager.getEmail()).toHaveProperty('email');
})
//get role
test('gets manager role', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', '12345');

    expect(manager.getRole()).toHaveProperty('role');
})
//get office number
test('get manager office number', () => {
    const manager = new Manager('Jane Doe', 1, 'jane.h.vo@gmail.com', '12345');

    expect(manager.getOfficenumber()).toHaveProperty('office');
});