var $REQUEST = require('../../../lib/node_modules/request');

$REQUEST('https://jsonplaceholder.typicode.com/users/1', 
(error, reponse, body) => {
    console.log(error);
    console.log(body);
});

