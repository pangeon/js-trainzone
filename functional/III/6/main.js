const country = 
{
    shortcut: 'PL',
    population: 
    {
        Mazowieckie: 5.385 * 10**6,
        Łódzkie: 2.466 * 10**6
    }
};
function changeCountryShortcut(country, shortcut) {
    return Object.assign({}, country, {shortcut: shortcut});
    //return country.shortcut = shortcut;
}
var england = changeCountryShortcut(country, 'UK');
console.log(country.shortcut);
console.log(england.shortcut);