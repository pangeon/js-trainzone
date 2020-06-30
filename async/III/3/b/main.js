var $REQUEST = require('../../../../lib/node_modules/request');

const RESOURCE_URLS = {
    posts: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=link',
    titles: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=title',
}
Object.freeze(RESOURCE_URLS);
getResource = (url) => {
    return (callback) => {
        $REQUEST(url, callback);
    }
}
var postLink = getResource(RESOURCE_URLS['posts']);
var postTitle = getResource(RESOURCE_URLS['titles']);

getPostInfo = (postNumber) => {
    postLink((error, reponse, body) => {
        const parsedBody = JSON.parse(body);
        console.log(parsedBody[postNumber]);
        postTitle((error, reponse, body) => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody[postNumber]);
        });
    });
}
for (let i = 0; i < 10; i++) {
    getPostInfo(i);
}
