"use strict"
$(function(){
	let $grid = $('.grid');
	let vacType = ['Sport and Activity', 'Wellnes and Health', 'Extreme Sports and Expeditions', 'Games', 'Culture and Education', 'Relaxation', 'Travelling'];
	let query = [];
	let amount = 8;
	function create(){
		$grid.html('');
		for (let i = 0; i < 3; i++)
			for (let i = 0; i < 3; i++){
				let rand = Math.random();
				let str = '<div'
				if (rand > 0.7 && i < 2){
					str += ' class="grid__fat"';
					i++;
				}
				str += '>';
				$grid.append(str);
			}
	}
	create();
	
	

	
	

	var keyP = '2737229-d77c828bc96e9964645663545';

	function searchImg(word){
	
	
	let $div = $('.grid div');
	for (let i = 0; i < $div.length; i++){
		let rand = Math.random() * vacType.length >> 0;
		$.getJSON('http://pixabay.com/api/?key=' + keyP + '&q=' + word + '&image_type=photo&per_page=9', function(r){
			$div.eq(i).css('background-image', 'url('+r.images[0].imageurl+')')
					  .html(vacType[rand]);
				console.log(r.images[0])		
		});
	};
	$('.search__button').click(function(){
		create();
		let $div = $('.grid div');
		$.getJSON('http://pixabay.com/api/?key='+$('.search__input').val()+'&amount='+$div.length,function(r){
			for(let i = 0; i < $div.length; i++)
				$div.eq(i).css('background-image', 'url('+r.images[i].imageurl+')')
			$div.html($('input').val());
		});
	});	
	
	
});