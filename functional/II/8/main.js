
function sqrt3(x) {
    return x ** (1/3);
}
function pow2(x) {
    return x ** 2;
}

compose = (outher, inner) => wrap = (x) => outher(inner(x));
// fnX ( fnY(x) )
var x_2_3 = compose(sqrt3, pow2);

console.log("sqrt(27, 3) = " + sqrt3(27));
console.log("pow(sqrt(27, 3), 2) = " + x_2_3(27));
