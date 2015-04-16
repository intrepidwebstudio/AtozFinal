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
	

	
});


