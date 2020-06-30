const country = Object.freeze
({
    shortcut: 'PL',
    population: 
    {
        Mazowieckie: 5.385 * 10**7,
        Łódzkie: 2.466 * 10**6
    }
});
country.shortcut = 'GBR';
country.population.Mazowieckie = 5.385 * 10**6;
console.log(country);