function now() {
    return new Date().getFullYear();
}

var person = {
    name : 'Agnieszka',
    surname: 'Lasota',
    age : 47,
    showBirthYear: function() {
        return now() - this.age;
    }
};
console.log(person.showBirthYear());