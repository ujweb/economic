$(document).ready(function () {
	var width = $(window).width(),
		height = $(window).height(),
		headerHeight = $('header').outerHeight();
	$(".hamburger").click(function () {
		$(".hamburger, nav").toggleClass("active");
	});
	// Smooth scrolling using jQuery easing
	$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate({
					scrollTop: target.offset().top - headerHeight
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	$('.bottom').on('click', function () {
		$('body').addClass('modal-open');
		$('.modal').fadeIn().addClass('show');
	});
	$('.modal').on('click', function () {
		$('body').removeClass('modal-open');
		$('.modal').fadeOut().removeClass('show');
	});
	$('.modal .modal-body').on('click', function (e) {
		e.stopPropagation();
	});
	$('.option').each(function(){
		var item = $(this).children().length;
		if (item > 2) {
			$(this).addClass('option-list');
		}
	})
	$('.card-group').slick({
		slidesToShow: 4,
		arrows: true,
		prevArrow: '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg></div>',
		nextArrow: '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></div>',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}],
	});
	function shuffle(arra1) {
		var ctr = arra1.length, temp, index;
		while (ctr > 0) {
			index = Math.floor(Math.random() * ctr);
			ctr--;
			temp = arra1[ctr];
			arra1[ctr] = arra1[index];
			arra1[index] = temp;
		}
		return arra1;
	}
	function random() {
		var keys = '',
			keywords = ['超低利率', '顏值經濟', '未來城市', '美國大選', '數位金融', '場景革命', '零接觸商機', 'AIOT', '未來高教', '戀家經濟', '5G', '電動車'];
		for (let loop = 0; loop < 120; loop++) {
			for (let i = 0; i < shuffle(keywords).length; i++) {
				keys += '<li><span>' + shuffle(keywords)[i] + '</span></li>';
			}
		}
		$('ul.keyword').html(keys);
		for (let j = 0; j < shuffle(keywords).length; j++) {
			keys += '<li><span>' + shuffle(keywords)[j] + '</span></li>';
			$("li:contains('" + shuffle(keywords)[j] + "')").eq( 9 * j ).addClass('active').children().css('animation-delay', j + 's');
		}
	}
	random();
	setInterval(function(){
		random();
	}, 10000);
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll >= height / 3) {
			$("header").addClass("scroll");
		} else {
			$("header").removeClass("scroll");
		}
	});
});
