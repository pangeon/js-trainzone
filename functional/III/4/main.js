var girls = ['Agnieszka', 'Paulina', 'Katarzyna'];

function addElem(array, element) {
    return array.push(element);
}
function reverse(array) {
    return array.reverse();
}
function split(array, start, end) {
    return array.slice(start, end);
}
addElem(girls, 'Ewa');
reverse(girls);
var fragmentOfArray = split(girls, 0, 2);

console.log(girls);
console.log(fragmentOfArray);