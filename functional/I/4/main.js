function fn(x, y) {
    //var sum = x ** y ** z ** q; nie ma dostępu do z i q
    return function(z) {
        return function(q) {
            return x ** y ** z ** q + sum;
        }   
    }
}

console.log(fn(2, 2)(2)(2));