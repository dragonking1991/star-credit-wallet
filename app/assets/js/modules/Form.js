/**
 *
 * Demo usage of Magnific Popup for page _templates.twig
 * Edit this file and remove this line if project need to use
 *
 */
import $ from 'jquery';

export default class Form {
	constructor(el) {
		$('input, textarea').on('focus',function(){
			var wrap_input = $(this).parents('.input__wrapper');
			if( !wrap_input.hasClass('focus') ){
				wrap_input.addClass('focus');
			}
		});
		$(document).on( 'change','input', function(){
			var wrap_input = $(this).parents('.input__wrapper');
			if( !wrap_input.hasClass('focus') ){
				wrap_input.addClass('focus');
			}
		});
		$('input, textarea').on('blur',function(){
			var wrap_input = $(this).parents('.input__wrapper');
			if( wrap_input.hasClass('focus') && $(this).val() == '' ){
				wrap_input.removeClass('focus');
			}
		});

		$('input, textarea').each(function(){
			if ( $(this).val() != '') {
				var wrap_input = $(this).parents('.input__wrapper');
				wrap_input.addClass('focus');
			}
		});
	}
}