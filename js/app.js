"use strict";

//document.body.innerHTML = '';
//document.body.style.background = "white";

/**
 * The CatPic object
 */
function CatPicObj(name, url) {
	this.name = name;
	this.url = url;
	this.clickCount = 0;
}

// Create a list of cat pic objects
const catPicObjList = [
    new CatPicObj('gary', 'img/cat.jpg'),
    new CatPicObj('robbie', 'img/cat2.jpg')
];

// The model
let model = {
	currentCat: null,
	cats: [
	    new CatPicObj('gary', 'img/cat.jpg'),
	    new CatPicObj('robbie', 'img/cat2.jpg')
	]
};

// The controller
let controller = {
	init: function() {
		// Set the cat to display to the first cat
		model.currentCat = model.cats[0];
		// Initialize the views
		catListView.init();
		catView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

    setCurrentCat: function(cat) {
    	model.currentCat = cat;
    },

    incrementCounter: function() {
    	model.currentCat.clickCount++;
    	catView.render();
    }
};

let catView = {
	init: function() {
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		this.catImageElem.addEventListener('click', function(){
			controller.incrementCounter();
		});

		this.render();
	},

	render: function() {
		let currentCat = controller.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.url;
	}
};

let catListView = {
	init: function() {
		this.catListElem = document.getElementById('cat-list');
		this.render();
	},

	render: function() {
		let cat, elem, i;
		let cats = controller.getCats();

		this.catListElem.innerHTML = '';
		for (i = 0; i < cats.length; i++) {
			cat = cats[i];
			elem = document.createElement('li');
			elem.textContent = cat.name;
			elem.addEventListener('click', (function(catCopy) {
				return function() {
					controller.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
};

controller.init();

// Create the top level cat name list
// let catNameListDiv = document.createElement("div");
// catNameListDiv.setAttribute("class", "catNameListDiv");
// let catNameListContainer = document.createElement("div");
// catNameListContainer.setAttribute("class", "container");
// let catNameListRow = document.createElement("div");
// catNameListRow.setAttribute("class", "row justify-content-center");

// // Add the cat names to the cat name list
// for (let catPicObj of catPicObjList) {
// 	let catPicCol = document.createElement("div");
// 	catPicCol.setAttribute("class", "col-sm");
// 	let catPicBtn = document.createElement("button");
// 	catPicBtn.setAttribute("type", "button");
// 	catPicBtn.setAttribute("class", "btn btn-info");
// 	catPicBtn.innerText = catPicObj.name.toUpperCase();
// 	catPicBtn.addEventListener("click", (function (catPicObj) {
// 		return function () {
// 			displayCatPic(catPicObj);
// 		}
// 	})(catPicObj));
// 	catPicCol.appendChild(catPicBtn);
// 	catNameListRow.appendChild(catPicCol);
// }
// catNameListContainer.appendChild(catNameListRow);
// catNameListDiv.appendChild(catNameListContainer);

// document.body.appendChild(catNameListDiv);

// /**
//  * Create the elements for the pic display area.
//  */
// let catDisplayDiv = document.createElement("div");
// catDisplayDiv.setAttribute("class", "container");
// catDisplayDiv.setAttribute("style", "margin-top:20px;");
// let catDisplayRow = document.createElement("div");
// catDisplayRow.setAttribute("class", "row justify-content-center");
// let catNamePicCol = document.createElement("div");
// catNamePicCol.setAttribute("class", "col-md-6");
// let clickCountCol = document.createElement("div");
// clickCountCol.setAttribute("class", "col-md-6");
// clickCountCol.setAttribute("id", "clickCount");

// let catNamePicContainer = document.createElement("div");
// catNamePicContainer.setAttribute("class", "conatiner");
// let catNamePicContainerRow = document.createElement("div");
// catNamePicContainerRow.setAttribute("class", "row justify-content-center");
// let catNameDiv = document.createElement("div");
// catNameDiv.setAttribute("class", "col-md-4 catNameDiv");
// catNameDiv.setAttribute("id", "catName");
// let catPicDiv = document.createElement("div");
// catPicDiv.setAttribute("class", "col-md-4");
// catPicDiv.setAttribute("id", "catPic");

// catNamePicContainerRow.appendChild(catNameDiv);
// catNamePicContainerRow.appendChild(catPicDiv);
// catNamePicContainer.appendChild(catNamePicContainerRow);
// catNamePicCol.appendChild(catNamePicContainer);
// catDisplayRow.appendChild(catNamePicCol);
// catDisplayRow.appendChild(clickCountCol);
// catDisplayDiv.appendChild(catDisplayRow);
// document.body.appendChild(catDisplayDiv);

// /**
//  * Display the cat pic object in the cat pic area
//  */
// function displayCatPic(catPicObj) {
// 	let catNameElement = document.getElementById("catName");
// 	catNameElement.innerText = catPicObj.name;

// 	let catPicElement = document.getElementById("catPic");
// 	if (catPicElement.children.length > 0) {
// 		catPicElement.removeChild(catPicElement.firstElementChild);
// 	}
// 	let catPicImg = document.createElement("img");
// 	catPicImg.setAttribute("src", catPicObj.url);
// 	catPicElement.appendChild(catPicImg);
// 	catPicImg.addEventListener('click', (function (catPicObj) {
// 		return function () {
// 			console.log("Updating Counter");
// 			updateClickCounter(catPicObj);
// 		}
// 	})(catPicObj));
// 	catPicElement.appendChild(catPicImg);

// 	let clickCountElement = document.getElementById("clickCount");
// 	clickCountElement.innerText = catPicObj.clickCount;
// }

// function updateClickCounter(catPicObj) {
// 	catPicObj.clickCount += 1;
// 	let clickCountElement = document.getElementById("clickCount");
// 	clickCountElement.innerText = catPicObj.clickCount;
// 	console.log(catPicObj.clickCount);
// }