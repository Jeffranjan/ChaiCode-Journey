class car {
  constructor(car, color) {
    this.car = car;
    this.color = color;
  }

  drive() {
    console.log(`I'm drinking ${this.car} with ${this.color}`);
  }
}

const myCar = new car("Mercedez", "Blue");
console.log(myCar);
