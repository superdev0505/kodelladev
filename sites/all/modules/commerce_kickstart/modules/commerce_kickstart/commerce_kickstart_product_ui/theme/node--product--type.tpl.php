<article<?php print $attributes; ?> class="<?php if($page) {echo 'm-x-xl p-x-xl';}?>">
  
  <?php if($page): ?>
  <div class="col-md-5 text-center m-t-xl">
    <?php print render($content['product:field_images']); ?>
  </div>
  <div class="col-md-7 m-t-xl p-t-xl">
    <div<?php print $content_attributes; ?>>
      <?php
        // We hide the comments and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']);
        print '<h3 class="m-b-xs">'.$title.'</h3>';
        print render($content);
      ?>
    </div>
  </div>
  <?php endif;
  if (!$page): ?>
  <div class="col-md-12 p-x-md">
    <h3<?php print $title_attributes; ?> class="product-title m-lg"><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h3>
    <div<?php print $content_attributes; ?>>
      <?php
        // We hide the comments and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']);
        print render($content);
      ?>
    </div>
  </div>
  <?php endif;?>
  
</article>
