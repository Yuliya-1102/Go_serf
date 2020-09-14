$(function(){

	$('.header__slider').slick({
		Infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-dotshead'
	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
 		slidesToScroll: 4,
  		asNavFor: '.header__slider',
      responsive: [
    {
      breakpoint: 961,
      settings: "unslick",
    },
  ]	
	});
	$('.serf-slider').slick({
		slidesToShow: 4,
 		slidesToScroll: 1,
 		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-map',
     responsive: [
    {
      breakpoint: 1210,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    },
  ]
	});
	$('.slider-map').slick({
		slidesToShow: 8,
 		slidesToScroll: 1,
 		arrows: false,
 		asNavFor: '.serf-slider',
 		focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1103,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        centerMode: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    },
  ]
	});
	$('.holder__slider').slick({
		Infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-dotshead'
	});
	$('.shop__slider').slick({
		Infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
		
	});


  	
  	 $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./img/plus.svg"></div><div class="quantity-button quantity-down"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iNCIgdmlld0JveD0iMCAwIDE0IDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjEzNzUyNyAwLjM3Njk1M0gxMy44NjMzVjMuMTIxNzhIMC4xMzc1MjdMMC4xMzc1MjcgMC4zNzY5NTNaIiBmaWxsPSIjNEFGNkNEIi8+Cjwvc3ZnPgo="></div></div>').insertAfter('.quantity input');
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

    // summa
    


    $('.quantity-button').on('click', function(){
    	let sum = $('.quests').val() * $('.summ').data('nights') + $('.nights').val() * $('.summ').data('quests');
    	$('.summ').html('$' + sum);
    });
    	let sum = $('.quests').val() * $('.summ').data('nights') + $('.nights').val() * $('.summ').data('quests');
    	$('.summ').html('$' + sum);


    // plus or minus

    $('.surfboard-box__circle').on('click', function(){
    	$(this).toggleClass('active');
    });

    // menu
    
    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('active');
      $('.header__aside').toggleClass('active');
    });

      
    new WOW().init();
});