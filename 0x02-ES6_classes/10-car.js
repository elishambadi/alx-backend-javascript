export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // eslint-disable-line no-underscore-dangle
    this._motor = motor; // eslint-disable-line no-underscore-dangle
    this._color = color; // eslint-disable-line no-underscore-dangle
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Car = this.constructor[Symbol.species];
    return new Car();
  }
}
