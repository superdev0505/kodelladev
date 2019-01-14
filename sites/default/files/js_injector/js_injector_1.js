jQuery(document).ready(function() {
    var add_cart = jQuery('#block-system-main .shopify-add-to-cart-button');
    var one_click = jQuery('#block-system-main .commerce-buy-one-click-button-wrapper button');
    
    var add_cart_circle = jQuery('#block-views-related-products-block .commerce-add-to-cart .btn.btn-success.form-submit');
    var one_click_circle = jQuery('#block-views-related-products-block .commerce-buy-one-click-button-wrapper button');

    var add_cart_html = "<img src='/sites/default/files/pictures/add-to-cart.png' width='25px'>&nbsp;&nbsp;Add to Bag";
    var one_click_html = "<img src='/sites/default/files/pictures/one-click-buy.png' width='25px'>&nbsp;&nbsp;1-Click Buy";

    var add_cart_circle_html = "<img src='/sites/default/files/pictures/add-to-cart-circle.png' width='32px'>&nbsp;&nbsp;Add to Bag";
    var one_click_circle_html = "<img src='/sites/default/files/pictures/one-click-buy-circle.png' width='32px'>&nbsp;&nbsp;1-Click Buy";

    add_cart.html(add_cart_html);
    one_click.html(one_click_html);

    add_cart_circle.html(add_cart_circle_html);
    one_click_circle.html(one_click_circle_html);

    var sku = jQuery('.field-sku');
    jQuery('.field-name-title-field').after(sku);

    var quantity = jQuery(".form-item-quantity input");                  
    var htmlprev = "<button class='quantity-addon quantity-minus'>-</button>";
    var htmlafter = "<button class='quantity-addon quantity-plus'>+</button>";
    quantity.before(htmlprev);
    quantity.after(htmlafter);

    var size = jQuery("select[id^='edit-product-id']");
    var labelsize = "<label class='control-label' for='edit-product-id'>Size</label>";
    size.before(labelsize);
    var dropdownicon = "<i id='product-drop-down' class='fa fa-caret-down'/>"
    size.after(dropdownicon);

    jQuery('#product-drop-down').click(function() {
        jQuery("#edit-product-id").trigger('click');
    });


    jQuery('.quantity-addon.quantity-minus').click(function(e) {
        e.preventDefault();
        current_qty = jQuery("input#edit-quantity").val();
        console.log(current_qty);
        if(current_qty != 1) {
            current_qty = Number(current_qty) - 1;
        }
        jQuery("input#edit-quantity").val(current_qty);
    });
    jQuery('.quantity-addon.quantity-plus').click(function(e) {
        e.preventDefault();
        current_qty = jQuery("input#edit-quantity").val();
        console.log(current_qty);
        if(current_qty != 9999) {
            current_qty = Number(current_qty) + 1;
        }
        jQuery("input#edit-quantity").val(current_qty);
    });
});
jQuery(document).ajaxComplete(function() {
    var add_cart = jQuery('#block-system-main .commerce-add-to-cart .btn.btn-success.form-submit');
    var one_click = jQuery('#block-system-main .commerce-buy-one-click-button-wrapper button');
    
    var add_cart_circle = jQuery('#block-views-related-products-block .commerce-add-to-cart .btn.btn-success.form-submit');
    var one_click_circle = jQuery('#block-views-related-products-block .commerce-buy-one-click-button-wrapper button');

    var add_cart_html = "<img src='/sites/default/files/pictures/add-to-cart.png' width='25px'>&nbsp;&nbsp;Add to Bag";
    var one_click_html = "<img src='/sites/default/files/pictures/one-click-buy.png' width='25px'>&nbsp;&nbsp;1-Click Buy";

    var add_cart_circle_html = "<img src='/sites/default/files/pictures/add-to-cart-circle.png' width='32px'>&nbsp;&nbsp;Add to Bag";
    var one_click_circle_html = "<img src='/sites/default/files/pictures/one-click-buy-circle.png' width='32px'>&nbsp;&nbsp;1-Click Buy";

    add_cart.html(add_cart_html);
    one_click.html(one_click_html);

    add_cart_circle.html(add_cart_circle_html);
    one_click_circle.html(one_click_circle_html);

    var sku = jQuery('.field-sku');
    jQuery('.field-name-title-field').after(sku)

    var quantity = jQuery(".form-item-quantity input");                  
    var htmlprev = "<button class='quantity-addon quantity-minus'>-</button>";
    var htmlafter = "<button class='quantity-addon quantity-plus'>+</button>";
    quantity.before(htmlprev);
    quantity.after(htmlafter);

    var size = jQuery("select[id^='edit-product-id']");
    var labelsize = "<label class='control-label' for='edit-product-id'>Size</label>";
    size.before(labelsize);
    var dropdownicon = "<i id='product-drop-down' class='fa fa-caret-down'/>"
    size.after(dropdownicon);

    jQuery('#product-drop-down').click(function() {
        jQuery("#edit-product-id").trigger('click');
    });

    jQuery('.quantity-addon.quantity-minus').click(function(e) {
        e.preventDefault();
        current_qty = jQuery("input#edit-quantity").val();
        console.log(current_qty);
        if(current_qty != 1) {
            current_qty = Number(current_qty) - 1;
        }
        jQuery("input#edit-quantity").val(current_qty);
    });
    jQuery('.quantity-addon.quantity-plus').click(function(e) {
        e.preventDefault();
        current_qty = jQuery("input#edit-quantity").val();
        console.log(current_qty);
        if(current_qty != 9999) {
            current_qty = Number(current_qty) + 1;
        }
        jQuery("input#edit-quantity").val(current_qty);
    });
})