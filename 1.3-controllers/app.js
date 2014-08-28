(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
	};

})();