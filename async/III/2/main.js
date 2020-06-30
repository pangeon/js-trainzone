var thunkOfDiamond = () => console.log('mining diamond');

thunkOfOre = (mineral, callback) => {
    setTimeout(() => {
        callback('mining ' + mineral);
    }, 2000);
}
var dropIronThunk = (callback) => {
    thunkOfOre('diamond', callback);
}

dropIronThunk((result) => {
    console.log(result);
}); 