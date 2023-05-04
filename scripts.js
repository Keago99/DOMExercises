
const firstDiv = document.createElement('div');
const para = document.createElement('p');
const body = document.querySelector('body');

firstDiv.classList.add("firstDiv");
para.innerHTML = "Hey I'm red!";
para.style.cssText = 'color: red';

body.appendChild(firstDiv);
firstDiv.appendChild(para);

