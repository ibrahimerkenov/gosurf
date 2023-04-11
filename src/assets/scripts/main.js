$(function(){

	$('.header__slider').slick({
		asNavFor: '.slider-dotshead',
		infinite: true,
		fade: true,
		prevArrow: '<button class="slider-arrows slider-arrows__left"><img src="../img/svg/arrows-left.svg" alt="Arrow Left" /></button>',
		nextArrow: '<button class="slider-arrows slider-arrows__right"><img src="../img/svg/arrows-right.svg" alt="Arrow Right" /></button>'
	});

	$('.slider-dotshead').slick({
		asNavFor: '.header__slider',
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: false,
		responsive: [
			{
				breakpoint: 992,
				settings: "unslick"
			}
		]
	});

	$('.slider-map').slick({
		asNavFor: '.surf-slider',
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					variableWidth: true,
					centerMode: true
				}
			}
		]
	});

	$('.surf-slider').slick({
		infinite: true,
		asNavFor: '.slider-map',
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		prevArrow: '<button class="slider-arrows slider-arrows__left"><img src="../img/svg/arrows-left.svg" alt="Arrow Left" /></button>',
		nextArrow: '<button class="slider-arrows slider-arrows__right"><img src="../img/svg/arrows-right.svg" alt="Arrow Right" /></button>',
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					variableWidth: true,
					centerMode: true
				}
			}
		]
	});

	$('.holder-slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<button class="slider-arrows slider-arrows__left"><img src="../img/svg/arrows-left.svg" alt="Arrow Left" /></button>',
		nextArrow: '<button class="slider-arrows slider-arrows__right"><img src="../img/svg/arrows-right.svg" alt="Arrow Right" /></button>'
	});

	$('.shop-slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<button class="slider-arrows slider-arrows__left"><img src="../img/svg/arrows-left.svg" alt="Arrow Left" /></button>',
		nextArrow: '<button class="slider-arrows slider-arrows__right"><img src="../img/svg/arrows-right.svg" alt="Arrow Right" /></button>'
	});

	$('<div class="quantity-nav"><div class="quantity-button quantity-down"><img src="../img/svg/minus.svg" alt="Minus" /></div><div class="quantity-button quantity-up"><img src="../img/svg/plus.svg" alt="Plus" /></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
	  var spinner = $(this),
	    input = spinner.find('input[type="number"]'),
	    btnUp = spinner.find('.quantity-up'),
	    btnDown = spinner.find('.quantity-down'),
	    min = input.attr('min'),
	    max = input.attr('max');

	  btnUp.click(function() {
	    var oldValue = parseFloat(input.val());
	    if (oldValue >= max) {
	      var newVal = oldValue;
	    } else {
	      var newVal = oldValue + 1;
	    }
	    spinner.find("input").val(newVal);
	    spinner.find("input").trigger("change");
	  });

	  btnDown.click(function() {
	    var oldValue = parseFloat(input.val());
	    if (oldValue <= min) {
	      var newVal = oldValue;
	    } else {
	      var newVal = oldValue - 1;
	    }
	    spinner.find("input").val(newVal);
	    spinner.find("input").trigger("change");
	  });

	});

	$('.quantity-button').on('click', function(){
		var parents = $(this).parents('.holder-slider__info');
		let summ = $('.holder-slider__description-title--summ', parents).data('nights') * $('.nights', parents).val() + $('.holder-slider__description-title--summ', parents).data('guests') * ($('.guests', parents).val() - 1);
		$('.holder-slider__description-title--summ', parents).html('$' + summ);
	});

	$('.quantity').each(function() {
		var parents = $(this).parents('.holder-slider__info');
		let summ = $('.holder-slider__description-title--summ', parents).data('nights') * $('.nights', parents).val() + $('.holder-slider__description-title--summ', parents).data('guests') * ($('.guests', parents).val() - 1);
		$('.holder-slider__description-title--summ', parents).html('$' + summ);
	});

	$('.shop-slider__surfboard-circles').on('click', function(){
		$(this).toggleClass('active');
	});

	$(".menu-link").click(function(){
		$(this).toggleClass("menu-link--active");
		$(".menu").toggleClass("menu--active");
	});

	new WOW({
		mobile: false
	}).init();


});