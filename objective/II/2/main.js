var person = {
   get name() {
       return this._name_;
   },
   set name(name) {
       this._name_ = name;
   }

};
person.name = 'Agnieszka';
Object.freeze(person);
person.name = 'Sylwia';

console.log(typeof person.name);
console.log(typeof (person.name * 2));
console.log(person.name * 2);
console.log(person.name);

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "_name_"));
