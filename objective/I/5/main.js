"use strict"
var person = {
    name : 'Agnieszka',
    surname: 'Lasota',
    age : 47,
    showBirthYear: function() {
        return new Date().getFullYear() - this.age;
    },
    getKeys: function(person) {
        for (const key in person) {
            if (person.hasOwnProperty(key)) {
                console.log(key);
            }
        }
    }
};
Object.defineProperty(
    person, "name", {
        writable: false
    }
);
var newPerson = Object.assign({}, person);
newPerson.name = "Sylwia";
console.log(newPerson.name + " " + newPerson.showBirthYear());