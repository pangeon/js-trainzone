var $REQUEST = require('../../../lib/node_modules/request');;

function printFromJSON(text) {
    console.log(JSON.parse(text)[0]);
}
function print(text) {
    console.log(text);
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
async function getData() {
    try {
        var promisePostLink = await getResource('http://jeti.org.pl/wp-json/wp/v2/posts?_fields=link');
        var promisePostTitle = await getResource('http://jeti.org.pl/wp-json/wp/v2/posts?_fields=title');
        var promisePostDate = await getResource('http://jeti.org.pl/wp-json/wp/v2/posts?_fields=date');
        
        printFromJSON(promisePostLink);
        printFromJSON(promisePostTitle);
        printFromJSON(promisePostDate);
    } catch(error) {
        print(error);
    } 
}
getData();





