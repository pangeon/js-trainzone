var programmingLanguages = [];

print = (arg) => console.log(arg);
addProgrammingLang = (newLang) => programmingLanguages.push(newLang);
 
try {
    setTimeout(addProgrammingLang('C++'), 1000); 
    setTimeout(addProgrammingLang('Java'), 2000); 
    setTimeout(addProgrammingLang('Clojure'), 3000); 
    setTimeout(addProgrammingLang('Haskell'), 4000); 
    setTimeout(addProgrammingLang('Python'), 4000); 
    setTimeout(addProgrammingLang('PHP'), 5000); 
    setTimeout(addProgrammingLang('JavaScript'), 6000);

    setTimeout(print(programmingLanguages), 6000); 
} catch(error) {
    print(error.name);
    print(error.message);
}