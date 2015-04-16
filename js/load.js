$(document).ready(function () {
	$(".posts1 li").hide();	
    size_li = $(".posts1 li").size();
    x=9;
    $('.posts1 li:lt('+x+')').show();
	
    $('#loadMore').click(function () {
        x= (x+1 <= size_li) ? x+1 : size_li;
        $('.posts1 li:lt('+x+')').show();
        if(x == size_li){
            $('#loadMore').hide();
			$('#showLess').show();
        }
    });
	
		var $ = jQuery.noConflict();
		$(function(){
		$('.form').find('input, select, textarea').on('touchstart mousedown click', function(e){
		e.stopPropagation();
		})
		})
		
		var swiperParent = new Swiper('.swiper-parent',{
		//pagination: '.pagination',
		mode: 'horizontal',
		noSwiping: true,
		paginationClickable: true,
		allowSwipeToPrev:false,
		allowSwipeToNext:false,
		onSlideChangeEnd : function() {
		//Do something when you touch the slide
		if (swiperParent.activeIndex != 0){
		$('#header').animate({'top':'0px'},400);
		}
		if (swiperParent.activeIndex == 0){
		$('#header').animate({'top':'-100px'},400);
		}  
		}
		})


	
});
