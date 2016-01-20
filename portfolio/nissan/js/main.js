$(document).ready(function () {
$('.image-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  onAfterChange: function(slickSlider, i) {

    $('.image-slider__nav .slick-slide').removeClass('slick-active');

    $('.image-slider__nav .slick-slide').eq(i).addClass('slick-active');
  }

});
$('.image-slider__nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.image-slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
//set active class to first slide
$('.image-slider__nav .slick-slide').eq(0).addClass('slick-active');

});