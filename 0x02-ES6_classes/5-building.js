export default class Building {
  constructor(sqft) {
    // Checking if initialization is not from parent class
    if (this.constructor !== Building) {
      // Checking if the function exists
      if (typeof (this.evacuationWarningMessage) !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
  }

  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  set sqft(val) {
    if (typeof (val) !== 'number') {
      throw TypeError('sqft should be a number');
    } else {
      this._sqft = val; // eslint-disable-line no-underscore-dangle
    }
  }
}
