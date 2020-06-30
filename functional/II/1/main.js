var a = 10;
var b = 20;

fn = (a, b) => a + b;
r = () => Math.random();

console.log(fn(r(), b));

var x = 1;
function outerFn(x) {
    return function fn(y) {
        x++;
        return x + y;
    }
}

console.log(outerFn(x)(3));
console.log(x);


