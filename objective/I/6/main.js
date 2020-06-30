var person = {
    name : 'Agnieszka',
    surname: 'Lasota',
    age : 47
};
Object.preventExtensions(person);
person.name = 'Sylwia';
delete person.age;
console.log(person);
console.log(Object.isExtensible(person));

Object.seal(person);
delete person.surname;
console.log(person);
console.log(Object.isSealed(person));

Object.freeze(person);
console.log(Object.getOwnPropertyDescriptor(person, "name"));