function dateBirth() {
    var date = new Date();
    console.log(date.getFullYear() - this.age);
}

var person = {
    get name() {
        return this._name_;
    },
    set name(name) {
        this._name_ = name;
    },
    get surname() {
        return this._surname_;
    },
    set surname(surname) {
        this._surname_ = surname;
    },
    get age() {
        return this._age_;
    },
    set age(age) {
        this._age_ = age;
    },
    description : function() {
        console.log(this.name + " " + this.surname + " " + this.age);
    }

};
person.name = 'Agnieszka';
person.surname = 'Lasota';
person.age = 47;

person.description();
dateBirth.call(person);

