var programmingLanguages = [
    'C++', 'Java', 'Python', 
    'Clojure', 'Haskell', 'C#',
    'JavaScript', 'PHP', 'Ruby', 'C'
];
programmingLanguages.sort(() => Math.random() - 0.5)
var mainTag = document.querySelector('#main');

document.addEventListener('DOMContentLoaded', () => {
    programmingLanguages.forEach((language) => {
        var list = document.createElement('li');
        list.innerText = language;
        mainTag.appendChild(list);
    });
    var header = document.createElement('h1');
    header.innerText = 'The best programming language is ' + programmingLanguages[0];
    mainTag.appendChild(header);
});