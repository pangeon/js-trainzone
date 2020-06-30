var $REQUEST = require('../../../../lib/node_modules/request');;

function print(text) {
    console.log(JSON.parse(text)[0]);
}

function getResource(url) {
    return new Promise(function(resolve, reject){
        $REQUEST(url, function(error, reponse, body){
            if(error) {
                reject();
            } else {
                resolve(body);
            }
        });
    });
}

var promisePostLink = getResource('http://jeti.org.pl/wp-json/wp/v2/posts?_fields=link');
var promisePostTitle = getResource('http://jeti.org.pl/wp-json/wp/v2/posts?_fields=title');
var promisePostDate = getResource('http://jeti.org.pl/wp-json/wp/v2/posts?_fields=date');

promisePostLink.then(print)
.then(function() {
    return promisePostTitle;
})
.then(print)
.then(function() {
    return promisePostDate;
})
.then(print);