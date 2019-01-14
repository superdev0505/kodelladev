jQuery('.multi-item-carousel .item').each(function(){
  var next = jQuery(this).next();
  if (!next.length) next = jQuery(this).siblings(':first');
  jQuery('.item__third', jQuery(this)).after(next.children(':first-child').clone());
});
jQuery('.multi-item-carousel .item').each(function(){
  var prev = jQuery(this).prev();
  if (!prev.length) prev = jQuery(this).siblings(':last');
  jQuery('.item__third:first-child', jQuery(this)).before(prev.children(':nth-last-child(3)').clone());
});