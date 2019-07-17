/*
This pattern is an object-based creational design pattern. 
In this, we use a sort of a “skeleton” of an existing object to create or instantiate new objects.
*/ 
const car = {
    noOfWheels: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    },
};

// Object.create(proto[, propertiesObject])
const myCar = Object.create(car, {
    owner: {
        value: 'John'
    }
});

console.log(myCar.owner);
console.log(myCar.__proto__ === car);