var person = {
    name : 'Agnieszka',
    surname: 'Lasota',
    age : 47,
    $faith : 'evangelical'
};

function defineKey(keyName) {
    return "$" + keyName;
}

person['name'] = 'Sylwia'; 
person.age = 20;

console.log(person['name']);
console.log(person.age);
console.log(person[defineKey('faith')]);