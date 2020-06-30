var $REQUEST = require('../1/a/node_modules/request');;

const RESOURCE_URLS = {
    links: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=link',
    titles: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=title',
    dates: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=date'
}
const ERROR_MSG = {
    invalid_url: () => { console.log('Error: Invalid URL') }
}
Object.freeze(RESOURCE_URLS);
Object.freeze(ERROR_MSG);

printJSON = (text) => console.log(JSON.parse(text)[0]);
print = (text) => console.log(text);

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

promisePostLink.then(printJSON).then(
    () => promisePostTitle).then(printJSON).then(
        () => promisePostDate).then(printJSON)
        .catch(ERROR_MSG.invalid_url);