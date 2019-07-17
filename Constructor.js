class Hero {
    constructor(name, specialAbility) {
        this._name = name;
        this._specialAbility = specialAbility;
        this.getDetails = () => `${this._name} can ${this._specialAbility}`;
    }
}

const Qop = new Hero('Qop', 'blink');
console.log(Qop.getDetails()); // Iron Man can fly