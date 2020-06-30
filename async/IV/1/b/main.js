var $REQUEST = require('../../../../lib/node_modules/request');;

const RESOURCE_URLS = {
    links: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=link',
    titles: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=title',
    dates: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=date'
}
Object.freeze(RESOURCE_URLS);

print = (text) => console.log(JSON.parse(text)[0]);

getResource = (url) => {
    return new Promise((resolve, reject) => {
        $REQUEST(url, (error, reponse, body) => {
            error ? reject() : resolve(body);
        });
    });
}
var promisePostLink = getResource(RESOURCE_URLS['links']);
var promisePostTitle = getResource(RESOURCE_URLS['titles']);
var promisePostDate = getResource(RESOURCE_URLS['dates']);

promisePostLink.then(print).then(
    () => promisePostTitle).then(print).then(
        () => promisePostDate).then(print);