// https://lodash.com/docs/4.17.15
const $LODASH = require('../../../lib/node_modules/lodash/fp');

function naturalNumArray(tableSize) {
    var array = [];
    for (let i = 0; i <= tableSize; i++) {
        array[i] = i;
    }
    return array;
}
isOdd = (a) => a % 2 == 1;
double = (a) => a * 2;

console.log(naturalNumArray(10).filter(isOdd).map(double));
var filteredNumbers = 
$LODASH.compose
    ([
        $LODASH.map(double), 
        $LODASH.filter(isOdd)
    ]);
console.log(filteredNumbers(naturalNumArray(10)));