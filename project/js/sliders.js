(function($){
    jQuery.fn.carousel1 = function(){
	
$(function() {
	var $item = $('.sliders__step__pic__item--1');
	var currItem = 0;
	$item.addClass('sliders__step__pic__item--1--hide')
		 .eq(currItem).removeClass('sliders__step__pic__item--1--hide');
	$('.sliders__step__button--1--left').on('click', function(){
	    var nextItem = (currItem + 1) % $item.length;
		$item.eq(nextItem).removeClass('sliders__step__pic__item--1--hide');
		$item.eq(currItem).addClass('sliders__step__pic__item--1--hide');
		currItem = nextItem;
	});	
	$('.sliders__step__button--1--right').on('click', function(){
	    var nextItem = (currItem - 1 + $item.length) % $item.length;
		$item.eq(nextItem).removeClass('sliders__step__pic__item--1--hide');
		$item.eq(currItem).addClass('sliders__step__pic__item--1--hide');
		currItem = nextItem;
	});			
});
 return this;   
};
})(jQuery);

$(function() {								
	$('.sliders__step--1').carousel1({
		wrap: 'circular'
	});
	
});


(function($){
    jQuery.fn.carousel2 = function(){
	
$(function() {
	var $item = $('.sliders__step__pic__item--2');
	var currItem = 0;
	$item.addClass('sliders__step__pic__item--2--hide')
		 .eq(currItem).removeClass('sliders__step__pic__item--2--hide');
	$('.sliders__step__button--2--left').on('click', function(){
	    var nextItem = (currItem + 1) % $item.length;
		$item.eq(nextItem).removeClass('sliders__step__pic__item--2--hide');
		$item.eq(currItem).addClass('sliders__step__pic__item--2--hide');
		currItem = nextItem;
	});	
	$('.sliders__step__button--2--right').on('click', function(){
	    var nextItem = (currItem - 1 + $item.length) % $item.length;
		$item.eq(nextItem).removeClass('sliders__step__pic__item--2--hide');
		$item.eq(currItem).addClass('sliders__step__pic__item--2--hide');
		currItem = nextItem;
	});			
});
 return this;   
};
})(jQuery);

$(function() {								
	$('.sliders__step--2').carousel2({
		wrap: 'circular'
	});
	
});


(function($){
    jQuery.fn.carousel3 = function(){
	
$(function() {
	var $item = $('.sliders__step__pic__item--3');
	var currItem = 0;
	$item.addClass('sliders__step__pic__item--3--hide')
		 .eq(currItem).removeClass('sliders__step__pic__item--3--hide');
	$('.sliders__step__button--3--left').on('click', function(){
	    var nextItem = (currItem + 1) % $item.length;
		$item.eq(nextItem).removeClass('sliders__step__pic__item--3--hide');
		$item.eq(currItem).addClass('sliders__step__pic__item--3--hide');
		currItem = nextItem;
	});	
	$('.sliders__step__button--3--right').on('click', function(){
	    var nextItem = (currItem - 1 + $item.length) % $item.length;
		$item.eq(nextItem).removeClass('sliders__step__pic__item--3--hide');
		$item.eq(currItem).addClass('sliders__step__pic__item--3--hide');
		currItem = nextItem;
	});			
});
 return this;   
};
})(jQuery);

$(function() {								
	$('.sliders__step--3').carousel3({
		wrap: 'circular'
	});
	
});