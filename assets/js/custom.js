(function ($) {
	
	"use strict";

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 130
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 130
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Home seperator
	if($('.home-seperator').length) {
		$('.home-seperator .left-item, .home-seperator .right-item').imgfix();
	}


	// Home number counterup
	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);




	var button = document.getElementById("myButton");
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];

	button.onclick = function() {
	modal.style.display = "block";
	}

	span.onclick = function() {
	modal.style.display = "none";
	}

	window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
	}





////////////////




var button2 = document.getElementById("myButtonaa");
var modal1 = document.getElementById("myModal1");
var span1 = document.getElementsByClassName("close1")[0];

button2.onclick = function() {
modal1.style.display = "block";
}

span1.onclick = function() {
modal1.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal1) {
	modal1.style.display = "none";
}
}



var button3 = document.getElementById("myButtona2");
var modal2 = document.getElementById("myModal2");
var span2 = document.getElementsByClassName("close2")[0];

button3.onclick = function() {
modal2.style.display = "block";
}

span2.onclick = function() {
modal2.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal2) {
	modal2.style.display = "none";
}
}

var button4 = document.getElementById("myButtona3");
var modal3 = document.getElementById("myModal3");
var span3 = document.getElementsByClassName("close3")[0];

button4.onclick = function() {
modal3.style.display = "block";
}

span3.onclick = function() {
modal3.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal3) {
	modal3.style.display = "none";
}
}

var button5 = document.getElementById("myButtona4");
var modal4 = document.getElementById("myModal4");
var span4 = document.getElementsByClassName("close4")[0];

button5.onclick = function() {
modal4.style.display = "block";
}

span4.onclick = function() {
modal4.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal4) {
	modal4.style.display = "none";
}
}


var button6 = document.getElementById("myButtona5");
var modal5 = document.getElementById("myModal5");
var span5 = document.getElementsByClassName("close5")[0];

button6.onclick = function() {
modal5.style.display = "block";
}

span5.onclick = function() {
modal5.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal5) {
	modal5.style.display = "none";
}
}


var button7 = document.getElementById("myButtona6");
var modal6 = document.getElementById("myModal7");
var span6 = document.getElementsByClassName("close7")[0];

button7.onclick = function() {
modal6.style.display = "block";
}

span6.onclick = function() {
modal6.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal6) {
	modal6.style.display = "none";
}
}




var button8 = document.getElementById("myButtona7");
var modal7 = document.getElementById("myModal8");
var span7 = document.getElementsByClassName("close8")[0];

button8.onclick = function() {
modal7.style.display = "block";
}

span7.onclick = function() {
modal7.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal7) {
	modal7.style.display = "none";
}
}


var button9 = document.getElementById("myButtona8");
var modal8 = document.getElementById("myModal9");
var span8 = document.getElementsByClassName("close9")[0];

button9.onclick = function() {
modal8.style.display = "block";
}

span8.onclick = function() {
modal8.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal8) {
	modal8.style.display = "none";
}
}

