$('.header__search-form-input, .media__newsletter-form-input').focus(function() {
  $(this).data('placeholder', $(this).attr('placeholder'))
  $(this).attr('placeholder', '');
});

$('.header__search-form-input, .media__newsletter-form-input').blur(function() {
  $(this).attr('placeholder', $(this).data('placeholder'));
});

$('.media__slider').owlCarousel({
  loop: true,
  nav: true,
  items: 1,
  autoPlay: true,
  navText: false
})

$('.features__slider').owlCarousel({
  loop: true,
  nav: true,
  navText: false,
  dots: false,
  autoPlay: true,
  pagination: false,
  items: 3,
  margin: 45
})

$('.partners__slider').owlCarousel({
  loop: true,
  nav: true,
  navText: false,
  dots: false,
  autoPlay: true,
  pagination: false,
  autoWidth: true,
  items: 5,
  margin: 60
})
