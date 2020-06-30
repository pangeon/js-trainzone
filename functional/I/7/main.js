function fn(a) {
    return a * 2;
}
function fnx(b) {
    return b * 3;
}
console.log(fn());
console.log(fn.name);
console.log(fn.length);
console.log(fnx(fn(2)));
