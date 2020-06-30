var person = {
    name : 'Agnieszka',
    surname: 'Lasota',
    age : 47
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(person[key]);
    }
}
console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));