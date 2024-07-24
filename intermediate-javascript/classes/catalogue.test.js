const { School } = require("./school-catalogue");

describe('School parent class', () => {

  test('Constructs name property passed as argument during instance creation', () => {
    const newSchool = new School('First School');
    expect(newSchool._name).toBe('First School');
  })

  test('name getter returns name property', () => {
    const newSchool = new School('First School');
    expect(newSchool.name).toBe('First School');
  })

  test('Constructs level property passed as argument during instance creation', () => {
    const newSchool = new School('First School', 'primary');
    expect(newSchool._level).toBe('primary');
  })

  test('level getter returns level property', () => {
    const newSchool = new School('First School', 'primary');
    expect(newSchool.level).toBe('primary');
  })

  test('Constructs numberOfStudents property passed as argument during instance creation', () => {
    const newSchool = new School('First School', 'primary', 300);
    expect(newSchool._numberOfStudents).toBe(300);
  })

  test('numberOfStudents getter returns level property', () => {
    const newSchool = new School('First School', 'primary', 300);
    expect(newSchool.numberOfStudents).toBe(300);
  })

  test('numberOfStudents setter checks input is a number', () => {
    const newSchool = new School('First School', 'primary', 300);
    const logSpy = jest.spyOn(console, 'log');
    newSchool.numberOfStudents = "Ten";
    expect(logSpy).toHaveBeenCalledWith('Invalid input: numberOfStudents must be set to a Number.')
  })

  test('numberOfStudents setter correctly updates property', () => {
    const newSchool = new School('First School', 'primary', 300);
    newSchool.numberOfStudents = 400;
    expect(newSchool.numberOfStudents).toBe(400);
  })

})