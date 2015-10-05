// Carousel Auto-Cycle
  $(document).ready(function() {

  /** Codigo para el menu lateral
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
    **/

    $('.carousel').carousel({
      interval: 6000
    })
  });
