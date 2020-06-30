function createBook(type, availability, title) {
    return [type, availability, title];
}

var createSciFiBook = createBook.bind(null, 'science fiction', true);
var createCriminalBook = createBook.bind(null, 'criminal', true);
console.log(createSciFiBook('Ubik'));
console.log(createCriminalBook('Sherlock Holmes'));