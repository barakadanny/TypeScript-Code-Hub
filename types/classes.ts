class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("from method honk() in class Vehicle");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("=====>>>>> from method drive() in class Car");
//   }

//   public startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();
