/*
Factory pattern is another class-based creational pattern
*/
class BallFactory {
    constructor() {
      this.createBall = function(type) {
        let ball;
        type === 'football' || type === 'soccer' ? ball = new Football() : ball = new Basketball();
        ball.roll = () =>  `The ${type} is rolling.`;
        return ball;
      };
    }
  }
class Football {
    constructor() {
        this._type = 'football';
        this.kick = () => 'You kicked the football';
    };
}
class Basketball {
    constructor(){
        this._type = 'basketball';
        this.bounce = () => 'You bounce the basketball';
    }
}

const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.