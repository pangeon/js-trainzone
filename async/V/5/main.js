power = (a, n, time) => {
    setTimeout(() => {
        iterator.next(a ** n);
    }, 1000 * time);
}
function* getPower(a, n, time) {
    let result = yield power(a, n, time);
    console.log(result);
}
var iterator = getPower(2, 3, 2);
iterator.next();