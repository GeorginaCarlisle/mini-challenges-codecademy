const { School, PrimarySchool } = require("./school-catalogue");

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
    expect(logSpy).toHaveBeenCalledWith('Invalid input: numberOfStudents must be set to a Number.');
    logSpy.mockRestore(); //Cleans up spy after test
  })

  test('numberOfStudents setter correctly updates property', () => {
    const newSchool = new School('First School', 'primary', 300);
    newSchool.numberOfStudents = 400;
    expect(newSchool.numberOfStudents).toBe(400);
  })

  test('quickFacts method prints facts', () => {
    const newSchool = new School('First School', 'primary', 300);
    const logSpy = jest.spyOn(console, 'log');
    newSchool.quickFacts();
    expect(logSpy).toHaveBeenCalledWith('First School educates 300 students at the primary school level.');
    logSpy.mockRestore(); //Cleans up spy after test
  })

  describe('pickSubstituteTeacher method returns a random teacher', () => {
    test('returned teacher is from parameter array', () => {
      const substituteTeachers = ['Jenny Smith', 'Henry Ball', 'Peter Johnson'];
      const chosenTeacher = School.pickSubstituteTeacher(substituteTeachers);
      expect(substituteTeachers).toContain(chosenTeacher);
    })

    test('parameter array of one returns only choice', () => {
      const chosenTeacher = School.pickSubstituteTeacher(['Jenny Smith']);
      expect(chosenTeacher).toBe('Jenny Smith');
    })

    test('chosenTeacher selected based on mocked random number', () => {
      const substituteTeachers = ['Jenny Smith', 'Henry Ball', 'Peter Johnson'];
      jest.spyOn(Math, 'random').mockReturnValue(0.9);
      const chosenTeacher = School.pickSubstituteTeacher(substituteTeachers);
      expect(chosenTeacher).toBe('Peter Johnson');
    })
  })

})

describe('PrimarySchool Class', () => {
  describe('correctly extends the School parent class', () => {
    test('Constructs name and numberOfStudents properties passed as argument during instance creation', () => {
      const newPrimarySchool = new PrimarySchool('First School', 200);
      expect(newPrimarySchool._name).toBe('First School');
      expect(newPrimarySchool._numberOfStudents).toBe(200);
    })

    test('Value property automatically constructed with value of primary', () => {
      const newPrimarySchool = new PrimarySchool('First School', 200);
      expect(newPrimarySchool._level).toBe('primary');
    })
  
    test('name getter returns name property', () => {
      const newPrimarySchool = new PrimarySchool('First School', 200);
      expect(newPrimarySchool.name).toBe('First School');
    })
  
    test('level getter returns level property', () => {
      const newPrimarySchool = new PrimarySchool('First School', 200);
      expect(newPrimarySchool.level).toBe('primary');
    })
  
    test('numberOfStudents getter returns number of students property', () => {
      const newPrimarySchool = new PrimarySchool('First School', 200);
      expect(newPrimarySchool.numberOfStudents).toBe(200);
    })
  
    test('numberOfStudents setter checks input is a number', () => {
      const newPrimarySchool = new PrimarySchool('First School', 200);
      const logSpy = jest.spyOn(console, 'log');
      newPrimarySchool.numberOfStudents = "Ten";
      expect(logSpy).toHaveBeenCalledWith('Invalid input: numberOfStudents must be set to a Number.');
      logSpy.mockRestore(); //Cleans up spy after test
    })
  
    test('numberOfStudents setter correctly updates property', () => {
      const newPrimarySchool = new PrimarySchool('First School', 200);
      newPrimarySchool.numberOfStudents = 201;
      expect(newPrimarySchool.numberOfStudents).toBe(201);
    })
  
    test('quickFacts method prints facts', () => {
      const newPrimarySchool = new PrimarySchool('First School', 200);
      const logSpy = jest.spyOn(console, 'log');
      newPrimarySchool.quickFacts();
      expect(logSpy).toHaveBeenCalledWith('First School educates 200 students at the primary school level.');
      logSpy.mockRestore(); //Cleans up spy after test
    })
  })
})