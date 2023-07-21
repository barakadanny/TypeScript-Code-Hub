class Vehicle {
  protected honk(): void {
    console.log("from method honk() in class Vehicle");
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log("=====>>>>> from method drive() in class Car");
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
