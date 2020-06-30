const IT_subject = {
    name: 'functional programming in Clojure',
    level: 'medium',
    tutor: 'Kondrad Grzanek' 
}
convertToUpperCase = (string) => string.toUpperCase();

function objectMapper(arg_function, arg_object) {
    var new_object = {};
    var object_keys = Object.keys(arg_object)
    for(let key of object_keys) {
        new_object[key] = arg_function(arg_object[key])
    }
    return new_object; 
}
var result = objectMapper(convertToUpperCase, IT_subject);
console.log(result);
console.log(IT_subject);