// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.menu .item').tab();
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
    });
    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
    //Menus desplegables
    $('.ui.accordion').accordion();
   
    //Carousel
    $('.carousel').carousel({
       interval: 5000
     });

    //Tabs
    $('.menu .item').tab();

    
     var $demo = $('.ui.shape'),$directionButton = $('.direction .button'),handler;
 // event handlers
    handler = {
        rotate: function() {
            var
            $shape    = $(this).closest('.buttons').prevAll('.ui.shape').eq(0),
            direction = $(this).data('direction') || false,
            animation = $(this).data('animation') || false;
            if(direction && animation) {
                $shape
                .shape(animation + '.' + direction);
            }
        }
    };

    //Carrouseles giratorios
    $demo.shape();
    $directionButton.on('click', handler.rotate).popup({
        position  : 'bottom center'
    });
    //facebook plugin
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  });
