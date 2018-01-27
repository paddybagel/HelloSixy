$(document).ready(function(){

	var is_mobile = false;

	if( $('#mobile_detector').css('display')=='none') {
			is_mobile = true;       
	}

	$(window).scrollTop(0);
	$('#e8_make_logo').delay(500).animate({ 'opacity': 1 },1000);
	$('.down_icon span').delay(1500).fadeIn(1000);

	$('.down_icon span').on('click', function(){
		if (!$(this).hasClass('active')){	
			$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
			$(this).addClass('active');
			$(this).css({'transform' : 'rotate(180deg)'})
		} else {
			//$("html, body").animate({ scrollTop: "33vw" }, 600);
			$("html, body").animate({ scrollTop: 0 });
			$(this).removeClass('active');
			if ($(this).data('lastdir') == "0"){
				$(this).css({'transform' : 'rotate(360deg)'});	
				$(this).data('lastdir', 1);
			} else {
				$(this).css({'transform' : 'rotate(0deg)'});	
				$(this).data('lastdir', 0);
			}	
		}
	});
	
	$('.open_dialog').on('click', function(){
			switch ($(this).attr('id')){
				case 'Order_Prints_Container':
		$('html, body').animate({'scrollTop': 0}, 600);
					$('#Order_Prints.dialog_container').delay(600).queue(function(next){
							$(this).addClass('active');
							$('.down_icon span').fadeOut(600);
							next();
					});
					break;
			/*	case 'Information_Container':
					$('#Information.dialog_container').addClass('active')
					$('#Information_Form').addClass('active');	
					$('.down_icon span').fadeOut(600);					
					break;*/
				case 'Contact_Container':
		$('html, body').animate({'scrollTop': 0}, 600);
					$('#Contact.dialog_container').delay(600).queue(function(next){
							$(this).addClass('active')							
							$('.down_icon span').fadeOut(600);
							next();
					});
					var center = map.getCenter();
					google.maps.event.trigger(map, "resize");
					map.setCenter(center);
					break;
			}
	});

	$('#Open_DesignSpec_Dialog').on('click', function(){
		if (is_mobile == false){
			$('#Information.dialog_container').addClass('active')
			$('#Information_Form').addClass('active');	
			$('.down_icon span').fadeOut(600);
			$('html, body').animate({'scrollTop': 0}, 600);
		}
	});

	$('#Open_FAQ_Dialog').on('click', function(){
		$('#collapse1').collapse("hide");
		$('#FAQ').addClass('active');	
		$('.down_icon span').fadeOut(600);
		$('html, body').animate({'scrollTop': 0}, 600);
	});

	$(".panel-title a").on('click', function(){
		var $Selected_Panel = $(this).parent().parent().parent();
		if(!$Selected_Panel.hasClass('active')){
			$Selected_Panel.addClass('active');
		} else {
			$Selected_Panel.removeClass('active');
		}
	});
	
	$('.material_icon').hover( function(){
		var PrinterImage = $(this).parent().parent().parent().parent().find('img.printer_image');
		var PrinterTitle = $(this).parent().parent().parent().parent().find('h3.printer_title');
		var MaterialInfo = $(this).parent().parent().parent().parent().find('div.material_icon_info');
		var Direction = $(this).parent().parent().parent().data('direction');

		if (Direction == 'left'){
			PrinterImage.stop().animate({marginLeft: -400, opacity: 0}, 600);
			PrinterTitle.stop().animate({marginLeft: -400, opacity: 0}, 600);
		} else {
			PrinterImage.stop().animate({marginRight: -400, opacity: 0}, 600);
			PrinterTitle.stop().animate({marginRight: -400, opacity: 0}, 600);
		}
		MaterialInfo.find('h3').html($(this).data('material'));
		MaterialInfo.find('p').html($(this).data('material_description'));
		MaterialInfo.stop().animate({opacity: 1}, 600);
	}, function(){
		var PrinterImage = $(this).parent().parent().parent().parent().find('img.printer_image');
		var PrinterTitle = $(this).parent().parent().parent().parent().find('h3.printer_title');
		var MaterialInfo = $(this).parent().parent().parent().parent().find('div.material_icon_info');
		PrinterImage.stop().animate({margin: 0, opacity: 1}, 600);
		PrinterTitle.stop().animate({margin: 0, opacity: 1}, 600);
		MaterialInfo.stop().animate({opacity: 0}, 600);
	});
	
	$('.close_box').on('click', function(){
		$(this).parent().removeClass('active').delay(600).queue(function(){
			$('#Information_Form .row').find('.small').removeClass('small');
			$('#Information_Form .row').find('.active').removeClass('active');
			$('a.design_guide').addClass('active');
			$(this).dequeue();
		});
		if(!$(this).hasClass('design_specification')){
			$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
			$('.down_icon span').fadeIn(600);
		}
	});
	
	$('#Information .design_guide').on('click', function(){
		var Printer = $(this).parent().parent().parent().parent();
		$('a.design_guide').removeClass('active');
		$(this).parent().parent().prev().addClass('active');
		Printer.removeClass('small');
		Printer.addClass('active');
			if (Printer.hasClass('printer1')){
				Printer.next().removeClass('active');
				Printer.next().addClass('small');
				Printer.next().find('a.design_guide_close').addClass('active');
			} else if (Printer.hasClass('printer2')){
				Printer.prev().removeClass('active');
				Printer.prev().addClass('small');
				Printer.prev().find('a.design_guide_close').addClass('active');
			}
	});
	$('#Information .design_guide_close').on('click', function(){
			$('#Information_Form .row').find('.small').removeClass('small');
			$('#Information_Form .row').find('.active').removeClass('active');
			$('.body_container').delay(600).queue(function(){
				$(this).removeClass('active');
				$(this).dequeue();
			});
			$('a.design_guide').addClass('active');
			$(this).removeClass('active');
	});
	$('a.in[data-toggle="collapse"]').on('click', function(){

			$(".panel.active a").trigger('click');
			$('.panel-collapse.in').collapse("hide");
	});
	$('.design_spec').on('click', function(){
		if(!$('#Design_Specification').hasClass('active')){
			$('#Design_Spec_Image').attr('src', $(this).attr('src'));
			$('#Design_Spec_Title').html($(this).data('spec_title'));
			$('#Design_Spec_Thickness').html($(this).data('thickness'));
			$('#Design_Spec_Description').html($(this).data('spec_description'));
			$('#Design_Specification').addClass('active');
		} else {
			$('#Design_Specification').removeClass('active');
		}
	});
});