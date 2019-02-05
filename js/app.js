"use strict";

let catpicElm = document.getElementById('catpic')

catpicElm.addEventListener('click', function() {
	let countElm = document.getElementById('click-count');
	let clickCounter = parseInt(countElm.innerText) + 1;
	countElm.innerText = clickCounter + "";
}, false);
