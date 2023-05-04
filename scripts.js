

const body = document.querySelector('body');

const firstDiv = document.createElement('div');
const para = document.createElement('p');
const blueHeading = document.createElement('h3');

firstDiv.classList.add("firstDiv");

para.innerHTML = "Hey I'm red!";
para.style.cssText = 'color: red';

blueHeading.classList.add("blueHead");
blueHeading.style.cssText = 'color: blue';
blueHeading.innerHTML = "I'm a blue H3";


body.appendChild(firstDiv);
firstDiv.appendChild(para);
firstDiv.appendChild(blueHeading);

