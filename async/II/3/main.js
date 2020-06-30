var programmingLanguages = [
    'C++', 'Java', 'Python', 
    'Clojure', 'Haskell', 'C#',
    'JavaScript', 'PHP', 'Ruby', 'C'
];
programmingLanguages.sort(() => Math.random() - 0.5)
var mainTag = document.querySelector('#main');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        createInnerHTMLList(programmingLanguages, 'li', mainTag);
        var theBestLanguage = 'The best programming language is ' + programmingLanguages[0];
        createInnerHTMLTag('h1', mainTag, theBestLanguage);
    }, 2000);
});

createInnerHTMLList = (data, htmlNode, parentTag) => {
    data.forEach((element) => {
        var listOfElements = document.createElement(htmlNode);
        listOfElements.innerText = element;
        parentTag.appendChild(listOfElements);
    });
}
createInnerHTMLTag = (tag, parentTag, text) => {
    var element = document.createElement(tag);
    element.innerText = text;
    parentTag.appendChild(element);
}