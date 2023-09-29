import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    // Create a new object of the parent class (Car)
    const carClone = super.cloneCar();
    // Change the prototype to Car to ensure privacy
    Object.setPrototypeOf(carClone, Car.prototype);
    return carClone;
  }
}

export default EVCar;
