let game = {
    name: "The Settlers",
    kind: "strategy",
    origin: "Germany",
    pubYear: 1993,
    multiplayerMod: false
};

var newGame = Object.create(game);
console.log(newGame.name);