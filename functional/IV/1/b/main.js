var naturals = [0, 1, 2, 3, 4, 5];
factorial = (a) => (a < 2) ? 1 : a*factorial(a-1);

multi = (a, b) => a*b;
factorialReduce = (collection) => collection.reduce(multi);

transform = (array, fn) => {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = fn(array[i]);  
    }
    return newArray;
}
var factorialNumbers = transform(naturals, factorial);

console.log(factorial(5));
console.log(factorialNumbers);

function naturalsWithoutZero(array) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        (array[i] == 0) ? newArray[i] = 1 : newArray[i] = array[i];
    }
    return newArray;
}
var factorialNumbersWithoutZero = naturalsWithoutZero(naturals);
console.log(factorialReduce(factorialNumbersWithoutZero));