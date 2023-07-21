class Vehicle {
  drive(): void {
    console.log("from method drive() in class Vehicle");
  }

  honk(): void {
    console.log("from method honk() in class Vehicle");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
