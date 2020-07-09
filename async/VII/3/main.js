const RESOURCE_URLS = {
    links: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=link',
    titles: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=title',
    dates: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=date'
}
Object.freeze(RESOURCE_URLS);

var requestStream = Rx.Observable.of(
    RESOURCE_URLS.links,
    RESOURCE_URLS.titles,
    RESOURCE_URLS.dates
);
var responseStream = requestStream.flatMap((url) => {
    return Rx.Observable.fromPromise(fetch(url));
}).flatMap((response) => {
    return response.json();
})
responseStream.subscribe((post) => {
    for(var i = 0; i < 10; i++) {
        console.log(post[i].link);
        console.log(post[i].title);
        console.log(post[i].date);
    }
});
