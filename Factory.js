/*
Factory pattern is another class-based creational pattern
*/
class BallFactory {
    constructor(){
        this.createBall = type => {
            let ball;
            type === 'football' ? ball = new Football() : ball = new Basketball();
            na   
        }
    }
}