/*
Author       : rasti
Template Name: rasti - Digital Agency WordPress Theme
Version      : 1.0
*/

(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
	// one page nav
		$('#navigation').onePageNav({
			currentClass: 'current',
			changeHash: true,
			scrollSpeed: 3000,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function(jQuerycurrentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});	
			
		/*PRELOADER JS*/
		$(window).load(function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/


		// jQuery Menu Nav
		jQuery('#navigation').meanmenu({
			meanScreenWidth: "767",
			meanMenuContainer: ".menu_wrap",				
		});
		//sticky nav

			$(".stick").sticky({
				topSpacing: 0,
			})
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 

	// Home Slider
		var slider_active = $('.slider_active');
		slider_active.owlCarousel({
			loop:true,
			navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			smartSpeed:450,
			autoplay:true,
			autoplayTimeout:9000,
			mouseDrag:false,
			nav:true,
			dots:false,
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
			
								
		/*START COUNDOWN JS*/
		$('.counter').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/*END COUNDOWN JS */
		
		/*START Pricing JS*/
		$('.pricing-tab-switcher').on('click', function() {
			$(this).toggleClass('active');

			$('.pricing-amount').toggleClass('change-subs-duration');
		});
		/*END Pricing JS */
		
		/*START TESTIMONIAL JS*/		
			$('.testimonials_carousel').slick({
			  dots: false,
			  infinite: true,
			  nav: true,
			  speed: 300,
			  slidesToShow: 1,
			  adaptiveHeight: true
			});

		/*END TESTIMONIAL JS*/	
		
		/*START Partner JS*/		
			$('.partner').slick({
			  dots: false,
			  infinite: true,
			  nav: false,
			  speed: 300,
			  slidesToShow: 5,		
			  adaptiveHeight: true,
				responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				}, {
					breakpoint: 770,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]			  
			});

		/*END Partner JS*/

		/*START About Slider JS*/		
			$('.about-slider').slick({
			  dots: false,
			  infinite: true,
			  nav: true,
			  speed: 300,
			  slidesToShow: 1,
			  adaptiveHeight: true
			});

		/*END About Slider JS*/	

		// Countdown
	  
	  $('#comming-soon-active').countdown('2020/3/10', function(event) {
		var $this = $(this).html(event.strftime(''
			
			+ '<div><strong>%D</strong> <br /><p>Days</p></div>'
			+ '<div><strong>%H</strong> <br /><p>Hours</p></div>'
			+ '<div><strong>%M</strong> <br /><p>Minutes</p></div>'
			+ '<div><strong>%S</strong> <br /><p>Seconds</p></div>'));
		});
	  
	  
	/*  Stellar for background scrolling  */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* End Stellar for background scrolling  */		
	}); 	

				
})(jQuery);


  

