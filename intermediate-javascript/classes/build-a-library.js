class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
}

module.exports = Media;