function createBook(type, availability, title) {
    return [type, availability, title];
}
function partial(fn, ...partialsArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...partialsArgs, ...laterArgs);
    }
}

var sciFiBook = partial(createBook, 'science fiction', true);
var criminalBook = partial(createBook, 'criminal', true);

console.log(sciFiBook('Ubik'));
console.log(criminalBook('Sherlock Holmes'));