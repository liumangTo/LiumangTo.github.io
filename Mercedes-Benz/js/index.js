$(document).ready(function(){
	$('#home_page').css({
		'width':innerWidth,
		'height':innerHeight
	});
	$('.page').css({
		'width':innerWidth,
		'height':innerHeight
	});
	document.onmousewheel =roll;
	document.addEventListener('DOMMouseScroll',roll);
	function roll(e) {
		var flag = true;
		 if (e.wheelDelta) {
            flag = e.wheelDelta > 0 ? true : false;
        } else {
            flag = e.detail < 0 ? true : false;
        }
       if (flag) {
       	$("#home_page").slideDown("slow");
           	console.log(2)
        } else {
            $("#home_page").slideUp("slow");
            console.log(1)
        }
	}
});