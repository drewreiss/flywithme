jQuery(function () {
	"use strict";
    
    /*global jQuery, $, super_slides */ 
	//Slider 
	$(document).ready(function(){
		$('#one-by-one-slider').onebyoneslider({
			slideshow_interval	: 10000,
			easing		: 'ease',
			animation	: 'center',
			autoplay	: true,
			speed		: 1500,
		});

		$('.bxslider').bxSlider({
			mode: 'fade',
			auto: true,
			pager:false,
			nextText:'>',
			prevText:'<',
		});
	  
		$('.speakers').bxSlider({
			slideWidth: 370,
			minSlides: 1,
			maxSlides: 3,
			pager:false,
			useCSS:false,
			infiniteLoop:true,
		});
	  
		$('.photogallery').bxSlider({
			pagerCustom: '.image_thumb',
            captions: true
		});
		
		$('.image_thumb').bxSlider({
			slideWidth:289,
			minSlides: 2,
			maxSlides: 4,
			pager:false,
		});
		
		$('.venues').bxSlider({
			mode: 'fade',
			auto: true,
			pager:false,
			controls:false,
			pause:4000,
			speed:1000
		});
		
		$('.home_area').parallax("50%", 0.1);
		$('.f_fac_area').parallax("50%", 0.1);
		$('.schedule_area').parallax("50%", 0.1);
		$('.faq_area').parallax("50%", 0.1);
		$('.text-block').parallax("50%", 0.1);
		$('.text-block2').parallax("50%", 0.1);
		$('.testimonial_area').parallax("50%", 0.1);
		$('.register_area').parallax("50%", 0.1);
		
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		
		jQuery('.navbar-collapse').click('li', function() {
			jQuery('.navbar-collapse').collapse('hide');
		});
		
		jQuery('#navigation_1').affix({
		  offset: { top: $('#navigation_1').offset().top }
		});
		
		$('.navigation_1').onePageNav({});
		
		$(window).bind('scroll', function() {
			parallax();
		});
		
		$('a.lm-speak').click(function() {
			$('html, body').animate({ scrollTop:$('#speakers').offset().top - 0 }, 2000,
			function() {
				parallax();
			});
			return false;
		});
		$('a.lm-gallery').click(function() {
			$('html, body').animate({ scrollTop:$('#photo_gallery').offset().top - 0 }, 2000,
			function() {
				parallax();
			});
			return false;
		});
		$('a.lm-sponsor').click(function() {
			$('html, body').animate({ scrollTop:$('#sponsor').offset().top - 0 }, 2000,
			function() {
				parallax();
			});
			return false;
		});
		
		function parallax() {}

		$('#super_slides').superslides({
			animation: 'fade',
			play: 4000,
			pagination: false,
			inherit_height_from: super_slides,
		});
		
		//Magnific Pop UP
		jQuery('.image-popup-fit-width').magnificPopup({
		  type: 'image',
		  closeOnContentClick: true,
		  closeBtnInside:true,
		  image: {
			verticalFit: false
		  },			
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
			beforeOpen: function() {
			  // just a hack that adds mfp-anim class to markup 
			  this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			  this.st.mainClass = this.st.el.attr('data-effect');
			}
		  },
		  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.		
		});	

		jQuery('.popup-youtube, .popup-vimeo').magnificPopup({
			//disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		// Number Counter
		(function() {
		  var Core = {
			initialized : false,
			initialize : function() {
			  if (this.initialized)
				return;
			  this.initialized = true;
			  this.build();
			},
			build : function() {
			  this.animations();
			},
			animations : function() {
			  // Count To
			  $(".number-counters [data-to]").each(function() {
				var $this = $(this);
				$this.appear(function() {
				  $this.countTo({});
				}, {
				  accX : 0,
				  accY : -150
				});
			  });
			},
		  };
		  Core.initialize();
		})();

		//Elements Appear from top
		jQuery('.animate_top').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).delay(200).animate({
					opacity : 1,
					top : "0px"
				}, 2000);
			});
		});

		//Elements Appear from bottom
		jQuery('.animate_bottom').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).delay(200).animate({
					opacity : 1,
					bottom : "0px"
				}, 2000);
			});
		});
		//Elements Appear from left
		jQuery('.animate_left').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).delay(200).animate({
					opacity : 1,
					left : "0px"
				}, 2000);
			});
		});

		//Elements Appear from right
		jQuery('.animate_right').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).delay(200).animate({
					opacity : 1,
					right : "-60px"
				}, 2000);
			});
		});

		//Elements Appear in fadeIn effect
		jQuery('.animate_fade_in').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).delay(300).animate({
					opacity : 1,
					right : "0px"
				}, 3000);
			});
		});


		//sec_headding h2 span Appear from left
		jQuery('.sec_headding h1').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).delay(300).animate({
					opacity : 1,
					right : "0px"
				}, 3000);
			});
		});

		//sec_headding h2 span Appear from left
		jQuery('.sec_headding h1 span:first-child').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).delay(200).animate({
					opacity : 1,
					left : "0px"
				}, 2000);
			});
		});

		//sec_headding h2 span Appear from right
		jQuery('.sec_headding h1 span:last-child').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).delay(200).animate({
					opacity : 1,
					right : "-60px"
				}, 2000);
			});
		});     
        
        
	});
    
}());