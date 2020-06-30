"use strict"
function now() {
    return new Date().getFullYear();
}
function foreachKey(object) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}
var person = {
    name : 'Agnieszka',
    surname: 'Lasota',
    age : 47,
    showBirthYear: function() {
        return now() - this.age;
    }
};
Object.defineProperty(
    person, "age", 
    {
        writable: false,
        enumerable: false,
        configurable: true
    }
);
console.log(Object.getOwnPropertyDescriptor(person, "age"));
console.log(person.age);

foreachKey(person);

// Cannot assign to read only property 'age' of object '#<Object>'
// person.age = 37;