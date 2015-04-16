
//Scroll Containers
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
$(".toggle_container").hide();
$(".toggle_container_blog").hide();
$(".trigger").click(function(){
   $(this).toggleClass("active").next().slideToggle("slow");
	return false;
});
$(".trigger_blog").click(function(){
	$(this).toggleClass("activeb").next().slideToggle("slow");
	return false;
});
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



    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
