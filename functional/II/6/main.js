// Carrying
trapheze = (a) => (b) => (h) => (a + b)/2*h;
console.log(trapheze(2)(4)(6));

var traphezebottomBase = trapheze(2); // a
var traphezeBases = traphezebottomBase(4); // (a + b)/2
var traphezeArea = traphezeBases(6); // (a + b)/2 * h
console.log(traphezeArea);

