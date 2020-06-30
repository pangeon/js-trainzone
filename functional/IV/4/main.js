const naturals = [];

function fill(array, tableSize) {
    for (let i = 0; i <= tableSize; i++) {
        array[i] = i;
    }
}
fill(naturals, 1000);
console.log(naturals);

isNotOne = (x) => x != 1;
isNotDividedByTwo = (x) => (x == 2) || (x % 2 > 0);
isNotDividedByThree = (x) => (x == 3) || (x % 3 > 0); 
isNotDividedByFive = (x) => (x == 5) || (x % 5 > 0); 
isNotDividedBySeven = (x) => (x == 7) || (x % 7 > 0);

var primeNumbers = naturals
    .filter(isNotOne)
    .filter(isNotDividedByTwo) // wyszukuje niepatrzyste
    .filter(isNotDividedByThree) // wyszukuje niepodzielne przez 3
    .filter(isNotDividedByFive) // wyszukuje niepodzielne przez 5
    .filter(isNotDividedBySeven); // wyszukuje niepodzielne przez 7

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