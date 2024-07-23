const { Media, Book, Movie } = require("./build-a-library");

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

  test('Constructs author property passed as argument during new instance creation', () => {
    const newBook = new Book("title", "author");
    expect(newBook._author).toBe("author");
  })

  test('author getter returns author property', () => {
    const newBook = new Book("title", "author");
    expect(newBook.author).toBe("author");
  });

  test('Constructs pages property passed as argument during new instance creation', () => {
    const newBook = new Book("title", "author", 85);
    expect(newBook._pages).toBe(85);
  })

  test('pages getter returns pages property', () => {
    const newBook = new Book("title", "author", 85);
    expect(newBook.pages).toBe(85);
  });
});

describe('Movie child class extending Media', () => {
  test('title property from parent correcctly functioning', () => {
    const newMovie = new Movie("title");
    expect(newMovie._title).toBe("title");
    expect(newMovie.title).toBe("title");
  })

  test('isCheckedOut property from parent correctly functioning', () => {
    const newMovie = new Movie("title");
    expect(newMovie._isCheckedOut).toBe(false);
    expect(newMovie.isCheckedOut).toBe(false);
    newMovie.toggleCheckOutStatus();
    expect(newMovie.isCheckedOut).toBe(true);
  });

  test('ratings property from parent correctly functioning', () => {
    const newMovie = new Movie("title");
    expect(newMovie._ratings.length).toBe(0);
    newMovie.addRating(4);
    newMovie.addRating(2);
    expect(newMovie.ratings).toEqual([4, 2]);
    expect(newMovie.getAverageRating()).toBe(3);
  })

  test('Constructs director property passed as argument during new instance creation', () => {
    const newMovie = new Movie("title", "director");
    expect(newMovie._director).toBe("director");
  })

  test('director getter returns director property', () => {
    const newMovie = new Movie("title", "director");
    expect(newMovie.director).toBe("director");
  });

  test('Constructs runTime property passed as argument during new instance creation', () => {
    const newMovie = new Movie("title", "director", 449);
    expect(newMovie._runTime).toBe(449);
  })

  test('runTime getter returns runTime property', () => {
    const newMovie = new Movie("title", "director", 449);
    expect(newMovie.runTime).toBe(449);
  });

});