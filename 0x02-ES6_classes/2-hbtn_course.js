export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('Length must be a number');
    }

    if (typeof (length) === 'number') {
      this._length = length; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('Length must be a number');
    }

    this._students = students; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(val) {
    if (typeof (val) === 'string') {
      this._name = val; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  set length(val) {
    if (typeof (val) === 'number') {
      this._length = val; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set students(val) {
    this._students = val; // eslint-disable-line no-underscore-dangle
  }
}
