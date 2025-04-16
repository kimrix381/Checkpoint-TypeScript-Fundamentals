// Step 2: Create a Car class that implements Vehicle
var Car = /** @class */ (function () {
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  Car.prototype.start = function () {
    console.log("Car engine started");
  };
  return Car;
})();
// Step 3: Create an instance of Car and call start
var myCar = new Car("Toyota", "Corolla", 2021);
myCar.start();
