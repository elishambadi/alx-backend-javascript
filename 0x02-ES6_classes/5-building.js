export default class Building {
  constructor(sqft) {
    if (typeof (sqft) !== 'number') {
      throw TypeError('sqft should be a number');
    } else {
      this._sqft = sqft; // eslint-disable-line no-underscore-dangle
    }

    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
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
