// Step 1: Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Step 2: Create a Car class that implements Vehicle
class car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Step 3: Create an instance of Car and call start
const mycar = new car("Toyota", "Corolla", 2021);
myCar.start();
