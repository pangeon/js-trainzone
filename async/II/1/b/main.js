var programmingLanguages = [];

print = (arg) => console.log(arg);
addProgrammingLang = (newLang) => programmingLanguages.push(newLang);

printAndCall = (arg) => {
    return () => {
        console.log(arg);
    }
} 
addProgrammingLangAndCall = (newLang) => {
    return () => {
        programmingLanguages.push(newLang);
        print(newLang);
    }
} 
setTimeout(addProgrammingLangAndCall('C++'), 1000); 
setTimeout(addProgrammingLangAndCall('Java'), 2000); 
setTimeout(addProgrammingLangAndCall('Clojure'), 3000); 
setTimeout(addProgrammingLangAndCall('Haskell'), 4000); 
setTimeout(addProgrammingLangAndCall('Python'), 4000); 
setTimeout(addProgrammingLangAndCall('PHP'), 5000); 
setTimeout(addProgrammingLangAndCall('JavaScript'), 6000);

setTimeout(printAndCall(programmingLanguages), 6000); 
