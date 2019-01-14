jQuery(document).ready(function() {
	jQuery('.field-name-field-feature-images .field-items .field-item').each(function(index, item){
		jQuery(this).append(jQuery('.field-name-field-feature-contents .field-items .field-item > div')[0]);
	});
})