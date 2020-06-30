function power(i) {
    var result = 1; 
    (i == 0) ? result : result = i * power(i - 1);
    return result;
}
function fn() {
    return function(i) {
        return power(i);
    }
}

console.log(fn()(5));