var thunkOfDiamond = () => console.log('mining diamond');

thunkOfOre = (mineral) => {
    return mineral
}
var dropIronThunk = () => console.log('mining ' + thunkOfOre('diamond'));

dropIronThunk(); 