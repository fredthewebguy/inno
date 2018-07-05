// smooth scrolling
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1400);
            return false;
        }
    }
});  


// scroll back to top
$("#back-top").hide();
	
$(function () {
	// if user scrolls past specific point
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
});

// scroll body to 0px on click
$('#back-top a').click(function () {
	$('body,html').animate({
		scrollTop: 0
		}, 400);
		return false;
	});
});

// make nav menu sticky on scroll
$(window).scroll(function() {
if ($(this).scrollTop() > 50){  
    $('nav.primary-menu').addClass("sticky");
	$('.top').addClass("hide");
  }
  else{
    $('nav.primary-menu').removeClass("sticky");
	$('.top').removeClass("hide");
  }
});

// toggle search
$('.top .icon-search').click(function(){
    $('.overlay').fadeIn();
	$('.search-panel').toggleClass('active');
	$('.search-panel input').focus();
    return false;
});

// close search panel
$('.search-panel .close-search').click(function(){
    $('.overlay').fadeOut();
	$('.search-panel').toggleClass('active');
    return false;
});

// toggle mobile menu
$('.icon-menu').click(function(){
	$('.mobile-menu').slideToggle();
    return false;
});

//open external links automatically in new tab
$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});
