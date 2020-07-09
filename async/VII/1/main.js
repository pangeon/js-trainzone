var inputStream = Rx.Observable.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

inputStream.subscribe(function(v) {
    console.log(2 ** v);
});