/**
 *
 * Demo usage of Slick Slider for page _templates.twig
 * Edit this file and remove this line if project need to use
 *
 */
import $ from 'jquery';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';

export default class Carousel {
	constructor(el) {
		$(el).slick({
			dots: true,
			arrow: true
		});
	}
}