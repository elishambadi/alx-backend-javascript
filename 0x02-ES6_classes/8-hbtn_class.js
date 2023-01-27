export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // eslint-disable-line no-underscore-dangle
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  [Symbol.toPrimitive](val) {
    if (val === 'number') {
      return this._size; // eslint-disable-line no-underscore-dangle
    }
    if (val === 'string') {
      return this._location; // eslint-disable-line no-underscore-dangle
    }
    return 0;
  }
}
