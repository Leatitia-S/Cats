// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/chaton-gris-et-blanc-tout-mignon.jpg') {
    myImage.setAttribute ('src','images/chaton.jpg');
  } else {
    myImage.setAttribute ('src','images/chaton-gris-et-blanc-tout-mignon.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Entre ton nom de chat.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Tu kiff les chats, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Tu kiff les chats, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}