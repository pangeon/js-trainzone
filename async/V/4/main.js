 function pow2(x) {
     console.log(2 ** x);
 }
 function* generator() {
    var value = yield;
    pow2(value); 
 }
 let iterator = generator();
 
 iterator.next();
 iterator.next(3);
