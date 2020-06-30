var girls = ['Agnieszka', 'Paulina', 'Katarzyna'];

function copyAndReverse(array) {
    var arrayCopy = [...array];
    return arrayCopy.reverse();
}
function reverse(array) {
    return array.reverse();
}
var reversed = reverse([...girls]);
var _reversed = copyAndReverse(girls);
//var _reversed_ = reverse(girls);

//console.log(girls);
console.log(reversed);
console.log(_reversed);
//console.log(_reversed_);
console.log(girls);