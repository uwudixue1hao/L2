// JavaScript Document
function scrollShow(index){
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		var indexTop = $('#'+index).offset().top;
		if (scrollTop > indexTop - 101) {
			var floatA = $('#leftFixed').find('a[href="#'+index+'"]');
			floatA.parent('li').addClass('firstli');
			floatA.parent('li').siblings().removeClass('firstli');
		}
	}); 
}