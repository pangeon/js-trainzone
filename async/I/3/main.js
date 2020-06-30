var software = [];

print = () => {
    if(software.length == 4) {
        console.log(software);
    }
}
timeRandom = (duration) => {
    return Math.random * 1000 * duration;
} 
addGame = (newGame) => {
    software.push(newGame);
    print();
} 
addProgram = (newProgram) => {
    software.push(newProgram);
    print();
} 
setTimeout(() => {
    addGame('GTA V');
    addGame('Need for Speed');
}, Math.random() * 3000); 
setTimeout(() => {
    addProgram('Photoshop');
    addProgram('Microsoft Word');
}, Math.random() * 3000); 