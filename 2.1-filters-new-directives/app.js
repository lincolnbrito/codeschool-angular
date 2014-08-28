(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod1full01',
					thumb: 'http://placehold.it/500x500&text=prod1thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod1full02',
					thumb: 'http://placehold.it/500x500&text=prod1thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veritatis ex cum voluptatibus ipsam officiis nobis, alias cumque vitae aliquid quas odit, sunt, illo dolore. Impedit quia ad accusamus cupiditate!',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'http://placehold.it/350x150&text=prod2full01',
					thumb: 'http://placehold.it/500x500&text=prod2thumb01'
				},
				{
					full: 'http://placehold.it/350x150&text=prod2full02',
					thumb: 'http://placehold.it/500x500&text=prod2thumb02'
				},
			]
		},
	];

})();