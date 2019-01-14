jQuery(document).ready(function() {
	var title = jQuery('.field-name-field-follow-us-content .field-item h3').html();
	var addiontal_icon = "<i class='fa fa-instagram'></i> " + title 
	jQuery('.field-name-field-follow-us-content .field-item h3').html(addiontal_icon);
})