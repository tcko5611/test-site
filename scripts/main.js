var myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/icon1.jfif') {
	myImage.setAttribute('src', 'images/icon2.jfif');
    }
    else {
	myImage.setAttribute('src', 'images/icon1.jfif');
    }
}
// document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop poking me!');
// }
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
	setUserName();
    }
    else {
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
