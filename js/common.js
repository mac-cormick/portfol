$(document).ready(function() {

	$('.flexslider').flexslider({
		animation: 'fade',
		controlsContainer: '.flexslider'
	});

	$(".main-mnu a, .top").mPageScroll2id();

	$(".popform").magnificPopup();

	var $menu = $(".header-top");
  	$(window).scroll(function(){
    	if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
      	$menu.removeClass("default").addClass("fixed");
      } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
     $menu.removeClass("fixed").addClass("default");
    }
  });

  var $arrow = $(".top");
  	$(window).scroll(function(){
    	if ( $(this).scrollTop() > 100 && $arrow.hasClass("hidden") ){
      	$arrow.removeClass("hidden").addClass("visible");
      } else if($(this).scrollTop() <= 100 && $arrow.hasClass("visible")) {
     $arrow.removeClass("visible").addClass("hidden");
    }
  });


	$(".header-content h1").animated("fadeInDown", "fadeOutUp");
	$(".header-content p").animated("fadeInUp", "fadeOutDown");

	$(".text-wrap h4").animated("fadeInDown", "fadeOutUp");
	$(".text-wrap p").animated("fadeInRight", "fadeOutDown");

	$(".section-head h2").animated("fadeInDown", "fadeOutUp");
	$(".section-head h3").animated("fadeInUp", "fadeOutDown");

	$(".preim-wrap img").animated("flip", "fadeOutDown");

	$(".carousel-brand img").animated("flipInY", "fadeOutDown");

	$(".mamber-wrap img").animated("fadeInLeft", "fadeInLeft");

	$(".skills p").animated("fadeInRight", "fadeInRight");


	$(".skills").not(":first").hide();
	$(".navig .navelem").click(function() {
		$(".navig .navelem").removeClass("active").eq($(this).index()).addClass("active");
		$(".skills").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".mamber-wrap").not(":first").hide();
	$(".navig .navelem").click(function() {
		$(".navig .navelem").removeClass("active").eq($(this).index()).addClass("active");
		$(".mamber-wrap").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".carousel-brands").owlCarousel({
		loop: true,
		nav: true,
	});

	$("#portfolio_grid").mixItUp();

	$(".portfolio li").click(function() {
		$(".portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup_content").magnificPopup({type:"inline", midClick: true});

	$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
	});

	$(".main-mnu ul a").click(function() {
		$(".main-mnu").fadeOut(600);
		$(".toggle-mnu").toggleClass("on");
	});

});