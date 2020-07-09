var $REQUEST = require('../../../lib/node_modules/request');;

function printFromJSON(...text) {
    text.forEach(
        element => console.log(JSON.parse(element)[0])
    );
}
function print(text) {
    console.log(text);
}
const Benchmark = {
    'start': () => console.time('time:'),
    'stop': () => console.timeEnd('time:')
}
Object.freeze(Benchmark);

const WebResource = {
    post_link: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=link',
    post_title: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=title',
    post_date: 'http://jeti.org.pl/wp-json/wp/v2/posts?_fields=date'
}
Object.freeze(WebResource);

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
        Benchmark.start();
        var promisePostLink = getResource(WebResource.post_link);
        var promisePostTitle = getResource(WebResource.post_title);
        var promisePostDate = getResource(WebResource.post_date);
        var [op_1, op_2, op_3] = await Promise.all
        ([
            promisePostLink,
            promisePostTitle,
            promisePostDate
        ]);
        printFromJSON(op_1, op_2, op_3);
        Benchmark.stop();
    } catch(error) {
        print(error);
    } 
}
getData();





