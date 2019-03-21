"use strict";

/**
 * The CatPic object
 */
function CatPicObj(name, url) {
	this.name = name;
	this.url = url;
	this.clickCount = 0;
}

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