/**
 *
 * Demo usage of Magnific Popup for page _templates.twig
 * Edit this file and remove this line if project need to use
 *
 */
import $ from 'jquery';
import magnificPopup from 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

export default class Modal {
	constructor(el) {
		$('.popup-with-zoom-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: false,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300
		});
	}
}