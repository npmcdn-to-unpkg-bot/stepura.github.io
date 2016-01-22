$(document).ready(function() {
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
    autoplay: true,
    navText: false
  });

  $('.features__slider').owlCarousel({
    loop: true,
    nav: true,
    navText: false,
    dots: false,
    autoplay: true,
    pagination: false,
    items: 3,
    margin: 45
  });

  $('.partners__slider').owlCarousel({
    loop: true,
    nav: true,
    navText: false,
    dots: false,
    autoplay: true,
    pagination: false,
    autoWidth: true,
    items: 5,
    margin: 60
  });

  $(".footer__tab-content").hide();
  $(".footer__tabs li:first").addClass("active").show();
  $(".footer__tab-content:first").show();
  $(".footer__tabs li").click(function() {
    $(".footer__tabs li").removeClass("active");
    $(this).addClass("active");
    $(".footer__tab-content").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

});