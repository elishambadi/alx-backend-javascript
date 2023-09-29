class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    // Use Object.assign to create a new object of the same class
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

export default Car;
