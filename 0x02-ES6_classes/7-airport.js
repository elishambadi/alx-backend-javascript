const util = require('util');

export default class Airport {
  constructor(name, code) {
    this._name = name; // eslint-disable-line no-underscore-dangle
    this._code = code; // eslint-disable-line no-underscore-dangle
  }

  [util.inspect.custom](depth, opts) { // eslint-disable-line no-unused-vars
    return `Airport [${this._code}] { _name: '${this._name}, _code: '${this._code}' }`; // eslint-disable-line no-underscore-dangle
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
