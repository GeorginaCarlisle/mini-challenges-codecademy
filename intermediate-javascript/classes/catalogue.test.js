const { School, PrimarySchool, MiddleSchool, HighSchool } = require("./school-catalogue");

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

  test('Constructs pickupPolicy property passed in as argument', () => {
    const newPrimarySchool = new PrimarySchool('First School', 200, 'Pick up policy');
    expect(newPrimarySchool._pickupPolicy).toBe('Pick up policy');
  })

  test('pickupProperty getter correctly returns value', () => {
    const newPrimarySchool = new PrimarySchool('First School', 200, 'Pick up policy');
    expect(newPrimarySchool.pickupPolicy).toBe('Pick up policy');
  })
})

describe('MiddleSchool Class', () => {
  describe('correctly extends the School parent class', () => {
    test('Constructs name and numberOfStudents properties passed as argument during instance creation', () => {
      const newMiddleSchool = new MiddleSchool('Second School', 300);
      expect(newMiddleSchool._name).toBe('Second School');
      expect(newMiddleSchool._numberOfStudents).toBe(300);
    })

    test('Value property automatically constructed with value of middle', () => {
      const newMiddleSchool = new MiddleSchool('Second School', 300);
      expect(newMiddleSchool._level).toBe('middle');
    })
  
    test('name getter returns name property', () => {
      const newMiddleSchool = new MiddleSchool('Second School', 300);
      expect(newMiddleSchool.name).toBe('Second School');
    })
  
    test('level getter returns level property', () => {
      const newMiddleSchool = new MiddleSchool('Second School', 300);
      expect(newMiddleSchool.level).toBe('middle');
    })
  
    test('numberOfStudents getter returns number of students property', () => {
      const newMiddleSchool = new MiddleSchool('Second School', 300);
      expect(newMiddleSchool.numberOfStudents).toBe(300);
    })
  
    test('numberOfStudents setter checks input is a number', () => {
      const newMiddleSchool = new MiddleSchool('Second School', 300);
      const logSpy = jest.spyOn(console, 'log');
      newMiddleSchool.numberOfStudents = "Ten";
      expect(logSpy).toHaveBeenCalledWith('Invalid input: numberOfStudents must be set to a Number.');
      logSpy.mockRestore(); //Cleans up spy after test
    })
  
    test('numberOfStudents setter correctly updates property', () => {
      const newMiddleSchool = new MiddleSchool('Second School', 300);
      newMiddleSchool.numberOfStudents = 301;
      expect(newMiddleSchool.numberOfStudents).toBe(301);
    })
  
    test('quickFacts method prints facts', () => {
      const newMiddleSchool = new MiddleSchool('Second School', 300);
      const logSpy = jest.spyOn(console, 'log');
      newMiddleSchool.quickFacts();
      expect(logSpy).toHaveBeenCalledWith('Second School educates 300 students at the middle school level.');
      logSpy.mockRestore(); //Cleans up spy after test
    })
  })
})

describe('HighSchool Class', () => {
  describe('correctly extends the School parent class', () => {
    test('Constructs name and numberOfStudents properties passed as argument during instance creation', () => {
      const newHighSchool = new HighSchool('Third School', 1000);
      expect(newHighSchool._name).toBe('Third School');
      expect(newHighSchool._numberOfStudents).toBe(1000);
    })

    test('Value property automatically constructed with value of high', () => {
      const newHighSchool = new HighSchool('Third School', 1000);
      expect(newHighSchool._level).toBe('high');
    })
  
    test('name getter returns name property', () => {
      const newHighSchool = new HighSchool('Third School', 1000);
      expect(newHighSchool.name).toBe('Third School');
    })
  
    test('level getter returns level property', () => {
      const newHighSchool = new HighSchool('Third School', 1000);
      expect(newHighSchool.level).toBe('high');
    })
  
    test('numberOfStudents getter returns number of students property', () => {
      const newHighSchool = new HighSchool('Third School', 1000);
      expect(newHighSchool.numberOfStudents).toBe(1000);
    })
  
    test('numberOfStudents setter checks input is a number', () => {
      const newHighSchool = new HighSchool('Third School', 1000);
      const logSpy = jest.spyOn(console, 'log');
      newHighSchool.numberOfStudents = "Ten";
      expect(logSpy).toHaveBeenCalledWith('Invalid input: numberOfStudents must be set to a Number.');
      logSpy.mockRestore(); //Cleans up spy after test
    })
  
    test('numberOfStudents setter correctly updates property', () => {
      const newHighSchool = new HighSchool('Third School', 1000);
      newHighSchool.numberOfStudents = 1001;
      expect(newHighSchool.numberOfStudents).toBe(1001);
    })
  
    test('quickFacts method prints facts', () => {
      const newHighSchool = new HighSchool('Third School', 1000);
      const logSpy = jest.spyOn(console, 'log');
      newHighSchool.quickFacts();
      expect(logSpy).toHaveBeenCalledWith('Third School educates 1000 students at the high school level.');
      logSpy.mockRestore(); //Cleans up spy after test
    })

    test('Constructs sportsTeam property passed in as argument', () => {
      const newHighSchool = new HighSchool('Third School', 1000, ['Hockey', 'Netball', 'Football']);
      expect(newHighSchool._sportsTeams).toStrictEqual(['Hockey', 'Netball', 'Football']);
    })
  
    test('pickupProperty getter correctly returns value', () => {
      const newHighSchool = new HighSchool('Third School', 1000, ['Hockey', 'Netball', 'Football']);
      expect(newHighSchool.sportsTeams).toStrictEqual(['Hockey', 'Netball', 'Football']);
    })
  })
})