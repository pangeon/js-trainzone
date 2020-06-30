var programmingLanguages = [];

print = (arg) => console.log(arg);
addProgrammingLang = (newLang) => programmingLanguages.push(newLang);

setTimeout(addProgrammingLang, Math.random() * 1000, 'C++'); 
setTimeout(addProgrammingLang, Math.random() * 1000, 'Java'); 
setTimeout(addProgrammingLang, Math.random() * 1000, 'Clojure'); 
setTimeout(addProgrammingLang, Math.random() * 1000, 'Haskell'); 
setTimeout(addProgrammingLang, Math.random() * 1000, 'PHP'); 
setTimeout(addProgrammingLang, Math.random() * 1000, 'JavaScript'); 
setTimeout(addProgrammingLang, Math.random() * 1000, 'Python');
setTimeout(addProgrammingLang, Math.random() * 1000, 'C#');
setTimeout(addProgrammingLang, Math.random() * 1000, 'C');
setTimeout(addProgrammingLang, Math.random() * 1000, 'Ruby');

setTimeout(print, 1000, programmingLanguages); 
setTimeout(() => {
    print('The best programming language is: ' + programmingLanguages[Math.floor(Math.random() * 10)]);
}, 2000); 