/************* Main Js File ************************
    Template Name: Felona
    Author: Themescare
    Version: 1.0
    Copyright 2019
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============

01 - Main Slider JS
02 - Testimonial Slider JS
03 - Select JS
04 - Counter JS
05 - Youtube Popup JS
06 - Search JS
07 - Responsive Menu JS
08 - Back To Top


-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		=================================================================
		01 - Main Slider JS
		=================================================================	
		*/

		$(".felona-slide").owlCarousel({
			animateOut: 'fadeOutLeft',
			animateIn: 'fadeIn',
			items: 2,
			nav: true,
			dots: false,
			autoplayTimeout: 7000,
			autoplaySpeed: 2000,
			autoplay: true,
			loop: true,
			navText: ["<i class='fa fa-long-arrow-left'><i>", "<i class='fa fa-long-arrow-right'><i>"],
			mouseDrag: true,
			touchDrag: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				750: {
					items: 1
				},
				1000: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		});

		$(".felona-slide").on("translate.owl.carousel", function () {
			$(".felona-main-slide h2, .felona-main-slide p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".felona-main-slide .felona-btn").removeClass("animated fadeInDown").css("opacity", "0");
		});
		$(".felona-slide").on("translated.owl.carousel", function () {
			$(".felona-main-slide h2, .felona-main-slide p").addClass("animated fadeInUp").css("opacity", "1");
			$(".felona-main-slide .felona-btn").addClass("animated fadeInDown").css("opacity", "1");
		});


		/* 
		=================================================================
		02 - Testimonial Slider JS
		=================================================================	
		*/

		$(".testimonial-slide").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 20,
			touchDrag: true,
			mouseDrag: true,
			items: 1,
			nav: false,
			dots: true,
			autoplayTimeout: 6000,
			autoplaySpeed: 1200,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});


		/* 
		=================================================================
		03 - Select JS
		=================================================================	
		*/

		$('select').niceSelect();


		/* 
		=================================================================
		04 - Counter JS
		=================================================================	
		*/


		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});


		/* 
		=================================================================
		05 - Youtube Popup JS
		=================================================================	
		*/

		$('.popup-youtube').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});


		/* 
		=================================================================
		06 - Search JS
		=================================================================	
		*/

		$.fn.searchBox = function (ev) {

			var $searchEl = $('.search-elem');
			var $sField = $('#search-field');

			if (ev === "open") {
				$searchEl.addClass('search-open')
			};

			if (ev === 'close') {
				$searchEl.removeClass('search-open'),
					$sField.val('');
			};


		}

		$('.search-btn').on('click', function (e) {
			$(this).searchBox('open');
			e.preventDefault();
		});

		$('.search-close').on('click', function () {
			$(this).searchBox('close');
		});


		/* 
		=================================================================
		07 - Responsive Menu JS
		=================================================================	
		*/
		$("ul#felona_navigation").slicknav({
			prependTo: ".felona-responsive-menu"
		});


		/* 
		=================================================================
		08 - Back To Top
		=================================================================	
		*/
		if ($("body").length) {
			var btnUp = $('<div/>', {
				'class': 'btntoTop'
			});
			btnUp.appendTo('body');
			$(document).on('click', '.btntoTop', function () {
				$('html, body').animate({
					scrollTop: 0
				}, 700);
			});
			$(window).on('scroll', function () {
				if ($(this).scrollTop() > 200) $('.btntoTop').addClass('active');
				else $('.btntoTop').removeClass('active');
			});
		}


	});


}(jQuery));

