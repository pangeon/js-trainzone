// DOC LINK - https://ramdajs.com/docs/

const $R = require('../../../lib/node_modules/ramda');
function naturalNumArray(tableSize) {
    var array = [];
    for (let i = 0; i <= tableSize; i++) {
        array[i] = i;
    }
    return array;
}
console.log(naturalNumArray(100));
console.log($R.sum(naturalNumArray(100)));