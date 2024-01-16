// TOP Menu Sticky
"use strict";

/* 2. sticky And Scroll UP */
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
      $('#back-top').fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $('#back-top').fadeIn(500);
    }
  });

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};

     // stikcy js
     $("#sticker").sticky({
        topSpacing: 0
    });

             // wow js
   new WOW().init();

/*------------------------------------------------------------------------------*/
/* Prettyphoto
/*------------------------------------------------------------------------------*/
$(function () {

    // Normal link
   jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
       if( jQuery(this).attr('target')!='_blank' && !jQuery(this).hasClass('prettyphoto') && !jQuery(this).hasClass('modula-lightbox') ){
           var attr = $(this).attr('data-gal');
           if (typeof attr !== typeof undefined && attr !== false && attr!='prettyPhoto' ) {
               jQuery(this).attr('data-rel','prettyPhoto');
           }
       }
   });     

   jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
   jQuery('a.cmt_prettyphoto').prettyPhoto();
   jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
   jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'})

});

$('.carousel-destination').owlCarousel({
    center: false,
    loop: true,
    items:1,
    autoplay:true,
    margin: 30,
    stagePadding: 0,
    nav: false,
    responsiveClass:true,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 4
        }
    }
});
$(document).on('click', '.owl-item>div', function(){
    var $speed = 1000;
    $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
  });

  $('.testmonial_active').owlCarousel({
    loop:true,
    margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    nav:false,
  dots:true,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
    responsive:{
        0:{
            items:1,
            dots:false,
        },
        767:{
            items:1,
            dots:false,
        },
        992:{
            items:1,
        },
        1200:{
            items:1,
        },
        1500:{
            items:1
        }
    }
  });
  
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
 $(document).ready(function(){
        $('.progress-title > span').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 1500,
                easing: 'swing',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
    jQuery('#totop').hide();

    jQuery(window).scroll(function() {
        "use strict";
        if (jQuery(this).scrollTop() >= 1000) {        // If page is scrolled more than 50px
            jQuery('#totop').fadeIn(200);    // Fade in the arrow
            jQuery('#totop').addClass('top-visible');
        } else {
            jQuery('#totop').fadeOut(200);   // Else fade out the arrow
            jQuery('#totop').removeClass('top-visible');
        }
    });
    
    jQuery('#totop').on("click",function() {      // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
        return false;
    });
    
    
 
    // $(function() {

    //   var owl = $('.owl-1');
    //     owl.owlCarousel({
    //         loop:false,
    //         margin:0,
    //         nav:false,
    //         dots: false,
    //         items: 1,
    //         smartSpeed: 1000,
    //         autoplay: false,
    //         navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    //     });
    
    //     var carousel_nav_a = $('.carousel-nav a');
    
    //     carousel_nav_a.each(function(slide_index){
    //         var $this = $(this);
    //         $this.attr('data-num', slide_index);
    //         $this.click(function(e) {
    //             owl.trigger('to.owl.carousel',[slide_index,1500]);
    //             e.preventDefault();
    //         })
    //     })
    
    //     owl.on('changed.owl.carousel', function(event) {
    //         carousel_nav_a.removeClass('active');
    //         $(".carousel-nav a[data-num="+event.item.index+"]").addClass('active');
    //     })
    
      
    // })
    $('.client-box').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 15,
        dots: false,
        slideTransition: 'linear',
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        autoplaySpeed: 4500,
        responsive: {
          0: {
            items: 2
          },
          500: {
            items: 3
          },
          600: {
            items: 4
          },
          800: {
            items: 4
          },
          1200: {
            items: 4
          }
      
        }
      });
      
       // Facts counter
 $('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000
});
	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}
