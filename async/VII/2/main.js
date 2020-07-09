var inputStream = Rx.Observable.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

var outputStream = inputStream.map((x) => {
    return 2 ** x;
}).map((x) => {
    return (x) + ' bytes = ' +  (x * 8) + ' bits';
});

outputStream.subscribe((text) => {
    console.log(text);
});

console.log(inputStream);
