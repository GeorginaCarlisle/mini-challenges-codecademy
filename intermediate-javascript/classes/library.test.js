const Media = require("./build-a-library");

describe('Media parent class', () => {

  test('Constructs title property passed as argument during new instance creation', () => {
    const newMedia = new Media("title");
    expect(newMedia._title).toBe("title");
  });

  test('title getter returns title property', () => {
    const newMedia = new Media("title");
    expect(newMedia.title).toBe("title");
  });

  test('Constructs isCheckedOut property initially set to false', () => {
    const newMedia = new Media("title");
    expect(newMedia._isCheckedOut).toBe(false);
  });

  test('isCheckedOut getter returns isCheckedOut property', () => {
    const newMedia = new Media("title");
    expect(newMedia.isCheckedOut).toBe(false);
  });

  test('toggleCheckOutStatus method switches isCheckedOut', () => {
    const newMedia = new Media("title");
    newMedia.toggleCheckOutStatus();
    expect(newMedia.isCheckedOut).toBe(true);
  });
});