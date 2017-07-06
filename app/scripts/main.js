$(document).ready(function () {

  // Переменные
  var $navTrigger = $('.nav-trigger');
  var $mobileMenu = $('.mobile-menu');
  var $outWrapper = $('.out');
  var $header = $('.js-header');
  var headerHeight = $header.outerHeight();

  // Бургер меню на мобильном

  // Animate On Scroll (AOS.JS)
  AOS.init({
    once: true,
    duration: 900
  });

  $navTrigger.on('click', function(e) {
    e.preventDefault();
    $navTrigger.find('span').toggleClass('js-active');
    $mobileMenu.toggleClass('js-active');
    $outWrapper.toggleClass('js-active');
  });

  $('.delivery-link-animated').hover(function () {
    $(this).addClass('js-active');
  });

  function addPadding(headerHeight, $wrapper) {
    $wrapper.css('padding-top', headerHeight)
  }

  // Добавляем паддинг для контента
  addPadding(headerHeight, $outWrapper);

  $(window).on('resize', function () {
    var headerHeight = $('.js-header').outerHeight();
    addPadding(headerHeight, $outWrapper);
  });
  $('.js-line').each(function (idx, path) {
    console.log(path.getTotalLength());
  });

  $('.gallery-slider').swiper({
    pagination: '.gallery-slider .swiper-pagination'
  });
});
