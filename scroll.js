console.log("hello")

$(function() {
	$('ul.nav a').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 70
		}, 1000);
		/*
		if you don't want to use the easing effects:
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		*/
		event.preventDefault();
	});
});
 //slider showtime
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

$('.openmodale').click(function (e) {
	e.preventDefault();
	$('.modale').addClass('opened');
});
$('.closemodale').click(function (e) {
	e.preventDefault();
	$('.modale').removeClass('opened');
});