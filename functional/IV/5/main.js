var compose = require('../../../lib/node_modules/compose-function');

const naturals = [];

function fill(array, tableSize) {
    for (let i = 0; i <= tableSize; i++) {
        array[i] = i;
    }
}
fill(naturals, 100);
console.log(naturals);

isNotOne = (x) => x != 1;
isNotDividedByTwo = (x) => (x == 2) || (x % 2 > 0);
isNotDividedByThree = (x) => (x == 3) || (x % 3 > 0); 
isNotDividedByFive = (x) => (x == 5) || (x % 5 > 0); 
isNotDividedBySeven = (x) => (x == 7) || (x % 7 > 0);

var divisibility = 
compose(
    isNotOne,
    isNotDividedByTwo,
    isNotDividedByThree,
    isNotDividedByFive,
    isNotDividedBySeven 
);
var primeNumbers = naturals.filter(divisibility);

sum = (a, b) => a + b;    
var countPrimeNumbers = primeNumbers.reduce(sum);
console.log(
    'Ilość liczb pierwszych od ' 
    + naturals[0] 
    + ' do ' 
    + naturals[naturals.length -1] 
    + ': ' 
    + primeNumbers.length
);

console.log(primeNumbers);
console.log('Suma podanych liczb pierwszych: ' + countPrimeNumbers);