var software = [];

print = () => {
    if(software.length == 4 
        && software[0] != undefined
        && software[1] != undefined
        && software[2] != undefined
        && software[3] != undefined
        ) 
    {
        console.log(software);
    }
}
addGame = (newGame) => {
    if(software[3] == undefined) {
        software[3] = newGame
    } else {
        software[2] = newGame
    }
    print();
} 
addProgram = (newProgram) => {
    if(software[1] == undefined) {
        software[1] = newProgram
    } else {
        software[0] = newProgram
    }
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