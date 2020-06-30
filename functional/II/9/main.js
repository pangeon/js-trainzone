sqrt3 = (x) => x ** (1/3);
pow2 =(x) => x ** 2;
split = (string) => string.split(" ");
arrSize =(arr) => arr.length;


compose = (outher, inner) => wrap = (x) => outher(inner(x));
pipe = (inner, outher) => wrap = (x) => outher(inner(x));

var x_2_3 = compose(sqrt3, pow2);
var getArraySize = pipe(split, arrSize);

console.log("sqrt(27, 3) = " + sqrt3(27));
console.log("pow(sqrt(27, 3), 2) = " + x_2_3(27));
console.log("Array size = " + getArraySize('Kazik lubi kosić trawniki u Majrzaków.'));
