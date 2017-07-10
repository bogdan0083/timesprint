$(document).ready(function () {

  // Переменные
  var $navTrigger = $('.nav-trigger');
  var $mobileMenu = $('.mobile-menu');
  var $outWrapper = $('.out');
  var $header = $('.js-header');
  var headerHeight = $header.outerHeight();


  // Animate On Scroll (AOS.JS)
  AOS.init({
    duration: 900
  });

  // Бургер меню на мобильном
  $navTrigger.on('click', function(e) {
    e.preventDefault();
    $navTrigger.find('span').toggleClass('js-active');
    $mobileMenu.toggleClass('js-active');
    $outWrapper.toggleClass('js-active');
  });

  $('.delivery-link-animated').hover(function () {
    $(this).addClass('js-active');
  });

  // function addPadding(headerHeight, $wrapper) {
  //   $wrapper.css('padding-top', headerHeight)
  // }
  //
  // // Добавляем паддинг для контента
  // addPadding(headerHeight, $outWrapper);

  $(window).on('resize', function () {
    // var headerHeight = $('.js-header').outerHeight();
    // addPadding(headerHeight, $outWrapper);
  });

  $('.gallery-slider').swiper({
    pagination: '.gallery-slider .swiper-pagination',
    speed: 1000
  });

  $('.reviews-slider').swiper({
    pagination: '.reviews-slider .swiper-pagination',
    slidesPerView: 3,
    nextButton: '.reviews .arr-right',
    prevButton: '.reviews .arr-left',
    speed: 1000,
    breakpoints: {
      600: {
        slidesPerView: 1
      },
      900: {
        slidesPerView: 2
      },
      1100: {
        slidesPerView: 2
      }
    }
  });

  $('.book-details-slider').swiper({
    pagination: '.book-details .swiper-pagination',
    nextButton: '.book-details .arr-right',
    prevButton: '.book-details .arr-left',
    speed: 1000,
    loop: true
  });
  // Окрашиваем в белый цвет прозрачный футер

  if ($(window).width() > 900) {
    var hdrIsFixed = false;
    $(window).on('scroll', function (e) {
      if ($(window).scrollTop() < 240 && hdrIsFixed) {
        $header.removeClass('header-fixed');
        $outWrapper.css('padding-top', 0);
        hdrIsFixed = false;
      } else if ($(window).scrollTop() > 240 && !hdrIsFixed){
        $header.addClass('header-fixed');
        $outWrapper.css('padding-top', $('.js-header').outerHeight());
        hdrIsFixed = true;
      }
    });
  }

  // magnificPopup
  $('.popup-link').magnificPopup({type: 'inline', showCloseBtn: false, removalDelay: 300, mainClass: 'mfp-move-horizontal'});

  $('.js-select').selectize();

  // переключение табов
  var $tabs = $('.tab-pane');

  var tabsSliderSettings = {
    onSlideChangeStart: function (swiper) {
      var idx = swiper.realIndex;
      $('.tabs')
        .find('.tab-pane')
        .removeClass('js-active')
        .eq(idx)
        .addClass('js-active');
    },
    autoHeight: true,
    noSwiping: true,
    speed: 1500
  };

  var slider = null;

  // Срабатывает при клике на таб
  function onTabPaneClick(e) {
    e.preventDefault();
    var $target = $(this);
    var idx = $target.index();
    var $parent = $target.closest('.tabs');
    var $tabs = $parent.find('.tab-pane');
    var sliderName = $( $parent.data('slider') );
    $tabs.removeClass('js-active');
    $target.addClass('js-active');
    $(sliderName).slideDown();
    if (slider) {
      slider.slideTo(idx);
    } else {
      slider = new Swiper(sliderName, tabsSliderSettings);
      slider.slideTo(idx);
    }
  }

  $tabs.click(onTabPaneClick);

  $('.js-read-testimonial').click(function (e) {
    e.preventDefault();
    $(this).next().show();
    $(this).remove();
  });


  // Кастомный аккордеон
  var $accordionTrigger = $('.js-accordion-trigger');
  $accordionTrigger.click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('js-active');
    $this.next().slideToggle();
  });
});
