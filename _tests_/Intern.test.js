const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jane Doe', 6789, 'jane.vo@utexas.edu', 'UT Austin');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});
//get name
test('gets intern name', () => {
    const intern = new Intern('Jane Doe', 6789, 'jane.vo@utexas.edu', 'UT Austin');

    expect(intern.getName()).toEqual(expect.any(String));
})
//get id
test('gets intern id', () => {
    const intern = new Intern('Jane Doe', 6789, 'jane.vo@utexas.edu', 'UT Austin');

    expect(intern.getId()).toEqual(expect.any(Number));
})
//get email
test('gets intern email', () => {
    const intern = new Intern('Jane Doe', 6789, 'jane.vo@utexas.edu', 'UT Austin');

    expect(intern.getEmail()).toEqual(expect.any(String));
})
//get role
test('gets intern role', () => {
    const intern = new Intern('Jane Doe', 6789, 'jane.vo@utexas.edu', 'UT Austin');

    expect(intern.getRole()).toEqual(expect.any(String));
})
//get school
test('get intern school', () => {
    const intern = new Intern('Jane Doe', 6789, 'jane.vo@utexas.edu', 'UT Austin');

    expect(intern.getSchool()).toEqual(expect.any(String));
});