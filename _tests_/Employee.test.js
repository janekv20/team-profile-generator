
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John', 123, 'janekv20@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
//get name
test('gets employees name', () => {
    const employee = new Employee('John', 123, 'janekv20@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})
//get id
test('gets employees id', () => {
    const employee = new Employee('John', 123, 'janekv20@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})
//get email
test('gets employees email', () => {
    const employee = new Employee('John', 123, 'janekv20@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})
//get role
test('gets employees role', () => {
    const employee = new Employee('John', 123, 'janekv20@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});