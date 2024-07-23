class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }

  getAverageRating() {
    let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingSum / this._ratings.length;
  }
}

module.exports = Media;