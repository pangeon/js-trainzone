print = (text) => console.log(text);

runVehicle = (carName, time) => {
    return new Promise((accept, reject) => {
        setTimeout(() => {
            print(carName + ' is running.');
            accept(carName);
        }, 1000 * time)
    });
}
var redCar = runVehicle('Toyota', Math.random());
var blueCar = runVehicle('BMW', Math.random());
var blackCar = runVehicle('Opel', Math.random());
var silverCar = runVehicle('Ferrari', Math.random());

Promise.race([redCar, blueCar, silverCar, blackCar]).then(print);
Promise.all([redCar, blueCar, silverCar, blackCar]).then(print);




