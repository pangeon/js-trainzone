function* nextRandom() {
    while(true) {
        yield Math.floor(Math.random() * 100);
    }
}
function print(text) {
    console.log(text);
}
function createTabRandom(count) {
    let iterator = nextRandom();
    let i = 0;
    let tabRandoms = [];
    while(i <= count) {
        tabRandoms[i] = iterator.next().value;
        i++;
    }
    return tabRandoms;
}
print(createTabRandom(1000));