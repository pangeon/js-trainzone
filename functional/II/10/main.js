var compose = require('../../../lib/node_modules/compose-function');

split = (string) => string.split(" ");
arrSize = (arr) => arr.length;
multi = (number) => number ** 5;

var splitAndGetArrSize = compose(multi, arrSize, split);
console.log(splitAndGetArrSize('Agnieszka zbiera pomidory.'))