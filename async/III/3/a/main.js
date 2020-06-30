var $REQUEST = require('../../../../lib/node_modules/request');;

$REQUEST('http://jeti.org.pl/wp-json/wp/v2/posts?_fields=link', 
function(error, response, body) {
    const parsedBody = JSON.parse(body);
    console.log(parsedBody[0]);
});
$REQUEST('http://jeti.org.pl/wp-json/wp/v2/posts?_fields=title', 
function(error, response, body) {
    const parsedBody = JSON.parse(body);
    console.log(parsedBody[0]);
});