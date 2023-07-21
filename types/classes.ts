class Vehicle {
  drive(): void {
    console.log("from method drive() in class Vehicle");
  }

  honk(): void {
    console.log("from method honk() in class Vehicle");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("=====>>>>> from method drive() in class Car");
  }
}

const car = new Car();
car.drive();
car.honk();
