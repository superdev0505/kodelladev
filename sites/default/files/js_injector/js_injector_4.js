jQuery(document).ready(function() {
	jQuery('.field-name-field-technology-carousel-item-d .field-items .field-item').addClass('technology-description');
	jQuery('.field-name-field-technology-carousel-images .field-items .field-item').each(function(index, item){
		jQuery(this).append(jQuery('.field-name-field-technology-carousel-item-d .field-items .field-item')[0]);
	});

	jQuery('.field-name-field-founder-heritage-descripti .field-items .field-item').addClass('founder-heritage-description');
	jQuery('.field-name-field-founder-heritage-carousel .field-items .field-item').each(function(index, item){
		jQuery(this).append(jQuery('.field-name-field-founder-heritage-descripti .field-items .field-item')[0]);
	});


	jQuery('.field-name-field-technology-carousel-images .field-items').addClass('owl-carousel');
	jQuery('.field-name-field-technology-carousel-images .field-items').owlCarousel({
		loop: true,
		margin: 20,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
			  items: 1
			},
			600: {
			  items: 1
			},
			1000: {
			  items: 3
			}
		}	
	})

	jQuery('.field-name-field-founder-heritage-carousel .field-items').addClass('owl-carousel');
	jQuery('.field-name-field-founder-heritage-carousel .field-items').owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		items: 1
	})
});