function Game(name, kind, origin, pubYear, multiplayerMod) {
    this.name = name;
    this.kind = kind;
    this.origin = origin;
    this.pubYear = pubYear;
    this.multiplayerMod = multiplayerMod;
};

const theSettlers = new Game('The Settlers', 'stategy', 'Germany', 1993, false);
console.log(theSettlers.constructor.name);

const theSettlers2 = Object.create(theSettlers);
theSettlers2.name = 'The Settlers 2';
theSettlers2.pubYear = 1996;
theSettlers2.multiplayerMod = true;
console.log(theSettlers2.constructor.name);

Game.prototype.getDescription = function() {
    console.log(this.name + ", " + this.kind + ", " + this.origin + ", " + this.pubYear);
}

// Object.setPrototypeOf(theSettlers, {});
theSettlers.getDescription();
theSettlers2.getDescription();

console.log(Game.prototype);
console.log(theSettlers2 instanceof Game);
console.log(Game.prototype.isPrototypeOf(theSettlers));