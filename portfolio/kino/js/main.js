$(document).ready(function() {
  $('.infobox-search-box__search,.footer-search__input').focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder', '');
  });
  $('.infobox-search-box__search,.footer-search__input').blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
});

$('.image-slider').slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000
});

$('.content-slider').slick({
  fade: true,
  adaptiveHeight: true
});

$(".main-sidebar-image-gallery__item").fancybox({
  beforeShow: function() {
    var alt = this.element.find('img').attr('alt');
    this.inner.find('img').attr('alt', alt);
    this.title = alt;
  }
});


$(window).load(function() {
  $(".vertical-scroll-block").mCustomScrollbar();
});
