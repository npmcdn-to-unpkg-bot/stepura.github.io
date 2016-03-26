$(document).ready(function() {
    $('#pagesection').fullpage({
    	sectionSelector: '.pagesection__item',
    	scrollingSpeed: 1000,
    	navigation: true,
    	navigationTooltips: ['свадебная фотография', 'love story', 'портрет', 'студийная фотография']
    });
  });

//$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
//  itemSelector: '.grid-item',
  // use element for option
 // columnWidth: '.grid-item',
 // percentPosition: true,
  //gutter: 0
//})

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

$(window).load(function() {
var container = document.querySelector('.grid');
var msnry = new Masonry( container, {
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-item',
  percentPosition: true,
  gutter: 0
}).imagesLoaded(function() {
$('.grid').masonry('reload');
});
}); 


//Disable right click script III- By Renigade (renigade@mediaone.net)
//For full source code, visit http://www.dynamicdrive.com

var message="";
///////////////////////////////////
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

document.oncontextmenu=new Function("return false")