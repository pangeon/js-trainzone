const naturals = [0, 1, 2, 3, 4, 5];
Object.freeze(naturals);

const girls = ['agnieszka', 'paulina', 'katarzyna'];
Object.freeze(girls);

factorial = (a) => (a < 2) ? 1 : a*factorial(a-1);
upperCase = (string) => string.toUpperCase();

console.log(naturals.map(factorial));
console.log(girls.map(upperCase));
