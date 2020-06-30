createBook = (type, availability, title) => [type, availability, title];

partial = (fn, ...partialsArgs) => (...laterArgs) => fn(...partialsArgs, ...laterArgs);

var sciFiBook = partial(createBook, 'science fiction', true);
var criminalBook = partial(createBook, 'criminal', true);

console.log(sciFiBook('Ubik'));
console.log(criminalBook('Sherlock Holmes'));