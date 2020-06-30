carry = (fn) => (a) => (b) => (h) => fn(a,b,h);

// f(a, b, h) = f(a)(b)(h)
// Carrying
trapheze = (a, b, h) => (a + b)/2*h;

var carriedTrapheze = carry(trapheze);
var traphezebottomBase = carriedTrapheze(2); // a
var traphezeBases = traphezebottomBase(4); // (a + b)/2
var traphezeArea = traphezeBases(6); // (a + b)/2 * h
console.log(traphezeArea);
