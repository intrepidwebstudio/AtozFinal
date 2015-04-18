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
				$('#header').show();
				}
				if (swiperParent.activeIndex == 0){
				$('#header').hide();
				}  
				
		  }
		})




$('.swiper-nested').each(function(){
	var swipernested = $(this).swiper({
		mode:'vertical',
		scrollContainer: true,
		mousewheelControl: true,
		scrollbar: {
			container:$(this).find('.swiper-scrollbar')[0]
		}
	})
	$(".scrolltop").click(function() {					  
		swipernested.swipeTo(0);
	})
	$(".trigger").click(function(){
		function fixheighttrigger()
		{
			swipernested.reInit();
			setTimeout(fixheighttrigger, 1000);
		}
		setTimeout(fixheighttrigger, 1000);	
	});
	$(".trigger_blog").click(function(){
		function fixheighttoogle()
		{
			swipernested.reInit();
			setTimeout(fixheighttoogle, 1000);
		}
		setTimeout(fixheighttoogle, 1000);
	});
	$(".tabsmenu li").click(function(){
		function fixheight()
		{
			swipernested.reInit();
			setTimeout(fixheight, 1000);
		}
        setTimeout(fixheight, 1000);
	});
	$("#loadMore").click(function(){
		function fixheightposts()
		{
			swipernested.reInit();
			setTimeout(fixheightposts, 1000);
		}
        setTimeout(fixheightposts, 1000);
	});
	
	$(".post_details_page1 li").hide();
	$(".posts1 li div span.detail").click(function(){
	
		p_ID = this.id;
		
		$(".post_details_page1").find("li").each(function() { 
			if(this.id == p_ID)
			{
				$(".posts_archive_page1").hide(); 
				var detailspostid = $(".post_details_page1 li#" + this.id);
				detailspostid.show();
				swipernested.reInit();
				swipernested.swipeTo(0);
				$('.backtoblog').click(function(){
					 detailspostid.hide();
					 $(".posts_archive_page1").show();
					 swipernested.reInit();
				});	
			}
		});
	
	});

	
})

//Scroll Containers
$('.swiper-nested').each(function(){
	
	$(".post_details_page1 li").hide();
	$(".posts1 li div span.detail").click(function(){
	
		p_ID = this.id;
		
		$(".post_details_page1").find("li").each(function() { 
			if(this.id == p_ID)
			{
				$(".posts_archive_page1").hide(); 
				var detailspostid = $(".post_details_page1 li#" + this.id);
				detailspostid.show();
				swipernested.reInit();
				swipernested.swipeTo(0);
				$('.backtoblog').click(function(){
					 detailspostid.hide();
					 $(".posts_archive_page1").show();
					 swipernested.reInit();
				});	
			}
		});
	
	});

	
})

$('.gohome').click(function(){
 swiperParent.swipeTo(0);
});
jQuery(function($) {
$("#CommentForm").validate({
submitHandler: function(form) {
ajaxContact(form);
return false;
}
});
$(".swipebox").swipebox();
});


$(function() {
	
$('#tabsmenu').tabify();
$(".videocontainer").fitVids();

$(".post_more").click(function(){
	$(this).toggleClass("activep").next().slideToggle("slow");
	return false;
});


});



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



