// arrow functions are not hoisted
const showMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;

  document.body.append(p);
};

class Car {
  constructor(make, color, wheels, speed) {
    // punem argumentele intrate in constructor
    // pe instanta
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate(speedDelta = 1) {
    this.speed = this.speed + speedDelta;

    return this;
  }

  decelerate(speedDelta = 1) {
    this.speed = this.speed - speedDelta;

    return this;
  }

  setSpeed(speed) {
    this.speed = speed;

    return this;
  }
}

const audi = new Car('Audi', 'black', 4, 50);
audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

console.log(audi.speed);
showMessage(audi.speed);

audi.accelerate(12).decelerate(3).decelerate(4);

showMessage(audi.speed);

audi.setSpeed(4).accelerate();

showMessage(audi.speed);
