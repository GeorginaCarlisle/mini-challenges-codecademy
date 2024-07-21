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
});