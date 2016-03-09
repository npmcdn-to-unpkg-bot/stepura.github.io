$(document).ready(function() {
    $('#pagesection').fullpage({
    	sectionSelector: '.pagesection__item',
    	scrollingSpeed: 1000,
    	navigation: true,
    	navigationTooltips: ['свадебное фото', 'портреты', 'love story']
    });
  });

$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-item',
  percentPosition: true,
  gutter: 0
})

var amountScrolled = 200;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top, a.simple-back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});
