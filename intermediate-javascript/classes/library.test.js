const Media = require("./build-a-library");
const Book = require("./build-a-library");

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

  test('Constructs ratings array initially empty', () => {
    const newMedia = new Media("title");
    expect(newMedia._ratings.length).toBe(0);
  })

  test('addRating method adds rating to ratings array', () => {
    const newMedia = new Media("title");
    newMedia.addRating(4);
    newMedia.addRating(2);
    expect(newMedia._ratings.length).toBe(2);
  })

  test('ratings getter returns ratings property', () => {
    const newMedia = new Media("title");
    newMedia.addRating(4);
    newMedia.addRating(2);
    expect(newMedia.ratings).toEqual([4, 2]);
  })

  test('getAverageRating method returns the average rating', () => {
    const newMedia = new Media("title");
    newMedia.addRating(4);
    newMedia.addRating(2);
    expect(newMedia.getAverageRating()).toBe(3);
  })
});

describe('Book child class extending Media', () => {
  test('title property from parent correcctly functioning', () => {
    const newBook = new Book("title");
    expect(newBook._title).toBe("title");
    expect(newBook.title).toBe("title");
  })

  test('isCheckedOut property from parent correctly functioning', () => {
    const newBook = new Book("title");
    expect(newBook._isCheckedOut).toBe(false);
    expect(newBook.isCheckedOut).toBe(false);
    newBook.toggleCheckOutStatus();
    expect(newBook.isCheckedOut).toBe(true);
  });

  test('ratings property from parent correctly functioning', () => {
    const newBook = new Book("title");
    expect(newBook._ratings.length).toBe(0);
    newBook.addRating(4);
    newBook.addRating(2);
    expect(newBook.ratings).toEqual([4, 2]);
    expect(newBook.getAverageRating()).toBe(3);
  })


});