
//Basic
let contentTag = document.getElementById('content');
console.log(contentTag.tagName);

let basicTag = document.querySelector('.basic');
console.log(basicTag.tagName);

let firstLi = document.querySelector('li');
console.log(firstLi.textContent);

let lastChild = document.querySelector('ul li:last-child'); 
//tulostaa ul -elementin sisässä olevan li-elementin last child
console.log(lastChild.textContent);

//Collections

//1.
let nodeNames = document.querySelectorAll('body *') //hakee kaikki bodyn sisältä. > välimerkillä vain suorat jälkeläiset.

for (node of nodeNames) {
    console.log(node.nodeName)
}

//2.
let pContent = document.querySelectorAll('article p')

for (text of pContent) {
    console.log(text.textContent)
}

//3.

let lis = document.querySelectorAll("ul>li");

for (li of lis) {
    li.textContent = "John Doe";
}

//4.

let elementName = document.querySelectorAll('#content *');

for (elem of elementName) {
    if(elem.textContent.length > 10) {
        console.log(elem.nodeName);
    }
}

/* if (elementText.length > 10) {
    for (text of elementName) {
        console.log(elementText)
    }
} */

let taulu = [1, 2, 3, 4, 5] // kätevää for:in käyttöä

for (num of taulu) {
    console.log(num)
}


