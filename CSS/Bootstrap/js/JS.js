var $document = $(document),
    $element = $('.navbar'),
    navbarDefault = 'navbar-default';
    navbarTransparent = 'navbar-transparent';

    fadeInDown = 'fadeInDown';


$document.scroll(function(){
  if ($document.scrollTop() >= 10 ) {
    $element.addClass(navbarDefault);
    $element.removeClass(navbarTransparent);

    $element.addClass(fadeInDown);
} else {

    $element.addClass(navbarTransparent);
    $element.removeClass(navbarDefault);


    $element.removeClass(fadeInDown);
}
});

