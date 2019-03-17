"use strict";

let catpicElm = document.getElementById('catpic')

catpicElm.addEventListener('click', function() {
	let countElm = document.getElementById('click-count');
	let clickCounter = parseInt(countElm.innerText) + 1;
	countElm.innerText = clickCounter + "";
}, false);

let cat2picElm = document.getElementById('cat2pic')

cat2picElm.addEventListener('click', function() {
	let countElm = document.getElementById('click-count-cat2');
	let clickCounter = parseInt(countElm.innerText) + 1;
	countElm.innerText = clickCounter + "";
}, false);
