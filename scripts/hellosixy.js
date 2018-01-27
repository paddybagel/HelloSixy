$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});

$(document).ready(function(){
	$('html, body').animate({scrollTop:0},10);


	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.sixy_audio_player').trigger('pause');
		$('body > .row').css('padding', 0);
		$('.audio_controller').hide();
		$('html, body').css('overflow-y', 'auto');
	} else {
		$('.main_logo, main_logo_hover').delay(5500).animate({'opacity': 1}, 600);
		$('.audio_controller').css('opacity', 0).delay(6400).animate({'opacity': 1}, 600).queue(function(){
			$('html, body').css('overflow-y', 'auto');
			$(this).dequeue();
		});
	}

	$(window).on('scroll', function(){
		var scrollTop = $(this).scrollTop();
		var scrollBottom = $(this).scrollTop() + $(this).height();
		var currentWidth = $('.main_logo').width()
		var newSize = ($(this).width() * (75/100)) + scrollTop


			//$('.main_logo').width(newSize);
			//$('.main_logo').css('opacity', 1 - (scrollTop / 100) )
			
		var titleContainer = $('.events_container .title_container');
			if (scrollTop < 150){
					titleContainer.addClass('fly_away');
					titleContainer.removeClass('animated bounce');
			} else {
					titleContainer.removeClass('fly_away').delay('500').queue(function(){
						$(this).addClass('animated bounce');
						$(this).dequeue();
					});
			}

		var addressContainer = $('.address_container');
			if (scrollBottom < ($('body').height() - 300)){
					addressContainer.removeClass('animated bounceInRight').css('opacity', '0');
			} else {
					addressContainer.delay(600).queue(function(){
						$(this).addClass('animated bounceInRight').css('opacity', '1');
						$(this).dequeue();
					});
			}

	});

	$('.main_logo').on('click', function(){
		var Source;
		var NewSource;
		if(!$(this).hasClass('reversed')){
			$(this).addClass('reversed');
			$('link[href="styles/hellosixy.css"]').attr('href','styles/hellosixy.reversed.css');
			$('.event_thumbnail img, .event_thumbnail_private img').each(function(){
				Source = $(this).attr('src');
				Source = Source.split('events');
				NewSource = Source[0] + 'events_reversed' + Source[1];
				$(this).attr('src', NewSource);
			});
			$('.gallery_image img').each(function(){
				Source = $(this).attr('src');
				Source = Source.split('space_images');
				NewSource = Source[0] + 'space_images_reversed' + Source[1];
				$(this).attr('src', NewSource);
			});
			$('.gallery_show_hide img').each(function(){
				Source = $(this).attr('src');
				Source = Source.split('icons');
				NewSource = Source[0] + 'icons_reversed' + Source[1];
				$(this).attr('src', NewSource);
			});
		} else {
			$(this).removeClass('reversed');
			$('link[href="styles/hellosixy.reversed.css"]').attr('href','styles/hellosixy.css');
			$('.event_thumbnail img, .event_thumbnail_private img').each(function(){
				Source = $(this).attr('src');
				Source = Source.split('events_reversed');
				NewSource = Source[0] + 'events' + Source[1];
				$(this).attr('src', NewSource);
			});
			$('.gallery_image img').each(function(){
				Source = $(this).attr('src');
				Source = Source.split('space_images_reversed');
				NewSource = Source[0] + 'space_images' + Source[1];
				$(this).attr('src', NewSource);
			});
			$('.gallery_show_hide img').each(function(){
				Source = $(this).attr('src');
				Source = Source.split('icons_reversed');
				NewSource = Source[0] + 'icons' + Source[1];
				$(this).attr('src', NewSource);
			});
		}
	});

	$('.audio_controller a').on('click', function(){
		if ($(this).hasClass('play')){
			$('.sixy_audio_player').trigger('play');
			$(this).removeClass('play').addClass('pause').find('i').removeClass().addClass('fa fa-pause-circle-o');
		} else if ($(this).hasClass('pause')){
			$('.sixy_audio_player').trigger('pause');
			$(this).removeClass('pause').addClass('play').find('i').removeClass().addClass('fa fa-play-circle-o');;
		}
	});

	$('.gallery_show_hide a').on('click', function(){
		var row = $(this).parent().parent();
		if ($(row).hasClass('active')){
			$(row).removeClass('active')
			$('ul.gallery').removeClass('active_child').find('li.active').removeClass('active');
			$('.row.active_full').removeClass('active_full');
		} else {
			$(row).addClass('active')
		}
	})

	$('.gallery_image').on('click', function(){
		var selected_li = $(this).parent();
		var row = $(selected_li).parent().parent();
		if($(selected_li).hasClass('active')){
			$(selected_li).removeClass('active').parent().removeClass('active_child');
			$(row).removeClass('active_full');
		} else {
			$('ul.gallery li.active').removeClass('active');
			$(selected_li).addClass('active').parent().addClass('active_child');
			$('.row.active_full').removeClass('active_full');
			$(row).addClass('active_full');
		}
	});
});

function SendEmail(){
	window.location.href = "mailto:Head@HelloSixy.com?subject=HEYA!";
}

function RedirectToMaps(){
		window.open('https://www.google.com/maps/dir/Current+Location/51.5411775,-0.0577864','_blank');
}
