const paragraph = document.getElementById("demo");
const fruits = ['apple', 'banana', 'orange', 'grape'];

fruits.push('strawberry', 'watermelon');
let fLen = fruits.length;

let text = '<ul id="myList"> Fruits I love :)';

for (let i = 0; i < fLen; i++) {
    text += '<li id="listItem">' + fruits[i] + '</li>';  // x += y is the same as x = x + y
    console.log(i);
}

text += '</ul>'
console.log(text);
paragraph.innerHTML += text;