jQuery(document).ready(function() {
    var add_cart_circle = jQuery('.shopify-add-to-cart-button');
    var one_click_circle = jQuery('#block-system-main .commerce-buy-one-click-button-wrapper button');

    var add_cart_circle_html = "<img src='/sites/default/files/pictures/add-to-cart-circle.png' width='32px'>&nbsp;&nbsp;Add to Bag";
    var one_click_circle_html = "<img src='/sites/default/files/pictures/one-click-buy-circle.png' width='32px'>&nbsp;&nbsp;1-Click Buy";

    add_cart_circle.html(add_cart_circle_html);
    one_click_circle.html(one_click_circle_html);

    var page_header = jQuery("h1.page-header");
    var booking_menu = jQuery("section#block-menu-menu-shopping-menu");
    booking_menu.after(page_header);

    jQuery("#block-menu-menu-shopping-menu .menu.nav > li .dropdown-menu").hide();
    jQuery("#block-menu-menu-shopping-menu .menu.nav > li.active .dropdown-menu").show();

    jQuery("#block-menu-menu-shopping-menu .menu.nav > .dropdown").click(function() {
    	setTimeout(function(){
    		var open_nav_menu = jQuery("#block-menu-menu-shopping-menu .menu.nav > li.open");
		    if(open_nav_menu.length) {
		    	jQuery("#block-menu-menu-shopping-menu .menu.nav > li .dropdown-menu").hide();
		    	jQuery("#block-menu-menu-shopping-menu .menu.nav > li.open .dropdown-menu").show();
		    } else {
		    	jQuery("#block-menu-menu-shopping-menu .menu.nav > li .dropdown-menu").hide();
		    	jQuery("#block-menu-menu-shopping-menu .menu.nav > li.active .dropdown-menu").show();
		    }
    	},100);
    	
    })
});